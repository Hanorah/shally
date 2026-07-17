"use client";

import Link from "next/link";
import Image from "next/image";
import {
  User,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Phone,
  ChevronDown,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MENU_CATEGORIES, NAV_LINKS, SITE } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

type LenisLike = { stop: () => void; start: () => void };

const FEATURED_PRODUCT = MENU_CATEGORIES[0].items[0];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const shopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openShopMenu = () => {
    if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    setShopOpen(true);
  };

  const closeShopMenu = (delay = 120) => {
    if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    shopCloseTimer.current = setTimeout(() => setShopOpen(false), delay);
  };

  useEffect(() => {
    return () => {
      if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    };
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open]);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    if (!overlay || !panel) return;

    const links = panel.querySelectorAll("[data-menu-link]");
    const meta = panel.querySelectorAll("[data-menu-meta]");
    const accent = panel.querySelector("[data-menu-accent]");

    gsap.set(overlay, { autoAlpha: 0 });
    gsap.set(panel, { yPercent: -8, autoAlpha: 0 });
    gsap.set(links, { y: 48, opacity: 0 });
    gsap.set(meta, { y: 20, opacity: 0 });
    gsap.set(accent, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });

    tl.to(overlay, { autoAlpha: 1, duration: 0.35 }, 0)
      .to(panel, { yPercent: 0, autoAlpha: 1, duration: 0.55 }, 0.05)
      .to(
        accent,
        { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
        0.2
      )
      .to(
        links,
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 },
        0.22
      )
      .to(
        meta,
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 },
        0.48
      );

    tlRef.current = tl;
    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (open) tl.play(0);
    else tl.reverse();
  }, [open]);

  useEffect(() => {
    if (!open && !shopOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setShopOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, shopOpen]);

  return (
    <>
      <header
        className={`glass-nav fixed inset-x-0 top-0 w-full border-b border-border/60 px-4 py-1.5 sm:px-5 sm:py-2 md:px-8 ${
          open || shopOpen ? "z-[80]" : "z-50"
        }`}
        onMouseLeave={() => closeShopMenu(80)}
      >
        <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center" aria-label={SITE.name}>
            <Image
              src="/logo-shally.png"
              alt={SITE.name}
              width={180}
              height={56}
              priority
              className="h-9 w-auto object-contain sm:h-10 md:h-11"
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            {NAV_LINKS.map((item) => {
              const isShop = item.label === "Shop";

              if (isShop) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openShopMenu}
                    onFocus={openShopMenu}
                  >
                    <Link
                      href={item.href}
                      aria-expanded={shopOpen}
                      aria-haspopup="true"
                      className="font-heading inline-flex cursor-pointer items-center gap-1 px-2.5 py-2 text-[13px] text-foreground transition-opacity hover:opacity-60 xl:px-3.5 xl:text-[14px]"
                      onClick={() => setShopOpen(false)}
                    >
                      <span className="inline-flex items-center">
                        <span className="mr-1.5 inline-block h-3.5 w-3.5 rounded-full bg-brand-teal" />
                        {item.label}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          shopOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-heading cursor-pointer px-2.5 py-2 text-[13px] text-foreground transition-opacity hover:opacity-60 xl:px-3.5 xl:text-[14px]"
                  onMouseEnter={() => closeShopMenu(0)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <a
              href={SITE.phoneHref}
              aria-label="Call to order"
              className="hidden rounded-full p-2 text-foreground transition-colors hover:bg-hover sm:inline-flex"
            >
              <User size={20} strokeWidth={1.75} />
            </a>
            <button
              type="button"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
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
              aria-expanded={open}
              className={`rounded-full p-2.5 transition-colors lg:hidden ${
                open
                  ? "bg-[#5C3A1E] text-[#F7F1EA] hover:bg-[#4a2e18] dark:bg-[#E8D5C4] dark:text-[#1a120c]"
                  : "text-foreground hover:bg-hover"
              }`}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-5 w-5">
                <Menu
                  size={20}
                  strokeWidth={1.75}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open
                      ? "rotate-90 scale-75 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <X
                  size={20}
                  strokeWidth={1.75}
                  className={`absolute inset-0 transition-all duration-300 ${
                    open
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-75 opacity-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Shop mega menu */}
        <div
          className={`absolute inset-x-0 top-full hidden origin-top border-b border-border/60 bg-background/95 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 lg:block ${
            shopOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          onMouseEnter={openShopMenu}
          onMouseLeave={() => closeShopMenu(80)}
          aria-hidden={!shopOpen}
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-8 py-7 xl:grid-cols-[1.4fr_0.85fr]">
            <div>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
                    Shop by category
                  </p>
                  <p className="mt-1 font-heading text-[22px] font-extrabold tracking-[-0.03em] text-foreground">
                    Order from Shally Pastries
                  </p>
                </div>
                <Link
                  href="/shop"
                  onClick={() => setShopOpen(false)}
                  className="inline-flex items-center gap-1 font-heading text-[13px] font-semibold text-foreground transition-opacity hover:opacity-60"
                >
                  View full shop
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {MENU_CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/shop#${category.slug}`}
                    onClick={() => setShopOpen(false)}
                    className="group overflow-hidden rounded-[20px] border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden bg-surface-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={category.items[0].image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 font-heading text-[13px] font-semibold text-white">
                        {category.items.length} items
                      </span>
                    </div>
                    <div className="p-3.5">
                      <p className="font-heading text-[14px] font-semibold text-foreground">
                        {category.name}
                      </p>
                      <p className="mt-1 line-clamp-2 font-body text-[12px] leading-snug text-muted">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={`/shop#${MENU_CATEGORIES[0].slug}`}
                onClick={() => setShopOpen(false)}
                className="group relative flex min-h-[220px] flex-1 overflow-hidden rounded-[22px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FEATURED_PRODUCT.image}
                  alt={FEATURED_PRODUCT.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="relative mt-auto flex w-full flex-col justify-end p-5">
                  <p className="font-heading text-[11px] font-medium tracking-[2px] text-white/70 uppercase">
                    Featured
                  </p>
                  <p className="mt-1 font-heading text-[22px] font-extrabold tracking-[-0.02em] text-white">
                    {FEATURED_PRODUCT.name}
                  </p>
                  <p className="mt-1 font-body text-[13px] text-white/80">
                    {FEATURED_PRODUCT.price}
                  </p>
                  <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-white px-3.5 py-1.5 font-heading text-[12px] font-semibold text-[#111]">
                    Order now
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </Link>

              <div className="rounded-[20px] border border-border bg-surface px-4 py-4">
                <p className="font-heading text-[13px] font-semibold text-foreground">
                  Need something custom?
                </p>
                <p className="mt-1 font-body text-[12px] leading-snug text-muted">
                  Call or WhatsApp and we&apos;ll help with cakes, trays, and
                  event orders.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-foreground px-3.5 py-2 font-heading text-[12px] font-semibold text-background"
                  >
                    WhatsApp
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3.5 py-2 font-heading text-[12px] font-semibold text-foreground"
                  >
                    <Phone size={12} />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[55] lg:hidden"
        style={{ visibility: "hidden" }}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[#1a120c]/55 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        <div
          ref={panelRef}
          className="absolute inset-0 flex flex-col overflow-hidden bg-[#F7F1EA] dark:bg-[#1a120c]"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(92,58,30,0.22), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-40 blur-3xl dark:opacity-25"
            style={{
              background:
                "radial-gradient(circle, rgba(196,122,154,0.28), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(214,245,106,0.35), transparent 70%)",
            }}
          />

          <div className="relative flex h-full flex-col overflow-y-auto px-6 pt-20 pb-8">
            <p className="mb-6 font-heading text-[11px] font-semibold tracking-[3px] text-[#5C3A1E]/55 uppercase dark:text-[#E8D5C4]/50">
              Explore Shally Pastries
            </p>

            <div
              data-menu-accent
              className="mb-8 h-px w-full bg-[#5C3A1E] dark:bg-[#E8D5C4]/40"
            />

            <nav className="flex flex-1 flex-col justify-center gap-1">
              {NAV_LINKS.map((item, i) => {
                const isShop = item.label === "Shop";

                return (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      data-menu-link
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-[#5C3A1E]/10 py-4 dark:border-[#E8D5C4]/12"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-heading text-[12px] font-medium tabular-nums text-[#5C3A1E]/40 dark:text-[#E8D5C4]/35">
                          0{i + 1}
                        </span>
                        <span className="font-heading text-[clamp(34px,10vw,48px)] font-extrabold tracking-[-0.03em] text-[#1a120c] transition-colors group-hover:text-[#5C3A1E] dark:text-[#F7F1EA] dark:group-hover:text-[#E8D5C4]">
                          {item.label}
                        </span>
                        {"dot" in item && item.dot ? (
                          <span className="mb-2 inline-block h-2 w-2 rounded-full bg-brand-teal" />
                        ) : null}
                      </span>
                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.75}
                        className="translate-y-1 text-[#5C3A1E]/35 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#5C3A1E] dark:text-[#E8D5C4]/35 dark:group-hover:text-[#E8D5C4]"
                      />
                    </Link>

                    {isShop ? (
                      <div className="mb-2 grid grid-cols-3 gap-2 border-b border-[#5C3A1E]/10 pb-4 dark:border-[#E8D5C4]/12">
                        {MENU_CATEGORIES.map((category) => (
                          <Link
                            key={category.slug}
                            href={`/shop#${category.slug}`}
                            onClick={() => setOpen(false)}
                            className="overflow-hidden rounded-2xl bg-white/60 dark:bg-white/5"
                          >
                            <div className="relative aspect-square overflow-hidden">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={category.items[0].image}
                                alt={category.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <p className="px-2 py-2 font-heading text-[10px] font-semibold leading-tight text-[#1a120c] dark:text-[#F7F1EA]">
                              {category.name}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="mt-8 space-y-5">
              <div
                data-menu-meta
                className="flex flex-wrap items-center gap-3"
              >
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-[#5C3A1E] px-5 py-3 font-heading text-[14px] font-semibold text-[#F7F1EA] transition-transform hover:scale-[1.03] dark:bg-[#E8D5C4] dark:text-[#1a120c]"
                >
                  <Phone size={15} strokeWidth={2} />
                  Call to order
                </a>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#5C3A1E]/25 bg-white/70 px-5 py-3 font-heading text-[14px] font-semibold text-[#5C3A1E] backdrop-blur transition-colors hover:bg-white dark:border-[#E8D5C4]/25 dark:bg-white/5 dark:text-[#E8D5C4] dark:hover:bg-white/10"
                >
                  WhatsApp
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div
                data-menu-meta
                className="flex items-end justify-between gap-4 border-t border-[#5C3A1E]/10 pt-5 dark:border-[#E8D5C4]/12"
              >
                <div>
                  <p className="font-heading text-[11px] font-semibold tracking-[2px] text-[#5C3A1E]/45 uppercase dark:text-[#E8D5C4]/45">
                    Reach us
                  </p>
                  <p className="mt-1.5 max-w-[220px] font-body text-[13px] leading-snug text-[#1a120c]/65 dark:text-[#F7F1EA]/60">
                    Call or WhatsApp · {SITE.hours}
                  </p>
                </div>
                <p className="shrink-0 font-heading text-[13px] font-semibold text-[#5C3A1E] dark:text-[#E8D5C4]">
                  {SITE.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
