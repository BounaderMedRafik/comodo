"use client"; // This is a client-side component

import React, { useEffect, useState } from "react";

interface TableOfContentsProps {
  markdown: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ markdown }) => {
  const [toc, setToc] = useState<{ text: string; id: string }[]>([]);

  useEffect(() => {
    const headings: { text: string; id: string }[] = [];
    const regex = /^(#{1,6})\s+(.*)$/gm; // Regex to match markdown headings

    // Extract headings from markdown content
    let match;
    while ((match = regex.exec(markdown)) !== null) {
      const level = match[1].length; // Heading level (h1, h2, etc.)
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");
      headings.push({ text, id });
    }

    setToc(headings);
  }, [markdown]);

  return (
    <nav className="p-3 sticky top-32 text-sm font-mono">
      <div className="space-y-1">
        {toc.map((item) => (
          <div key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
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
