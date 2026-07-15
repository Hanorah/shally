"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MENU_CASCADE_ITEMS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = MENU_CASCADE_ITEMS.slice(0, 3);
const ACCENTS = ["var(--brand-orange)", "var(--brand-purple)", "var(--brand-teal)"];
const CENTER = 1; // middle card flies in first
const CARD_W = 300;
const GAP = 28;
const STEP = CARD_W + GAP;

export default function MenuCascade() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const mobile = mobileRef.current;
    if (!root || !stage || !mobile) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const anchor = stage.querySelector<HTMLElement>("[data-menu-anchor]");
      const cards = gsap.utils.toArray<HTMLElement>(
        stage.querySelectorAll("[data-menu-card]")
      );
      const cta = root.querySelector("[data-menu-cta]");
      const heading = root.querySelector("[data-menu-heading]");

      const scale = window.innerWidth >= 1024 ? 1 : 0.72;
      gsap.set(anchor, { scale, transformOrigin: "50% 50%" });

      // Initial state: a single card sits at the centre (the one that just
      // dropped from the hero). Siblings hide behind it, ready to open out.
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          rotate: i === CENTER ? 0 : (i - CENTER) * 6,
          scale: i === CENTER ? 1 : 0.9,
          opacity: i === CENTER ? 1 : 0,
          zIndex: i === CENTER ? 10 : 5 - i,
        });
      });
      gsap.set(cta, { opacity: 0, y: 14 });
      gsap.set(heading, { opacity: 0, y: 18 });

      // Scrubbed + pinned: the visitor literally watches the lone card open
      // into three as they scroll — a direct continuation of the hero drop.
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=140%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1) Title fades up while the single card settles.
      tl.to(heading, { opacity: 1, y: 0, duration: 0.4 }, 0);

      // 2) It separates into three — siblings glide out from behind it.
      cards.forEach((card, i) => {
        if (i === CENTER) return;
        const dir = i - CENTER;
        tl.to(
          card,
          { x: dir * STEP, rotate: 0, scale: 1, opacity: 1, duration: 0.7 },
          0.3 + Math.abs(dir) * 0.08
        );
      });

      tl.to(cta, { opacity: 1, y: 0, duration: 0.4 }, 0.95);
    });

    mm.add("(max-width: 767.98px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        mobile.querySelectorAll("[data-menu-card]")
      );
      gsap.from(cards, {
        opacity: 0,
        y: 36,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: mobile, start: "top 80%", once: true },
      });
    });

    return () => mm.revert();
  }, []);

  const Card = ({
    item,
    i,
    absolute,
  }: {
    item: (typeof ITEMS)[number];
    i: number;
    absolute?: boolean;
  }) => (
    <article
      data-menu-card
      className={`group flex flex-col overflow-hidden rounded-[22px] border border-border bg-surface shadow-[0_22px_55px_rgba(0,0,0,0.14)] transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)] ${
        absolute ? "absolute top-0 left-0 w-[300px] will-change-transform" : "w-full"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.title}
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 font-heading text-[12px] font-semibold text-[#111] shadow-sm backdrop-blur">
          {item.price}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <h3 className="font-heading text-[16px] font-semibold text-foreground">
          {item.title}
        </h3>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-white"
          style={{ "--accent": ACCENTS[i % ACCENTS.length] } as React.CSSProperties}
        >
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );

  return (
    <section
      id="menu"
      ref={rootRef}
      className="relative z-10 overflow-hidden bg-background px-6 pt-20 pb-20 md:px-16 md:pt-28"
    >
      <div className="mx-auto max-w-6xl">
        <div data-menu-heading className="text-center">
          <p className="mb-2 font-heading text-[11px] font-medium tracking-[2.5px] uppercase">
            <span className="text-foreground">Our </span>
            <span className="text-brand-purple">menu</span>
          </p>
          <h2 className="font-heading text-[clamp(28px,4.5vw,48px)] font-extrabold tracking-[-0.03em] text-foreground">
            Favourites from the oven
          </h2>
        </div>

        {/* Desktop: cards fly in and separate */}
        <div
          ref={stageRef}
          className="relative hidden h-[360px] md:block lg:h-[400px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-menu-anchor className="relative h-0 w-0">
              {ITEMS.map((item, i) => (
                <Card key={item.title} item={item} i={i} absolute />
              ))}
            </div>
          </div>
        </div>

        <div
          data-menu-cta
          className="mt-2 hidden justify-center md:flex"
        >
          <Link
            href="/menu"
            className="rounded-full bg-brand-purple px-6 py-3 font-heading text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Full menu
          </Link>
        </div>

        {/* Mobile: static menu-style cards */}
        <div ref={mobileRef} className="mt-8 md:hidden">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ITEMS.map((item, i) => (
              <Card key={item.title} item={item} i={i} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/menu"
              className="rounded-full bg-brand-purple px-6 py-3 font-heading text-sm font-semibold text-white"
            >
              Full menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
