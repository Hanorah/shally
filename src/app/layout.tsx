import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE } from "@/lib/constants";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — Cakes, Meat Pies & Fresh Pastries in Benin City`,
  description:
    "Custom cakes, meat pies, donuts, burgers, and event food trays. Baking trainings and orders at 166 New Lagos Road, Uselu. Call 08101561840.",
};

const themeInitScript = `(function(){try{if("scrollRestoration" in history){history.scrollRestoration="manual";}window.scrollTo(0,0);var t=localStorage.getItem("theme");var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=t==="light"||t==="dark"?t:d?"dark":"light";document.documentElement.classList.toggle("dark",theme==="dark");document.documentElement.style.colorScheme=theme;}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grain min-h-full bg-background font-sans text-foreground">
        <ThemeProvider>
          <Preloader />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
