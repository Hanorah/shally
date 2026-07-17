"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-background px-5 pb-8 sm:px-6 sm:pb-10 md:px-16">
      <div className="mx-auto max-w-6xl rounded-[22px] bg-surface-muted px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-14 md:px-12 md:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-4">
              <Image
                src="/logo-shally.png"
                alt={SITE.name}
                width={220}
                height={80}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </div>
            <h2 className="font-heading text-[clamp(26px,6.5vw,42px)] font-extrabold tracking-[-0.03em] text-foreground">
              Need something{" "}
              <span className="inline-flex items-center gap-2">
                from Shally?
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-sm">
                  ···
                </span>
              </span>
            </h2>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted">
              Order pastries, apply for training, ask about delivery, or start a
              business conversation. The fastest way is still a call or WhatsApp.
            </p>
            <p className="mt-4 font-body text-sm text-muted">
              <a
                href={SITE.phoneHref}
                className="font-semibold text-foreground hover:opacity-70"
              >
                {SITE.phone}
              </a>
              <br />
              {SITE.hours}
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
                  href="/shop"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Order online
                </Link>
              </li>
              <li>
                <Link
                  href="/trainings"
                  className="inline-flex items-center gap-2 font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Pay to learn
                  <span className="rounded-full bg-[#E11D74] px-2 py-0.5 text-[10px] font-semibold text-white">
                    Stay included
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
                  WhatsApp
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
                  href="/logistics"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Get a logistics quote
                </Link>
              </li>
              <li>
                <Link
                  href="/investments"
                  className="font-body text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  Investment enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-body text-sm text-muted-light">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-light">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
