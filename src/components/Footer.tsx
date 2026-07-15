"use client";

import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M8 4 L16 10 L10 18 L2 12 Z" fill="#4ECDC4" />
      <path d="M12 8 L20 14 L14 22 L6 16 Z" fill="#4ECDC4" opacity="0.85" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-background px-6 pb-10 md:px-16">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-surface-muted px-8 py-14 md:px-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-3 flex items-center gap-2">
              <Logo />
              <span className="font-heading text-[15px] font-semibold text-foreground">
                {SITE.name}
              </span>
            </div>
            <h2 className="font-heading text-[clamp(28px,3.8vw,42px)] font-extrabold tracking-[-0.03em] text-foreground">
              Our kitchen,{" "}
              <span className="inline-flex items-center gap-2">
                your table
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-sm">
                  ···
                </span>
              </span>
            </h2>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted">
              Custom cakes, meat pies, donuts, burgers, and event trays — baked
              fresh in Uselu, Benin City. Call to order or join a training.
            </p>
            <p className="mt-4 font-body text-sm text-muted">
              <a
                href={SITE.phoneHref}
                className="font-semibold text-foreground hover:opacity-70"
              >
                {SITE.phone}
              </a>
              <br />
              {SITE.address}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:pl-8">
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/menu"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Order from menu
                </Link>
              </li>
              <li>
                <Link
                  href="/trainings"
                  className="inline-flex items-center gap-2 font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Pay to learn
                  <span className="rounded-full bg-[#E11D74] px-2 py-0.5 text-[10px] font-semibold text-white">
                    New
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  WhatsApp order
                </a>
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Call {SITE.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Find the store
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-body text-sm text-muted-light">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-light">{SITE.city}</p>
        </div>
      </div>
    </footer>
  );
}
