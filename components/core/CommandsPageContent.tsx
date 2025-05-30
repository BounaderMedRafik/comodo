"use client";

import { commands } from "@/db/commands-v1";
import { cn } from "@/lib/utils";
import { ArrowUp, Command, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

const CommandsPageContent = () => {
  const [search, setSearch] = useState("");
  const [searchDifficulty, setSearchDifficulty] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = commands.filter(
    (cmd) =>
      (cmd.command.toLowerCase().includes(search.toLowerCase()) ||
        cmd.description.toLowerCase().includes(search.toLowerCase())) &&
      (!searchDifficulty || cmd.difficulty === searchDifficulty)
  );

  const sorted = [...filtered].sort((a, b) =>
    a.command.localeCompare(b.command)
  );

  const grouped = sorted.reduce((acc, cmd) => {
    const letter = cmd.command[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(cmd);
    return acc;
  }, {} as Record<string, typeof commands>);

  return (
    <div id="up" className="wrapper pt-12">
      <div className="text-xl font-mono font-semibold flex items-center justify-center flex-col ">
        <div>Commands Guide.</div>
        <div className="text-sm opacity-75 font-normal max-w-xs">
          Search by command or description.
        </div>
        <div className=" text-xs opacity-50 mt-4">
          Available {commands.length} command.
        </div>
        <div className="relative mt-7">
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands..."
            className="text-sm min-w-sm px-3 pl-8 py-1 bg-secondary  focus-visible:outline-none font-normal"
          />
          <Search
            className="absolute top-1/2 -translate-y-1/2 left-3"
            size={12}
          />
          <div className="flex items-center absolute top-1/2 -translate-y-1/2 right-3 select-none opacity-75 font-mono text-xs">
            <Command size={12} />
            +K
          </div>
        </div>

        {/* Difficulty Filter Buttons */}

        <div className="flex justify-center mt-4 gap-2 text-xs font-mono">
          {["Beginner", "Intermediate", "Advanced"].map((level) => {
            const count = commands.filter(
              (cmd) => cmd.difficulty === level
            ).length;
            return (
              <button
                key={level}
                onClick={() =>
                  setSearchDifficulty((prev) => (prev === level ? "" : level))
                }
                className={cn(
                  "px-2 py-0.5   text-xs border border-transparent cursor-pointer text-foreground/75",
                  searchDifficulty === level ? "  border-primary/25 border" : ""
                )}
              >
                <div className="flex items-center gap-2">
                  <div>
                    {level}{" "}
                    <span className=" hidden md:inline-block">{count}</span>
                  </div>
                  <div
                    className={cn(
                      "size-3 rounded-full shadow",
                      level === "Beginner"
                        ? "bg-green-400"
                        : level === "Intermediate"
                        ? "bg-yellow-400"
                        : level === "Advanced"
                        ? "bg-red-400"
                        : ""
                    )}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 text-sm font-mono">
        {filtered.length === 0 ? (
          <div className="text-center text-zinc-500 italic min-h-[25vh]">
            <img
              src="/illustration-of-a-sad-crying-comodo-white-background.jpg"
              alt=""
              className="w-24 mx-auto border-none"
            />
            <div className="max-w-3xs mx-auto mt-2">
              Didn't find what you're searching for.
            </div>
          </div>
        ) : (
          Object.entries(grouped).map(([letter, cmds]) => (
            <div key={letter}>
              <div className="text-lg font-bold bg-primary text-background size-8  flex items-center justify-center mb-2">
                {letter}
              </div>
              {cmds.map((cmd, i) => (
                <Link
                  href={`/commands/${cmd.command}`}
                  className=" text-foreground"
                  key={i}
                >
                  <div className="border-b border-dashed py-2 group flex justify-between items-center gap-4">
                    <div className="flex-1 text-xs line-clamp-1">
                      <strong className="text-primary group-hover:underline-offset-4 group-hover:underline">
                        {highlightMatch(cmd.command, search)}
                      </strong>
                      : {highlightMatch(cmd.description, search)}
                    </div>

                    {cmd.difficulty && (
                      <span className="text-xs opacity-75 flex items-center gap-2">
                        <div className=" line-clamp-1">{cmd.difficulty}</div>
                        <div
                          className={cn(
                            "size-3 rounded-full shadow",
                            cmd.difficulty === "Beginner"
                              ? "bg-green-400"
                              : cmd.difficulty === "Intermediate"
                              ? "bg-yellow-400"
                              : cmd.difficulty === "Advanced"
                              ? "bg-red-400"
                              : ""
                          )}
                        />
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ))
        )}
      </div>

      {filtered.length > 0 && (
        <a
          href="#"
          className="min-h-[40vh] group flex items-center justify-center"
        >
          <div className="text-sm opacity-75 flex items-center gap-2 font-mono">
            <div className="group-hover:underline">Go back to top</div>
            <div>
              <ArrowUp size={13} />
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default CommandsPageContent;
