import {
  Code,
  GitBranch,
  Github,
  Home,
  Info,
  LaptopMinimal,
  Paintbrush,
  Sparkle,
} from "lucide-react";
import { footerlinkProps, navlinkProps } from "./types";

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

export const footerlinks: footerlinkProps[] = [
  {
    title: "Pages",
    links: [
      {
        title: "Home",
        link: "/",
        icon: <Home size={12} />,
      },
      {
        title: "Commands",
        link: "/commands",
        icon: <Code size={12} />,
      },
      {
        title: "Distros",
        link: "/distros",
        icon: <LaptopMinimal size={12} />,
      },
      {
        title: "ComodoAi",
        link: "",
        icon: <Sparkle size={12} />,
        upcoming: true,
      },
      {
        title: "About",
        link: "/about",
        icon: <Info size={12} />,
      },
    ],
  },
  {
    title: "Contribute",
    links: [
      {
        title: "Github repo",
        link: "https://github.com/BounaderMedRafik/comodo",
        icon: <Github size={12} />,
      },
      {
        title: "How to contribute",
        link: "/",
        icon: <GitBranch size={12} />,
        upcoming: true,
      },
      {
        title: "Design style",
        link: "/design-style",
        icon: <Paintbrush size={12} />,
        upcoming: true,
      },
    ],
  },
];

export const lastupdate: string = "May 05 2025, 2:04am";
export const quote: string = "who am i without her?";
