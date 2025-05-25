import { distroProps } from "./types";

export const distros: distroProps[] = [
  {
    distro: "Mint",
    description:
      "A beginner-friendly, Ubuntu-based distro that offers a familiar desktop experience and is known for stability and ease of use.",
    difficulty: "Beginner",
    image: "https://distrosea.com/distro-icons/linuxmint.svg",
    content: "/content/distros/linux-mint.md",
    deskimage:
      "https://linuxmint-installation-guide.readthedocs.io/en/latest/_images/cinnamon.png",
  },
  {
    distro: "Ubuntu",
    description:
      "A popular Debian-based distro known for ease of use and a strong community.",
    difficulty: "Beginner",
    image: "https://distrosea.com/distro-icons/ubuntu.svg",
    content: "/content/distros/ubuntu.md",
    deskimage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ubuntu_25.04_Plucky_Puffin_Desktop_English.png/1280px-Ubuntu_25.04_Plucky_Puffin_Desktop_English.png",
  },
  {
    distro: "Fedora",
    description:
      "A cutting-edge distro backed by Red Hat, often used by developers.",
    difficulty: "Intermediate",
    image: "https://distrosea.com/distro-icons/fedora.svg",
    content: "/content/distros/fedora.md",
    deskimage:
      "https://fedoraproject.org/assets/images/spins/screenshot-cinnamon.jpg",
  },
  {
    distro: "Arch",
    description:
      "A rolling release distro for advanced users who want full control.",
    difficulty: "Advanced",
    image: "https://distrosea.com/distro-icons/archlinux.svg",
    content: "/content/distros/arch-linux.md",
    deskimage:
      "https://linuxconfig.org/wp-content/uploads/2020/05/01-arch-linux-download.avif",
  },
  {
    distro: "Manjaro",
    description:
      "An Arch-based distro that makes Arch accessible to beginners and intermediates.",
    difficulty: "Intermediate",
    image: "https://distrosea.com/distro-icons/manjaro.svg",
    content: "/content/distros/manjaro.md",
    deskimage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Manjaro_Linux_24.0_KDE_Plasma_Desktop_English.png/1280px-Manjaro_Linux_24.0_KDE_Plasma_Desktop_English.png",
  },
  {
    distro: "Debian",
    description:
      "A stable and versatile base for many other distros with a strong reputation.",
    difficulty: "Intermediate",
    image: "https://distrosea.com/distro-icons/debian.svg",
    content: "/content/distros/debian.md",
    deskimage: "https://www.debian.org/Pics/calamares-bookworm.png",
  },
  {
    distro: "openSUSE",
    description:
      "A powerful and enterprise-friendly distro with great tooling (YaST).",
    difficulty: "Intermediate",
    image: "https://distrosea.com/distro-icons/opensuse.svg",
    content: "/content/distros/opensuse.md",
    deskimage:
      "https://lowtechlinux.com/wp-content/uploads/2024/01/Screenshot_20240131_044015.png",
  },
  {
    distro: "Pop!_OS",
    description:
      "A beginner-friendly, Ubuntu-based distro geared toward creative professionals and gamers.",
    difficulty: "Beginner",
    image: "https://distrosea.com/distro-icons/popos.svg",
    content: "/content/distros/pop-os.md",
    deskimage: "https://support.system76.com/_nuxt/image/3b2c13.png",
  },
  {
    distro: "ZorinOS",
    description:
      "A user-friendly distro designed to ease the transition from Windows.",
    difficulty: "Beginner",
    image: "https://distrosea.com/distro-icons/zorin.svg",
    content: "/content/distros/zorin-os.md",
    deskimage:
      "https://i0.wp.com/9to5linux.com/wp-content/uploads/2023/07/zos163.webp?fit=1920%2C975&ssl=1",
  },
  {
    distro: "Gentoo",
    description:
      "A source-based distro that offers maximum flexibility and performance, but with a steep learning curve.",
    difficulty: "Advanced",
    image: "https://distrosea.com/distro-icons/gentoo.svg",
    content: "/content/distros/gentoo.md",
    deskimage:
      "https://krirogn-dev.s3.fr-par.scw.cloud/blog/why-i-still-use-gentoo/gnome.webp",
  },
];
