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
    <div className=" w-full  border-dashed border mt-2  font-mono">
      <div className="wrapper mx-auto  grid grid-cols-2 px-3 border-x border-dashed pt-5">
        <div>
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

          <div>
            <div className=" text-sm opacity-75 font-mono mt-5">
              Made with love by
            </div>
            <div className=" -mt-1.5 font-mono opacity-50 hover:opacity-100 transition-all w-fit hover:underline underline-offset-4">
              <a
                className=" p-0 m-0"
                href="https://bmed.vercel.app/"
                target="_blank"
              >
                Bounader med rafik.
              </a>
            </div>
          </div>
        </div>

        <div className={cn(`grid grid-cols-${footerlinks.length}`)}>
          {footerlinks.map((item, i) => (
            <div key={i}>
              <div className=" text-base mb-3 ">{item.title}</div>
              <div>
                {item.links.map((subitem, j) => (
                  <div className=" text-sm" key={j}>
                    {subitem.upcoming ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className=" items-center gap-2 flex opacity-75 hover:opacity-100 group transition-all  cursor-default">
                            <div className=" group-hover:text-primary transition-all">
                              {subitem.icon}
                            </div>
                            <div className=" line-through text-nowrap ">
                              {subitem.title}
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          {subitem.title} is upcoming
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Link href={subitem.link}>
                        <div className="items-center gap-2 flex opacity-75 hover:opacity-100 group transition-all">
                          <div className=" group-hover:text-primary transition-all">
                            {subitem.icon}
                          </div>
                          <div className=" ">{subitem.title}</div>
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

      <div className="wrapper flex items-center justify-between mt-5 pb-5 px-3 border-x border-dashed">
        <div className=" text-xs opacity-75">Updated in {lastupdate}</div>
        <div className=" text-xs opacity-75">{quote}</div>
      </div>
    </div>
  );
};

export default Footer;
