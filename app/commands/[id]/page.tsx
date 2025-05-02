import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";
import { commands } from "@/db/commands-v1";
import { useMemo } from "react";
import TableOfContents from "@/components/core/layout/TableOfContents";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CommandPage({ params }: PageProps) {
  const article = commands.find((cmd) => cmd.command === params.id);
  if (!article) notFound();

  const filePath = path.join(process.cwd(), article.content);
  const markdown = fs.readFileSync(filePath, "utf8");

  // Inject anchor IDs into headings
  const markdownWithIds = useMemo(() => {
    return markdown.replace(/^(#{1,6})\s+(.*)$/gm, (_, level, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      return `${level} <a id="${id}" class="anchor"></a> ${text}`;
    });
  }, [markdown]);

  return (
    <main className="max-w-4xl mx-auto pt-12 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">{article.command}</h1>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
        >
          {markdownWithIds}
        </ReactMarkdown>
      </div>

      <aside className="hidden lg:block w-64 shrink-0 border-l border-dashed">
        <TableOfContents markdown={markdown} />
      </aside>
    </main>
  );
}
