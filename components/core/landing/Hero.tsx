"use client";
import { buttonVariants } from "@/components/ui/button";
import { commands } from "@/db/commands-v1";
import Link from "next/link";
import React from "react";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { motion } from "motion/react";
import { SearchComponent } from "../layout/SearchComponent";

const Hero = () => {
  return (
    <div className="wrapper flex items-center justify-center flex-col pt-32 pb-32 md:pb-0">
      <div>
        <div className="flex flex-col items-center justify-center gap-2 group">
          <img
            className=" size-24 p-0 m-0  rounded-sm gap-0 border border-dashed"
            src="/brand/v4/COMODO.png"
            alt=""
          />
          <div className=" font-mono  font-semibold -mt-0.5 text-center">
            <div>Comodo</div>
            <div className="text-xs font-mono font-light -mt-1">
              Linux Guide.
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-sm text-xs opacity-75 mt-4  text-center font-mono">
        <span className=" font-semibold"> Master Linux with Confidence</span> —
        Comodo Linux Guide gives you the tools to take control of your system.
        Explore essential commands, compare powerful distros, and build your
        Linux skills with clarity and ease.
      </div>

      <div className=" pt-14 hidden  md:flex flex-wrap items-center justify-center gap-1 relative p-3">
        {commands.map((item, i) => (
          <motion.div
            initial={{
              y: 15,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: i * 0.1,
              },
            }}
            key={i}
            className=""
          >
            <Link key={i} href={`commands/${item.command}`}>
              <div
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className:
                    "opacity-100 hover:opacity-10 transition-all rounded-none text-sm",
                })}
              >
                <div className="flex items-center gap-2">
                  <div className=" font-mono hidden md:block">
                    {item.command}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
        <div className=" absolute top-0 left-0  bg-gradient-to-b from-transparent to-background w-full h-full" />
        <ProgressiveBlur
          className="pointer-events-none absolute bottom-0 left-0 h-2/3  w-full"
          blurIntensity={1}
        />
        <motion.div
          initial={{
            scale: 0.7,
            y: 10,
            opacity: 0,
            filter: "blur(10px)",
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className=" absolute top-1/2 left-1/2 -translate-1/2 "
        >
          <SearchComponent type="hero" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
