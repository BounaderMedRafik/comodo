"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function NightSwitch() {
  const { setTheme } = useTheme();
  return (
    <div>
      <div
        onClick={() => setTheme("light")}
        className=" hidden dark:flex cursor-pointer opacity-75 hover:bg-input/25 hover:opacity-100 transition-all duration-300 size-6.5  items-center justify-center border border-dashed"
      >
        <div>
          <Sun size={12} />
        </div>
      </div>
      <div
        onClick={() => setTheme("dark")}
        className="flex dark:hidden cursor-pointer opacity-75 hover:bg-input/25 hover:opacity-100 transition-all duration-300 size-6.5  items-center justify-center border border-dashed"
      >
        <div>
          <Moon size={12} />
        </div>
      </div>
    </div>
  );
}
