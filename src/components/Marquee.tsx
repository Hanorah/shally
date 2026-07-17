"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { TRUSTED_LOGOS } from "@/lib/constants";

const LOGO_COLORS = [
  "bg-brand-red",
  "bg-brand-orange",
  "bg-brand-lime",
  "bg-brand-teal",
  "bg-brand-blue",
  "bg-brand-purple",
  "bg-brand-green",
  "bg-brand-orange",
  "bg-brand-teal",
] as const;

function LogoMark({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex h-10 shrink-0 items-center gap-3 px-6 sm:px-8">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${color}`}
      >
        <Plus size={16} strokeWidth={2.5} className="text-[#111]" />
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
        {name}
      </span>
    </div>
  );
}

export default function Marquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    scrollerRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 overflow-hidden bg-background py-12 sm:py-16 md:py-24">
      <div className="mx-auto mb-8 flex max-w-6xl items-start justify-between gap-4 px-5 sm:mb-12 sm:gap-6 sm:px-8">
        <div>
          <h2 className="font-heading text-[clamp(28px,7vw,56px)] font-extrabold tracking-[-0.03em] text-foreground">
            Loved at the <span className="text-muted-light">best tables.</span>
          </h2>
          <p className="mt-3 max-w-md font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
            From birthdays to event tables, people come to Shally Pastries for
            food that looks good, travels well, and tastes familiar.
          </p>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-hover text-foreground transition-colors hover:opacity-80"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-hover text-foreground transition-colors hover:opacity-80"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 scrollbar-none sm:gap-2 sm:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {TRUSTED_LOGOS.map((name, i) => (
          <LogoMark
            key={name}
            name={name}
            color={LOGO_COLORS[i % LOGO_COLORS.length]}
          />
        ))}
      </div>
    </section>
  );
}
