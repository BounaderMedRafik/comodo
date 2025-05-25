"use client";

import { BannerContent, navlinks } from "@/db/core-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchComponent } from "./SearchComponent";
import { NightSwitch } from "./NightSwitch";
import { Github } from "lucide-react";

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
          `w-full fixed top-0 left-0  z-50 transition-transform duration-300 ${
            showNav ? "translate-y-0" : "-translate-y-full"
          }`
        )}
      >
        {BannerContent && <Banner text={BannerContent} />}
        <div
          className={cn(
            " py-1 flex max-w-4xl border-dashed mx-auto items-center justify-between bg-background px-1  md:shadow-2xl shadow-foreground/5 md:border"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 divide-primary">
            <Link href={"/"} className=" text-foreground">
              <div className="flex items-center gap-2 group">
                <img
                  className=" size-10 p-0 m-0 border-none rounded-none gap-0"
                  src="/brand/v4/COMODO.png"
                  alt=""
                />
                <div className=" bg-input w-px h-8 " />
              </div>
            </Link>

            <div className=" flex items-center ">
              {navlinks.map((item, i) => (
                <Link key={i} href={item.link}>
                  <div
                    className={
                      " text-xs text-foreground px-2 opacity-75 hover:opacity-100"
                    }
                  >
                    <div className="flex items-center gap-2">
                      <div className=" font-mono hidden md:block">
                        {item.title}
                      </div>
                      {/* <div>{item.icon}</div> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 pr-2">
            <SearchComponent type={"nav"} />
            <div>
              <NightSwitch />
            </div>
            <a
              href="https://github.com/BounaderMedRafik/comodo"
              target="_blank"
            >
              <div className=" text-foreground hover:bg-input/25  flex cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300 size-6.5  items-center justify-center border border-dashed">
                <div>
                  <Github size={12} />
                </div>
              </div>
            </a>
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
            className=" size-10  shadow  p-0 m-0 border-dashed rounded-xs"
            src="/brand/v4/COMODO.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

const Banner = ({ text }: { text: string }) => {
  return (
    <div className=" text-xs bg-primary text-foreground border-primary/25  border-b border-dashed font-mono flex items-center justify-center px-2 py-1 pb-5 -mb-4">
      {text}
    </div>
  );
};

export default NavBar;
