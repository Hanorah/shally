"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GATEWAY_SLIDES } from "@/lib/constants";

export default function Gateway() {
  const [index, setIndex] = useState(0);
  const slide = GATEWAY_SLIDES[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? GATEWAY_SLIDES.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === GATEWAY_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <section className="relative z-10 bg-background px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 font-heading text-[11px] font-medium tracking-[3px] text-muted-light uppercase">
          Class by Shally&apos;s kitchen
        </p>
        <h2 className="font-heading text-[clamp(32px,5vw,56px)] font-extrabold tracking-[-0.03em] text-foreground">
          Gateway to sweet{" "}
          <span className="text-muted-light">people.</span>
        </h2>
        <p className="mt-4 max-w-lg font-body text-[15px] leading-relaxed text-muted">
          Pay to learn in our Uselu kitchen — hands-on sessions with real dough,
          real ovens, and the team that feeds Benin City.
        </p>

        <div className="relative mt-10 overflow-hidden rounded-[28px] bg-surface-muted shadow-[0_24px_60px_rgba(0,0,0,0.1)] md:mt-12 md:rounded-[36px]">
          <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.caption}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            />

            {/* Soft bottom gradient for readable controls — no colour tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

            {/* Caption chip */}
            <span className="absolute top-5 left-5 rounded-full bg-white/95 px-4 py-2 font-heading text-[13px] font-semibold text-[#111] shadow-sm backdrop-blur md:top-7 md:left-7">
              {slide.caption}
            </span>

            {/* Top-right dots */}
            <div className="absolute top-6 right-6 flex items-center gap-2 md:top-8 md:right-8">
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

            {/* Bottom-left CTA */}
            <a
              href="/trainings"
              className="absolute bottom-5 left-5 rounded-full border border-white/50 bg-white/95 px-5 py-2.5 font-heading text-[14px] font-semibold text-[#111] backdrop-blur transition-transform hover:scale-105 md:bottom-7 md:left-7 md:px-6 md:py-3"
            >
              See trainings
            </a>

            {/* Bottom-right arrows */}
            <div className="absolute right-5 bottom-5 flex gap-2 md:right-7 md:bottom-7">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111] shadow-sm transition-transform hover:scale-105"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111] shadow-sm transition-transform hover:scale-105"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
