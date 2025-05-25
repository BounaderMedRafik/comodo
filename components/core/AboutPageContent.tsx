import { contributors } from "@/db/core-data";
import React from "react";

const AboutPageContent = () => {
  return (
    <div className="wrapper min-h-[65vh] py-10 text-justify">
      <div className=" text-2xl font-mono">About</div>
      <div className=" mt-5">
        Hey, I'm{" "}
        <a
          className=" hover:underline text-primary "
          href="https://bmed.vercel.app/"
          target="_blank"
        >
          Rafik
        </a>{" "}
        — a full-stack web developer who loves building clean, purposeful tools.
        I created Comodo to make learning Linux simple and empowering.
        <br /> <hr /> <strong className=" font-mono">Comodo</strong> is your
        no-fluff Linux guide — built to help you truly understand the tools that
        power your system. Whether you're a curious beginner or brushing up on
        essentials, you'll find easy-to-follow command explanations, distro
        comparisons, and practical tips that give you real control over your
        Linux experience — all in one clear, clutter-free space.
      </div>

      <div className=" mt-10">
        <div className=" text-2xl font-mono">Contributors</div>
        <div className=" grid grid-cols-2 md:grid-cols-3 mt-4">
          {contributors.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className=" w-fit text-foreground"
            >
              <div className="flex items-center gap-1 mt-2  w-fit group">
                {item.image ? (
                  <img
                    className=" border-none rounded-full size-8 m-0 p-0"
                    src={item.image}
                    alt=""
                  />
                ) : (
                  <div
                    className=" text-sm rounded-full font-mono font-black size-8 flex items-center justify-center pt-0.5
                   bg-primary text-background line-clamp-1"
                  >
                    {item.name[0]}
                  </div>
                )}
                <div>
                  <div className=" text-sm group-hover:underline  line-clamp-1">
                    {item.name}
                  </div>
                  <div className=" text-xs opacity-75  line-clamp-1">
                    {item.role}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
