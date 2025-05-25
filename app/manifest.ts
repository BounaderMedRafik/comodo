import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Comodo Linux Guide",
    short_name: "Comodo",
    description:
      "Master Linux with confidence. Comodo Linux Guide gives you the tools to take control of your system. Explore essential commands, compare powerful distros, and build your Linux skills with clarity and ease.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f", // dark background
    theme_color: "#2c70e4", // converted from oklch to hex
    icons: [
      {
        src: "/brand/v4/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/v4/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
