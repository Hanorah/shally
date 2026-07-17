"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "@/lib/constants";

type LenisLike = { stop: () => void; start: () => void };

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    lenis?.stop();
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const duration = 1900;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setDone(true), 300);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return;
    const lenis = (window as unknown as { lenis?: LenisLike }).lenis;
    window.scrollTo(0, 0);
    lenis?.start();
    // Overlay is gone — let ScrollTrigger recompute pin positions.
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 650);
    return () => window.clearTimeout(t);
  }, [done]);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[120] flex flex-col justify-between bg-background px-6 pt-8 pb-8 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] md:px-14 md:pt-12 md:pb-12 ${
        done ? "pointer-events-none -translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-start justify-between">
        <Image
          src="/logo-shally.png"
          alt={SITE.name}
          width={220}
          height={80}
          priority
          className="h-14 w-auto object-contain md:h-16"
        />
        <span className="font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
          Fresh from the oven
        </span>
      </div>

      <div className="flex items-end justify-between gap-4">
        <span className="font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
          Loading
        </span>
        <span className="font-heading text-[clamp(72px,20vw,220px)] leading-[0.85] font-extrabold tracking-[-0.04em] text-foreground tabular-nums">
          {count}
          <span className="text-[#5C3A1E]">%</span>
        </span>
      </div>

      <div className="mt-6 h-[3px] w-full overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-[#5C3A1E] transition-[width] duration-150 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
}
