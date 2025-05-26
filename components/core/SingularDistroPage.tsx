"use client";
import React, { useEffect, useState, useMemo } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/mono-blue.css";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import TableOfContents from "@/components/core/layout/TableOfContents";
import { distros } from "@/db/distros-v1";
import LoadingComponent from "./LoadingComponent";

const SingularDistroPage = ({ id }: { id: string }) => {
  const articleIndex = distros.findIndex((cmd) => cmd.distro === id);
  if (articleIndex === -1) notFound();

  const article = distros[articleIndex];
  const previous = distros[articleIndex - 1];
  const next = distros[articleIndex + 1];

  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    // Fetch markdown file from public folder via HTTP
    fetch(article.content)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch markdown");
        return res.text();
      })
      .then(setMarkdown)
      .catch(() => {
        setMarkdown("Error loading content.");
      });
  }, [article.content]);

  // Inject IDs for headings in markdown (client-side)
  const markdownWithIds = useMemo(() => {
    if (!markdown) return "";
    return markdown.replace(/^(#{1,6})\s+(.*)$/gm, (_, level, text) => {
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      return `${level} <a id="${id}" class="anchor"></a> ${text}`;
    });
  }, [markdown]);

  if (!markdown) return <LoadingComponent />;
  return (
    <main className="max-w-4xl mx-auto pt-12 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 max-w-3xl relative bg-background">
        <div className="text-7xl font-black opacity-50 absolute -top-12 left-0 z-10 font-dots">
          {article.distro}
        </div>

        <a href={article.deskimage} target="_blank" rel="noreferrer">
          <div className="relative">
            <img
              src={article.deskimage}
              alt={`${article.distro} desktop screenshot`}
              className="rounded-none mb-2 shadow-2xl relative z-40"
            />
          </div>
        </a>

        <div className="p-3 md:p-0 relative z-20">
          <h1 className="text-3xl font-bold mb-6">{article.distro}</h1>

          {markdown ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
            >
              {markdownWithIds}
            </ReactMarkdown>
          ) : (
            <p>Loading content...</p>
          )}

          <footer className="mt-8 flex justify-between text-sm text-muted-foreground border-t pt-4 pb-24">
            {previous ? (
              <Link
                href={`/distros/${previous.distro}`}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                <div className="flex items-center gap-2">
                  <ArrowLeft size={14} />
                  <span>{previous.distro}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/distros/${next.distro}`}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                <div className="flex items-center gap-2">
                  <span>{next.distro}</span>
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

export default SingularDistroPage;
