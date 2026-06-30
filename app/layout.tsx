import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Inria_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ZustandThemeProvider } from "@/components/ZustandThemeProvider";
import { AgeTicker } from "@/components/AgeTicker";
import { Analytics } from "@vercel/analytics/next";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitsonawane.com"),
  title: "Sumit Sonawane | AI Full-Stack Engineer",
  description: "Full-Stack Software Engineer from India building production-grade SaaS products, Instagram automation platforms, AI voice agents, and scaling Hynts.in to 10k+ active users.",
  keywords: [
    "Sumit Sonawane",
    "AI Full-Stack Engineer",
    "Software Engineer Portfolio",
    "Next.js Developer Portfolio",
    "Full-Stack Developer India",
    "SaaS Founder Portfolio",
    "Hynts.in Founder",
    "Prep.ai Mock Interview",
    "Zustand State Management Developer",
    "Spring Boot Java Developer"
  ],
  authors: [{ name: "Sumit Sonawane" }],
  creator: "Sumit Sonawane",
  openGraph: {
    title: "Sumit Sonawane | AI Full-Stack Engineer",
    description: "Full-Stack Software Engineer from India building real products that solve real problems.",
    url: "https://github.com/Sumit00s",
    siteName: "Sumit Sonawane Portfolio",
    images: [
      {
        url: "/assets/hero-avatar.png",
        width: 800,
        height: 800,
        alt: "Sumit Sonawane Profile Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Sonawane | AI Full-Stack Engineer",
    description: "Full-Stack Software Engineer from India building real products that solve real problems.",
    creator: "@sumit_tsx",
    images: ["/assets/hero-avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/hero-avatar.png",
    apple: "/assets/hero-avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${inriaSans.variable} ${jetbrainsMono.variable} antialiased bg-[#FFFFFF] dark:bg-[#121212]`}
    >
      <body className="min-h-screen text-[#000000] dark:text-[#FFFFFF] font-sans selection:bg-[#0161EA] selection:text-white">
        <ZustandThemeProvider>
          <div className="w-full border-b-[1px] border-dashed border-[#ABABAB] dark:border-[#444444]">
            <div className="max-w-[701px] mx-auto w-full h-[25px] border-x-[1px] border-dashed border-[#ABABAB] dark:border-[#444444] flex items-center px-4 md:px-[30px]">
              <AgeTicker />
            </div>
          </div>
          <NavBar />
          {children}
          <Analytics />
        </ZustandThemeProvider>
      </body>
    </html>
  );
}
