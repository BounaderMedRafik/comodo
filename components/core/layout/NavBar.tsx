"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BannerContent, navlinks } from "@/db/core-data";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNav(false); // Hide navbar on scroll down
      } else {
        setShowNav(true); // Show on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          `w-full fixed top-0 left-0 md:pt-2 z-50 transition-transform duration-300 ${
            showNav ? "translate-y-0" : "-translate-y-full"
          }`
        )}
      >
        {BannerContent && <Banner text={BannerContent} />}
        <div
          className={cn(
            "wrapper py-2 flex items-center justify-between bg-background/90 backdrop-blur-xl pr-3 pl-2 md:rounded-2xl md:shadow-2xl shadow-foreground/5 md:border",
            BannerContent && "md:border-primary border-4"
          )}
        >
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex items-center gap-2 group">
              <img
                className="size-10 p-0 m-0 border-none rounded-none gap-0"
                src="/brand/COMODOFAV.png"
                alt=""
              />
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
                    <div className=" font-mono hidden md:block">
                      {item.title}
                    </div>
                    <div>{item.icon}</div>
                  </div>
                </div>
              </Link>
            ))}
            <SearchComponent type={"nav"} />
          </div>
        </div>
      </div>
      <div
        className={`w-full fixed flex items-center justify-center pt-4 top-0 left-0 md:pt-2 z-50 transition-transform duration-300 ${
          showNav ? "-translate-y-full" : " translate-y-0"
        }`}
      >
        <div className=" max-w-5xl w-full px-3 md:px-0">
          <img
            className=" size-10 rounded-full shadow"
            src="/brand/COMODOFAV.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export const SearchComponent = ({ type }: { type: "nav" | "hero" }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {type === "nav" ? (
            <div
              className={buttonVariants({
                variant: "secondary",
                size: "icon",
                className:
                  "opacity-100 hover:opacity-75 transition-all aspect-square",
              })}
            >
              <Search size={12} />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3 min-w-md p-2 px-3.5 bg-background backdrop-blur-lg hover:-translate-y-1 transition-all rounded-lg border shadow-2xl cursor-pointer ">
              <Search size={14} />
              <div className=" text-sm font-mono opacity-50 top-1">
                Search for anything...
              </div>
            </div>
          )}
        </DialogTrigger>

        <DialogContent className=" p-0 m-0 bg-transparent border-none">
          <DialogTitle className=" hidden" />
          hello
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Banner = ({ text }: { text: string }) => {
  return (
    <div className="wrapper text-xs bg-primary text-background font-mono flex items-center justify-center px-2 py-1 pb-5 -mb-4 md:rounded-t-2xl">
      {text}
    </div>
  );
};

export default NavBar;
