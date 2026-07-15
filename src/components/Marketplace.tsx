"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { MARKETPLACE_ITEMS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const VISIBLE = 4;

export default function Marketplace() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, MARKETPLACE_ITEMS.length - VISIBLE);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-market-head]", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
      gsap.from("[data-market-card]", {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const go = (dir: -1 | 1) => {
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));
  };

  const progress = maxIndex === 0 ? 0 : index / maxIndex;
  const thumbWidth = maxIndex === 0 ? 100 : 100 / (maxIndex + 1);

  return (
    <section
      ref={ref}
      className="relative z-10 bg-background px-6 py-20 md:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-10 lg:grid-cols-12 lg:items-start">
        <div data-market-head className="lg:col-span-4">
          <p className="mb-3 font-heading text-[11px] font-bold tracking-[2.5px] uppercase">
            <span className="text-foreground">Get more </span>
            <span className="text-brand-purple">tasty.</span>
          </p>
          <h2 className="font-heading text-[clamp(32px,4.2vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground">
            Favourites from
            <br />
            the oven
          </h2>
          <p className="mt-4 max-w-xs font-body text-[14px] leading-relaxed text-muted">
            Meat pies, donuts, burgers, custom cakes, and event trays — baked
            fresh daily at our Uselu kitchen.
          </p>

          <div className="mt-10 hidden gap-2 lg:flex">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => go(-1)}
              disabled={index === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-foreground transition-opacity hover:opacity-70 disabled:opacity-35"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => go(1)}
              disabled={index === maxIndex}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-foreground transition-opacity hover:opacity-70 disabled:opacity-35"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="mb-6 flex justify-end">
            <Link
              href="/menu"
              className="rounded-full bg-brand-purple px-6 py-2.5 font-heading text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View All
            </Link>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${index} * (160px + 16px)))`,
              }}
            >
              {MARKETPLACE_ITEMS.map((item) => (
                <article
                  key={item.title}
                  data-market-card
                  className="w-[140px] shrink-0 sm:w-[160px]"
                >
                  <div className="aspect-square overflow-hidden rounded-[18px] bg-surface-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 font-heading text-[13px] font-semibold text-foreground">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex shrink-0 gap-2 lg:hidden">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => go(-1)}
                disabled={index === 0}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-foreground transition-opacity hover:opacity-70 disabled:opacity-35"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => go(1)}
                disabled={index === maxIndex}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-foreground transition-opacity hover:opacity-70 disabled:opacity-35"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-border/50">
              <div
                className="absolute top-0 h-[3px] -translate-y-px rounded-full bg-foreground transition-all duration-500"
                style={{
                  width: `${thumbWidth}%`,
                  left:
                    maxIndex === 0
                      ? "0%"
                      : `${progress * (100 - thumbWidth)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
