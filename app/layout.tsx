import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/core/layout/NavBar";
import Footer from "@/components/core/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Comodo Linux Guide",
    template: "%s | Comodo Linux Guide",
  },
  description:
    "Master Linux with Confidence — Comodo Linux Guide gives you the tools to take control of your system. Explore essential commands, compare powerful distros, and build your Linux skills with clarity and ease.",
  icons: {
    icon: "/brand/v4/COMODO.png", // Update this path if needed
  },
  verification: {
    google: "",
  },
  openGraph: {
    title: "Comodo Linux Guide",
    description:
      "Master Linux with Confidence — Learn essential commands, explore powerful distros, and sharpen your Linux skills with clarity and ease.",
    locale: "en_US",
    type: "website",
    url: "https://comodo.vercel.app/", // Change this if the final site URL is different
    images: [
      {
        url: "https://hxcqxvdpfctfywkxocdr.supabase.co/storage/v1/object/public/MyPics/work/komodoartwork.png", // Replace with a Comodo-themed image if applicable
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased custom-scrollbar`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={300}>
            <NavBar />
            <div className=" pt-24">{children}</div>
            <div className="">
              <Footer />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
