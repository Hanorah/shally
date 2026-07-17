"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BUSINESSES, GATEWAY_SLIDES } from "@/lib/constants";

export default function Gateway() {
  const [index, setIndex] = useState(0);
  const slide = GATEWAY_SLIDES[index];
  const business = BUSINESSES[index] ?? BUSINESSES[0];

  const prev = () =>
    setIndex((i) => (i === 0 ? GATEWAY_SLIDES.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === GATEWAY_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <section
      id="businesses"
      className="relative z-10 bg-background px-5 py-12 sm:px-6 sm:py-16 md:px-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-heading text-[11px] font-medium tracking-[3px] text-muted-light uppercase">
          Explore the businesses
        </p>
        <h2 className="font-heading text-[clamp(28px,7vw,56px)] font-extrabold tracking-[-0.03em] text-foreground">
          Different services.{" "}
          <span className="text-muted-light">Each with its own focus.</span>
        </h2>
        <p className="mt-4 max-w-lg font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
          Order from Shally Pastries, apply to Shally Pastries Training, book a
          rider with Shally Logistics, or learn about Shally Investments.
        </p>

        <div className="relative mt-8 overflow-hidden rounded-[22px] bg-surface-muted shadow-[0_24px_60px_rgba(0,0,0,0.1)] sm:mt-10 sm:rounded-[28px] md:mt-12 md:rounded-[36px]">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] md:aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.caption}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

            <span className="absolute top-3 left-3 max-w-[70%] truncate rounded-full bg-white/95 px-3 py-1.5 font-heading text-[12px] font-semibold text-[#111] shadow-sm backdrop-blur sm:top-5 sm:left-5 sm:max-w-none sm:px-4 sm:py-2 sm:text-[13px] md:top-7 md:left-7">
              {slide.caption}
            </span>

            <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 sm:top-6 sm:right-6 sm:gap-2 md:top-8 md:right-8">
              {GATEWAY_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all ${
                    i === index
                      ? "h-2.5 w-2.5 bg-white"
                      : "h-2 w-2 bg-white/45"
                  }`}
                />
              ))}
            </div>

            <div className="absolute inset-x-3 bottom-3 flex flex-col gap-3 sm:inset-x-5 sm:bottom-5 md:inset-x-7 md:bottom-7 md:flex-row md:items-end md:justify-between">
              <div className="max-w-md">
                <p className="font-heading text-[clamp(20px,3vw,28px)] font-extrabold tracking-[-0.02em] text-white">
                  {business.name}
                </p>
                <p className="mt-1.5 font-body text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                  {business.short}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 sm:justify-end">
                <Link
                  href={business.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/95 px-4 py-2 font-heading text-[13px] font-semibold text-[#111] backdrop-blur transition-transform hover:scale-105 sm:px-5 sm:py-2.5 sm:text-[14px] md:px-6 md:py-3"
                >
                  {business.cta}
                  <ArrowUpRight size={14} />
                </Link>

                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111] shadow-sm transition-transform hover:scale-105 sm:h-11 sm:w-11"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111] shadow-sm transition-transform hover:scale-105 sm:h-11 sm:w-11"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESSES.map((b, i) => (
            <button
              key={b.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                i === index
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface text-foreground hover:bg-hover"
              }`}
            >
              <p className="font-heading text-[13px] font-semibold">{b.name}</p>
              <p
                className={`mt-1 font-body text-[12px] leading-snug ${
                  i === index ? "text-background/70" : "text-muted"
                }`}
              >
                {b.short}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
