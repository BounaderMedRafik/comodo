import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/mono-blue.css";

import { commands } from "@/db/commands-v1";
import TableOfContents from "@/components/core/layout/TableOfContents";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

interface SingularCommandPageProps {
  id: string;
}

const SingularCommandPage = ({ id }: SingularCommandPageProps) => {
  const articleIndex = commands.findIndex((cmd) => cmd.command === id);
  if (articleIndex === -1) notFound();

  const article = commands[articleIndex];
  const previous = commands[articleIndex - 1];
  const next = commands[articleIndex + 1];

  const filePath = path.join(process.cwd(), article.content);
  const markdown = fs.readFileSync(filePath, "utf8");

  const markdownWithIds = markdown.replace(
    /^(#{1,6})\s+(.*)$/gm,
    (_, level, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      return `${level} <a id="${id}" class="anchor"></a> ${text}`;
    }
  );

  return (
    <main className="max-w-4xl mx-auto pt-12 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 max-w-3xl relative bg-background">
        <div className="text-7xl font-black opacity-50 absolute -top-12 left-0 z-10 font-dots">
          {article.command}
        </div>

        <div className="bg-background/20 p-3 md:p-0 backdrop-blur-2xl relative z-20">
          <h1 className="text-3xl font-bold mb-6 pl-3">{article.command}</h1>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
          >
            {markdownWithIds}
          </ReactMarkdown>

          <footer className="mt-8 flex justify-between text-sm text-muted-foreground border-t pt-4 pb-24">
            {previous ? (
              <Link
                href={`/commands/${previous.command}`}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                <div className="flex items-center gap-2">
                  <ArrowLeft size={14} />
                  <span>{previous.command}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/commands/${next.command}`}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                <div className="flex items-center gap-2">
                  <span>{next.command}</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </footer>
        </div>
      </div>

      <aside className="hidden lg:block w-64 shrink-0 border-l border-dashed">
        <TableOfContents markdown={markdown} />
      </aside>
    </main>
  );
};

export default SingularCommandPage;
