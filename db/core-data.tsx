import {
  Code,
  Files,
  GitBranch,
  Github,
  Home,
  Info,
  LaptopMinimal,
  Paintbrush,
  Sparkle,
} from "lucide-react";
import { contributersProps, footerlinkProps, navlinkProps } from "./types";

export const navlinks: navlinkProps[] = [
  {
    title: "Commands",
    link: "/commands",
    icon: <Code size={14} />,
  },
  {
    title: "Distros",
    link: "/distros",
    icon: <LaptopMinimal size={14} />,
  },
  {
    title: "Flatpak",
    link: "/system-setup",
    icon: <Files size={14} />,
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
        title: "Flatpak Gen",
        link: "/system-setup",
        icon: <Files size={14} />,
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
        link: "/design",
        icon: <Paintbrush size={12} />,
      },
    ],
  },
];

export const lastupdate: string = "May 05 2025, 2:04am";
export const quote: string = "who am i without her?";

export const contributors: contributersProps[] = [
  {
    name: "Bounader Med Rafik",
    link: "https://bmed.vercel.app/",
    image: "https://avatars.githubusercontent.com/u/71353030?v=4",
    role: "Creator & Developper",
  },
  {
    name: "Distrosea",
    link: "https://distrosea.com/",
    image: "",
    role: "Distro's logos source",
  },
  {
    name: "Aymen Melouah",
    link: "https://github.com/Aymen-Melouah",
    image: "https://avatars.githubusercontent.com/u/117318165?v=4",
    role: "UX/UI specialist",
  },
  {
    name: "Bouhadjar Ramzi",
    link: "https://github.com/RBHDEV",
    image: "https://avatars.githubusercontent.com/u/149131318?v=4",
    role: "PWA integration",
  },
  {
    name: "Lamri Monir Siradj",
    link: "https://github.com/sirgio03",
    image:
      "https://scontent.faae2-1.fna.fbcdn.net/v/t39.30808-6/496155803_4099071153747368_7713837134469796041_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHNV0lH_CrTa4zci1KUGr8WyowpRVaeYAzKjClFVp5gDNKoMyCVKn2ASGCuPUBhiiswu5-ggtIxR9RdpphuubXP&_nc_ohc=pzRO7FtLnzEQ7kNvwHsRJvc&_nc_oc=AdmGhe4ho0bLBzzkz94KzZw6LwjCS8izrkE8Yg2ObeNP8OO8gGU7T5VMqtLLQCZT284&_nc_zt=23&_nc_ht=scontent.faae2-1.fna&_nc_gid=IW5OSLL4MXJ48-VnHr6edw&oh=00_AfKvhJjhDboDr-_X2SvcsYOUtS0nt0ABRtWeRiBUNSRwlg&oe=683A3538",
    role: "Brand Design",
  },
];
