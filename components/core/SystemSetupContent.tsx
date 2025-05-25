"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, Command } from "lucide-react";
import { setupCategories } from "@/db/system-setup-data";
import { cn } from "@/lib/utils";
import { useFlatpakScript } from "@/hooks/useFlatpak";

const defaultSelectedIds = new Set(
  setupCategories.flatMap((cat) =>
    cat.options.filter((opt) => opt.defaultSelected).map((opt) => opt.id)
  )
);

const SystemSetupContent = () => {
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] =
    useState<Set<string>>(defaultSelectedIds);
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

  const filteredCategories = setupCategories
    .map((category) => ({
      ...category,
      options: category.options.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.options.length > 0);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const selectedOptions = setupCategories
    .flatMap((cat) => cat.options)
    .filter((opt) => selectedIds.has(opt.id));

  const script = useFlatpakScript(selectedOptions);

  return (
    <div className="px-4 py-8 font-mono text-sm">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="text-xl font-semibold">
            Flatpak Installation Generator
          </div>
          <div className="text-muted-foreground text-xs mb-4 max-w-sm mx-auto">
            Browse and select apps from Flathub to generate a custom Flatpak
            installation script.
          </div>

          <div className="text-xs text-muted-foreground">
            Total tools:{" "}
            {setupCategories.reduce((sum, c) => sum + c.options.length, 0)}
          </div>

          {/* Input with icons */}
          <div className="relative mt-3 mx-auto max-w-md">
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="w-full  px-3 pl-8 py-2 bg-secondary text-xs focus-visible:outline-none font-normal placeholder:text-muted-foreground"
            />
            <Search
              className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground"
              size={12}
            />
            <div className="flex items-center absolute top-1/2 -translate-y-1/2 right-3 select-none opacity-75 font-mono text-xs">
              <Command size={12} />
              +K
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Main */}
          <div className="flex-1 space-y-6">
            {filteredCategories.length === 0 ? (
              <div className="text-center text-muted-foreground italic">
                No setup options found for "{search}"
              </div>
            ) : (
              filteredCategories.map((category) => (
                <div key={category.id}>
                  <div className="text-base font-semibold mb-2">
                    {category.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.options.map((option) => {
                      const isSelected = selectedIds.has(option.id);
                      const hasCommand =
                        option.command && option.command.trim() !== "";
                      return (
                        <div
                          key={option.id}
                          className="flex items-center "
                          title={option.label}
                        >
                          <div
                            onClick={() => toggleSelect(option.id)}
                            className={cn(
                              "cursor-pointer px-3 py-1.5 border text-xs transition border-dashed",
                              isSelected
                                ? "border-primary bg-primary/5 text-foreground/75"
                                : "border-muted bg-muted/30 hover:bg-muted"
                            )}
                          >
                            {option.label}
                          </div>

                          {hasCommand && (
                            <a
                              href={`https://flathub.org/apps/${option.command}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs size-7 flex items-center  justify-center   border-l-0 border-y border-r   border-dashed   transition "
                            >
                              <svg
                                className="fill-primary"
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                id="Flathub--Streamline-Simple-Icons"
                                height="14"
                                width="14"
                              >
                                <desc>
                                  Flathub Streamline Icon:
                                  https://streamlinehq.com
                                </desc>
                                <title>Flathub</title>
                                <path
                                  d="M6.068 0a6 6 0 0 0 -6 6 6 6 0 0 0 6 6 6 6 0 0 0 5.998 -6 6 6 0 0 0 -5.998 -6Zm9.15 0.08a1.656 1.656 0 0 0 -1.654 1.656v8.15a1.656 1.656 0 0 0 2.483 1.434l7.058 -4.074a1.656 1.656 0 0 0 0 -2.869l-1.044 -0.604 -6.014 -3.47a1.656 1.656 0 0 0 -0.828 -0.223Zm3.575 13.135a0.815 0.815 0 0 0 -0.816 0.818v2.453h-2.454a0.817 0.817 0 1 0 0 1.635h2.454v2.453a0.817 0.817 0 1 0 1.635 0v-2.453h2.452a0.817 0.817 0 1 0 0 -1.635h-2.453v-2.453a0.817 0.817 0 0 0 -0.818 -0.818zM2.865 13.5a2.794 2.794 0 0 0 -2.799 2.8v4.9c0 1.55 1.248 2.8 2.8 2.8h4.9c1.55 0 2.8 -1.25 2.8 -2.8v-4.9c0 -1.55 -1.25 -2.8 -2.8 -2.8Z"
                                  strokeWidth="1"
                                ></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}

            <div>
              <HowToMakeExcutable />
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:w-64 shrink-0 p-4 bg-background sticky top-24 max-h-[80vh] overflow-auto space-y-2 self-start ">
            <div className="font-semibold text-sm">Selected Items</div>
            {selectedOptions.length === 0 ? (
              <div className="text-muted-foreground italic text-xs">
                No items selected.
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {selectedOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => toggleSelect(option.id)}
                    title="Click to remove"
                    className="px-3 py-1.5 border border-primary border-dashed bg-primary/5 text-foreground/75 text-xs cursor-pointer line-clamp-1"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}

            {script && (
              <>
                <div className="pt-4 border-t text-xs font-mono whitespace-pre-wrap text-muted-foreground">
                  <div className="font-semibold text-sm mb-1">
                    Generated Script
                  </div>
                  <pre className="bg-muted/5 hidden md:block border border-primary border-dashed p-2 overflow-auto">
                    {script}
                  </pre>
                </div>

                {/* Download button */}
                <div className="mt-2">
                  <a
                    href={URL.createObjectURL(
                      new Blob([script], { type: "text/plain" })
                    )}
                    download="comodo.sh"
                    className=" hover:bg-primary/10 px-3 py-1 text-xs font-semibold w-full flex items-center justify-center bg-primary/5 border border-dashed border-primary  hover:bg-primary-dark"
                  >
                    Download comodo.sh
                  </a>
                </div>
              </>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

const HowToMakeExcutable = () => {
  return (
    <div className="pt-5 border-t border-dashed space-y-4">
      <h2 className="text-xl font-semibold">
        How to Make <code>comodo.sh</code> Executable
      </h2>

      <p>
        To run the <code>comodo.sh</code> bash script, you'll need to make sure
        it's executable. Here&apos;s how you can do it from the terminal:
      </p>

      <ol className="list-decimal list-inside space-y-2">
        <li>
          Open your terminal and navigate to the directory where{" "}
          <code>comodo.sh</code> is located.
          <pre className=" p-2  border border-dashed border-primary mt-2 text-sm ">
            cd /path/to/comodo.sh
          </pre>
        </li>
        <li>
          Make the script executable by running:
          <pre className=" p-2  border border-dashed border-primary mt-2 text-sm ">
            chmod +x comodo.sh
          </pre>
        </li>
        <li>
          Now you can run it with:
          <pre className=" p-2  border border-dashed border-primary mt-2 text-sm ">
            ./comodo.sh
          </pre>
        </li>
      </ol>
    </div>
  );
};
export default SystemSetupContent;
