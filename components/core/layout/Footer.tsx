import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { footerlinks, lastupdate, quote } from "@/db/core-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full border-dashed border-t mt-2 font-mono text-foreground">
      <div className="wrapper mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-3 md:px-6 border-x border-dashed pt-5">
        {/* Left section (Logo + Made by) */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="text-foreground">
            <div className="flex items-center gap-2 group">
              <img
                className="size-10 p-0 m-0 border-none rounded-none gap-0"
                src="brand/v4/COMODO.png"
                alt="Komodo Logo"
              />
            </div>
          </Link>

          <div>
            <div className="text-sm opacity-75">Made with love by</div>
            <div className="font-mono opacity-50 hover:opacity-100 transition-all w-fit hover:underline underline-offset-4 -mt-1.5">
              <a
                className="p-0 m-0 text-foreground"
                href="https://bmed.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bounader med rafik.
              </a>
            </div>
          </div>
        </div>

        {/* Right section (Links) */}
        <div
          className={cn(
            `grid grid-cols-2 sm:grid-cols-${footerlinks.length} gap-4`
          )}
        >
          {footerlinks.map((item, i) => (
            <div key={i}>
              <div className="text-base mb-3">{item.title}</div>
              <div className="space-y-1">
                {item.links.map((subitem, j) => (
                  <div className="text-sm" key={j}>
                    {subitem.upcoming ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-fit items-center gap-2 flex opacity-75 hover:opacity-100 group transition-all cursor-default">
                            <div className="group-hover:text-primary transition-all">
                              {subitem.icon}
                            </div>
                            <div className="line-through text-nowrap">
                              {subitem.title}
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          {subitem.title} is coming soon
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Link href={subitem.link} className="text-foreground">
                        <div className="items-center w-fit gap-2 flex opacity-75 hover:opacity-100 group transition-all">
                          <div className="group-hover:text-primary transition-all">
                            {subitem.icon}
                          </div>
                          <div>{subitem.title}</div>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="wrapper flex flex-col md:flex-row items-center justify-between gap-2 pt-5 pb-5 px-3 md:px-6 border-x border-dashed text-xs opacity-75 text-center md:text-left">
        <div>Updated in {lastupdate}</div>
        <div>{quote}</div>
      </div>
    </div>
  );
};

export default Footer;
