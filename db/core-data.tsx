import { Code, LaptopMinimal } from "lucide-react";
import { navlinkProps } from "./types";

export const navlinks: navlinkProps[] = [
  {
    title: "commands",
    link: "/commands",
    icon: <Code size={12} />,
  },
  {
    title: "Distros",
    link: "/distros",
    icon: <LaptopMinimal size={12} />,
  },
];

export const BannerContent: string =
  "comodo — Beta version, and yet we still covering";
