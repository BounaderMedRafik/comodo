"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { commands } from "@/db/commands-v1";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export type Command = {
  command: string;
  description: string;
  content?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

const highlightMatch = (text: string, query: string) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-yellow-300 rounded">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
};

export const SearchComponent = ({ type }: { type: "nav" | "hero" }) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Only add keyboard listener if type is "nav"
  useEffect(() => {
    if (type !== "nav") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [type]);

  const filtered = commands.filter(
    (cmd) =>
      cmd.command.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* Remove DialogTrigger since we use manual open state */}
        {type === "nav" ? (
          <div
            onClick={() => setOpen(true)}
            className={
              " text-xs flex transition-all duration-300 items-center gap-3 bg-input/10 hover:bg-input/50 cursor-pointer px-2 py-1 border border-dashed"
            }
          >
            <Search className=" -mt-0.5" size={14} />
            <div className=" opacity-75">Search ...</div>
          </div>
        ) : (
          <div
            onClick={() => setOpen(true)}
            className="flex items-center justify-center gap-3 min-w-md p-2 px-3.5 bg-background backdrop-blur-lg hover:-translate-y-1 transition-all  border border-dashed shadow-2xl cursor-pointer"
          >
            <Search size={12} />
            <div className="text-sm font-mono opacity-50 top-1">
              Search for anything...
            </div>
          </div>
        )}

        <DialogContent className="p-0 m-0 bg-transparent border-none w-96">
          <DialogTitle className="hidden" />
          <div>
            <div id="input" className="relative border-3 border-dashed">
              <div className="absolute z-20 top-1/2 -translate-y-1/2 left-3">
                <Search size={18} />
              </div>
              <input
                className="w-full pl-10 bg-background/80 backdrop-blur-2xl  focus-visible:outline-none py-2 text-2xl px-4"
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {query && (
              <motion.div className="mt-1 bg-background/90 border-3 border-dashed overflow backdrop-blur-2xl  p-2 px-4 max-h-72 overflow-y-auto custom-scrollbar">
                {filtered.length > 0 ? (
                  filtered.map((cmd, index) => (
                    <DialogClose key={index} asChild>
                      <Link
                        href={`/commands/${cmd.command}`}
                        className="block hover:bg-muted p-2  transition-all text-foreground"
                      >
                        <div className="text-sm font-mono flex items-center gap-2">
                          <div
                            className={cn(
                              "size-2 rounded-full shadow",
                              cmd.difficulty === "Beginner"
                                ? "bg-green-400"
                                : cmd.difficulty === "Intermediate"
                                ? "bg-yellow-400"
                                : cmd.difficulty === "Advanced"
                                ? "bg-red-400"
                                : ""
                            )}
                          />
                          <div>{highlightMatch(cmd.command, query)}</div>
                        </div>
                        <div className="text-xs opacity-50">
                          {highlightMatch(cmd.description, query)}
                        </div>
                      </Link>
                    </DialogClose>
                  ))
                ) : (
                  <div className="text-sm opacity-50 font-mono h-22 flex items-center justify-center">
                    No results found.
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
