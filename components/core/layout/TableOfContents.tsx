"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface TableOfContentsProps {
  markdown: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ markdown }) => {
  const [toc, setToc] = useState<{ text: string; id: string }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings: { text: string; id: string }[] = [];
    const regex = /^(#{1,6})\s+(.*)$/gm;

    let match;
    while ((match = regex.exec(markdown)) !== null) {
      const fullText = match[2];
      const text = fullText.split(":")[0].trim(); // Truncate at colon
      const id = fullText
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ text, id });
    }

    setToc(headings);
  }, [markdown]);

  useEffect(() => {
    const updateHash = () => {
      setActiveId(window.location.hash?.substring(1));
    };

    updateHash(); // Set on initial load
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <nav className="p-3 sticky top-32 text-sm font-mono">
      {/* <div className=" text-lg font-light mb-4">Table of content</div> */}
      <div className="space-y-1">
        {toc.map((item) => (
          <div
            key={item.id}
            className={cn(
              "transition-all",
              activeId === item.id ? "pl-3 border-l border-dashed" : ""
            )}
          >
            <a
              href={`#${item.id}`}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-all",
                activeId === item.id && "opacity-100 text-foreground"
              )}
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default TableOfContents;
