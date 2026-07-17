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
      className="relative z-10 bg-background px-5 py-10 sm:px-6 sm:py-14 md:px-16 md:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col justify-between rounded-[26px] border border-border bg-surface p-5 sm:p-6 lg:p-8">
          <div>
            <p className="mb-3 font-heading text-[11px] font-medium tracking-[3px] text-muted-light uppercase">
              Explore the businesses
            </p>
            <h2 className="max-w-xl font-heading text-[clamp(28px,6vw,46px)] font-extrabold tracking-[-0.03em] text-foreground">
              Different services.{" "}
              <span className="text-muted-light">One Shally family.</span>
            </h2>
            <p className="mt-4 max-w-lg font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
              Order pastries, learn the craft, book a delivery, or start a
              business conversation from one simple place.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {BUSINESSES.map((b, i) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`group rounded-2xl border px-4 py-3 text-left transition-all sm:py-4 ${
                  i === index
                    ? "border-foreground bg-foreground text-background shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
                    : "border-border bg-background text-foreground hover:-translate-y-0.5 hover:bg-hover"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-[13px] font-semibold sm:text-[14px]">
                      {b.name}
                    </p>
                    <p
                      className={`mt-1 font-body text-[12px] leading-snug sm:text-[13px] ${
                        i === index ? "text-background/70" : "text-muted"
                      }`}
                    >
                      {b.short}
                    </p>
                  </div>
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-heading text-[10px] font-bold ${
                      i === index
                        ? "bg-background text-foreground"
                        : "bg-surface-muted text-muted"
                    }`}
                  >
                    {i + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[26px] bg-surface-muted shadow-[0_22px_50px_rgba(0,0,0,0.1)] sm:rounded-[32px]">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:h-full lg:min-h-[430px] lg:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.caption}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <span className="absolute top-3 left-3 max-w-[70%] truncate rounded-full bg-white/95 px-3 py-1.5 font-heading text-[12px] font-semibold text-[#111] shadow-sm backdrop-blur sm:top-5 sm:left-5 sm:max-w-none sm:px-4 sm:py-2 sm:text-[13px]">
              {slide.caption}
            </span>

            <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 sm:top-6 sm:right-6 sm:gap-2">
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

            <div className="absolute inset-x-3 bottom-3 flex flex-col gap-3 sm:inset-x-5 sm:bottom-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-md">
                <p className="font-heading text-[clamp(20px,3vw,30px)] font-extrabold tracking-[-0.02em] text-white">
                  {business.name}
                </p>
                <p className="mt-1.5 font-body text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                  {business.short}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 sm:justify-end">
                <Link
                  href={business.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/95 px-4 py-2 font-heading text-[13px] font-semibold text-[#111] backdrop-blur transition-transform hover:scale-105 sm:px-5 sm:py-2.5 sm:text-[14px]"
                >
                  {business.cta}
                  <ArrowUpRight size={14} />
                </Link>

                <div className="flex gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111] shadow-sm transition-transform hover:scale-105 sm:h-10 sm:w-10"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111] shadow-sm transition-transform hover:scale-105 sm:h-10 sm:w-10"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
