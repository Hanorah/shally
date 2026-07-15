"use client";

import Link from "next/link";
import { User, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M8 4 L16 10 L10 18 L2 12 Z" fill="#4ECDC4" />
      <path d="M12 8 L20 14 L14 22 L6 16 Z" fill="#4ECDC4" opacity="0.85" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full px-5 py-[18px] md:px-8">
      <nav className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-heading text-[18px] font-semibold tracking-tight text-foreground">
            {SITE.name}
          </span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-heading cursor-pointer px-3.5 py-2 text-[14px] text-foreground transition-opacity hover:opacity-60"
            >
              {"dot" in item && item.dot ? (
                <span className="inline-flex items-center">
                  <span className="mr-1.5 inline-block h-3.5 w-3.5 rounded-full bg-brand-teal" />
                  {item.label}
                </span>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={SITE.phoneHref}
            aria-label="Call to order"
            className="rounded-full p-2 text-foreground transition-colors hover:bg-hover"
          >
            <User size={20} strokeWidth={1.75} />
          </a>
          <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggle}
            className="inline-flex rounded-full p-2 text-foreground transition-colors hover:bg-hover"
          >
            {theme === "dark" ? (
              <Sun size={20} strokeWidth={1.75} />
            ) : (
              <Moon size={20} strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-hover lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-border bg-background/95 p-3 backdrop-blur lg:hidden">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-heading text-[15px] text-foreground hover:bg-hover"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
