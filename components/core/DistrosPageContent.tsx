"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { distros } from "@/db/distros-v1";

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

const DistrosPageContent = () => {
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

  const filtered = distros.filter(
    (distro) =>
      (distro.distro.toLowerCase().includes(search.toLowerCase()) ||
        distro.description.toLowerCase().includes(search.toLowerCase())) &&
      (!searchDifficulty || distro.difficulty === searchDifficulty)
  );

  return (
    <div className="wrapper pt-12">
      <div className="text-xl font-mono font-semibold flex items-center justify-center flex-col">
        <div>Distros Guide</div>
        <div className="text-sm opacity-75 font-normal max-w-xs text-center">
          Search by distro name or description.
        </div>
        <div className=" text-xs opacity-50 mt-4">
          Available {distros.length} distros.
        </div>

        <div className="relative mt-7">
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search distros..."
            className="text-sm min-w-sm px-3 pl-8 py-1 bg-secondary focus-visible:outline-none font-normal"
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

        <div className="flex justify-center mt-4 gap-2 text-xs font-mono">
          {["Beginner", "Intermediate", "Advanced"].map((level) => {
            const count = distros.filter((d) => d.difficulty === level).length;
            return (
              <button
                key={level}
                onClick={() =>
                  setSearchDifficulty((prev) => (prev === level ? "" : level))
                }
                className={cn(
                  "px-2 py-0.5 text-xs border border-transparent cursor-pointer text-foreground/75",
                  searchDifficulty === level ? "border-primary/25 border" : ""
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

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-sm font-mono">
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
          filtered.map((distro, i) => (
            <Link
              href={`/distros/${distro.distro}`}
              key={i}
              className="border p-3 text-foreground  border-dashed hover:shadow-sm transition-all duration-150 relative"
            >
              <div>
                <img
                  className=" p-0 m-0 rounded-none border-none size-14 mb-4 "
                  src={distro.image}
                  alt=""
                />
              </div>
              <div className="font-semibold text-primary mb-1">
                {highlightMatch(distro.distro, search)}
              </div>
              <div className="text-xs opacity-80 mb-2">
                {highlightMatch(distro.description, search)}
              </div>
              <div
                className={cn(
                  "size-2 rounded-full shadow absolute top-2 left-2",
                  distro.difficulty === "Beginner"
                    ? "bg-green-400"
                    : distro.difficulty === "Intermediate"
                    ? "bg-yellow-400"
                    : distro.difficulty === "Advanced"
                    ? "bg-red-400"
                    : ""
                )}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default DistrosPageContent;
