import { buttonVariants } from "@/components/ui/button";
import { navlinks } from "@/db/core-data";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full fixed top-0 left-0 md:pt-2 bg-transparent md:bg-gradient-to-b from-background to-transparent  ">
      <div className=" wrapper py-2 flex items-center justify-between bg-background/90 backdrop-blur-xl pr-3 pl-2 md:rounded-2xl md:shadow-2xl shadow-foreground/5 md:border">
        {/* logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-2 group">
            <img className="size-10" src="/brand/COMODOFAV.png" alt="" />
            <div className=" font-mono font-semibold -mt-0.5">
              <div>Comodo</div>
              <div className=" text-xs -mt-2 opacity-50 group-hover:opacity-100 transition-all">
                Linux Guide.
              </div>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          {navlinks.map((item, i) => (
            <Link key={i} href={item.link}>
              <div
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "opacity-100 hover:opacity-75 transition-all",
                })}
              >
                <div className="flex items-center gap-2">
                  <div className=" font-mono hidden md:block">{item.title}</div>
                  <div>{item.icon}</div>
                </div>
              </div>
            </Link>
          ))}
          <SearchComponent type={"nav"} />
        </div>
      </div>
    </div>
  );
};

export const SearchComponent = ({ type }: { type: "nav" | "hero" }) => {
  return (
    <div>
      {type == "nav" ? (
        <div
          className={buttonVariants({
            variant: "secondary",
            size: "icon",
            className:
              "opacity-100 hover:opacity-75 transition-all aspect-square",
          })}
        >
          <div className="flex items-center gap-2">
            <div>
              <Search size={12} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 min-w-md p-2 px-3.5 bg-background backdrop-blur-lg hover:-translate-y-1 transition-all rounded-lg border shadow-2xl cursor-pointer ">
          <div>
            <Search size={14} />
          </div>
          <div className=" text-sm font-mono opacity-50 top-1">
            Search for anything...
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
