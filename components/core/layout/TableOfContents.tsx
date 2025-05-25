"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface TableOfContentsProps {
  markdown: string;
}

interface TocItem {
  text: string;
  id: string;
  level: number;
}

const getPaddingClass = (level: number) => {
  switch (level) {
    case 1:
      return "pl-2";
    case 2:
      return "pl-4";
    case 3:
      return "pl-6";
    case 4:
      return "pl-8";
    case 5:
      return "pl-10";
    case 6:
      return "pl-12";
    default:
      return "pl-2";
  }
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ markdown }) => {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headings: TocItem[] = [];
    const regex = /^(#{1,6})\s+(.*)$/gm;

    let match;
    while ((match = regex.exec(markdown)) !== null) {
      const level = match[1].length;
      const fullText = match[2];
      const text = fullText.split(":")[0].trim(); // Truncate at colon
      const id = fullText
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ text, id, level });
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
      <div className="space-y-1">
        {toc.map((item) => (
          <div
            key={item.id}
            className={cn(
              "transition-all",
              getPaddingClass(item.level),
              activeId === item.id && "border-l border-dashed"
            )}
          >
            <a
              href={`#${item.id}`}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-all block",
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
