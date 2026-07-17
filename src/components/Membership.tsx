"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { PACKAGES, COMMUNITY_IMAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Membership() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-mem-copy]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
      gsap.from("[data-mem-card]", {
        opacity: 0,
        y: 40,
        rotate: -4,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const bannerBits = [
    { type: "text" as const, value: "Meat pies" },
    { type: "img" as const, value: COMMUNITY_IMAGES[0].src },
    { type: "text" as const, value: "Learn to bake" },
    { type: "img" as const, value: COMMUNITY_IMAGES[3].src },
    { type: "text" as const, value: "Fresh donuts" },
    { type: "img" as const, value: COMMUNITY_IMAGES[1].src },
    { type: "text" as const, value: "Pay to learn" },
    { type: "img" as const, value: COMMUNITY_IMAGES[5].src },
  ];

  return (
    <section
      id="packages"
      ref={ref}
      className="relative z-10 bg-background px-5 py-12 sm:px-6 sm:py-16 md:px-16"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[22px] bg-surface px-5 py-10 shadow-[0_1px_0_var(--border)] sm:rounded-[28px] sm:px-6 sm:py-14 md:px-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-12">
          <div data-mem-copy className="md:col-span-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border">
              <GraduationCap size={18} strokeWidth={1.75} />
            </div>
            <h2 className="font-heading text-[clamp(28px,7vw,52px)] font-extrabold tracking-[-0.03em] text-foreground">
              Shally Pastries Training
            </h2>
            <p className="mt-4 max-w-sm font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
              Practical classes in meat pies, donuts, cakes, and event trays.
              Longer programmes include accommodation for the training period.
            </p>
            <Link
              href="/trainings"
              className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 font-heading text-sm font-semibold text-background"
            >
              View all packages
            </Link>
          </div>

          {/* Mobile: horizontal scroll. Desktop: fanned cards */}
          <div
            className="-mx-5 overflow-x-auto overflow-y-visible px-5 py-4 scrollbar-none md:col-span-7 md:mx-0 md:overflow-visible md:px-0 md:py-6"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="relative flex w-max items-end gap-3 md:w-auto md:justify-center md:gap-4">
              {PACKAGES.map((pkg, i) => (
                <div
                  key={pkg.name}
                  data-mem-card
                  className={`w-[148px] shrink-0 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] sm:w-[160px] sm:p-5 md:w-[31%] md:max-w-[190px] ${
                    pkg.featured
                      ? "z-10 bg-brand-orange text-white"
                      : "bg-surface-muted text-foreground"
                  }`}
                  style={{
                    transform: pkg.featured
                      ? `rotate(${(i - 1) * -4}deg) translateY(-12px) scale(1.05)`
                      : `rotate(${(i - 1) * -4}deg)`,
                  }}
                >
                  {pkg.featured && (
                    <span className="mb-3 inline-block rounded-full bg-white/25 px-2.5 py-0.5 font-heading text-[10px] font-semibold tracking-wide uppercase">
                      Popular
                    </span>
                  )}
                  <p className="font-heading text-[12px] font-medium opacity-70 sm:text-[13px]">
                    {pkg.name}
                  </p>
                  <p className="mt-2 font-heading text-[24px] font-extrabold tracking-tight sm:text-[28px] md:text-[34px]">
                    {pkg.price}
                  </p>
                  <p
                    className={`mt-3 font-body text-[11px] leading-snug sm:text-[12px] ${
                      pkg.featured ? "text-white/85" : "text-muted"
                    }`}
                  >
                    {pkg.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="register"
          className="mt-14 overflow-hidden rounded-[22px] bg-brand-lime"
        >
          <div className="flex w-max animate-marquee-slow items-center gap-6 py-8 pl-6">
            {[...bannerBits, ...bannerBits].map((bit, i) =>
              bit.type === "text" ? (
                <span
                  key={`t-${i}`}
                  className="shrink-0 font-heading text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.03em] text-[#111]"
                >
                  {bit.value}
                </span>
              ) : (
                <span
                  key={`i-${i}`}
                  className="inline-block h-12 w-12 shrink-0 overflow-hidden rounded-xl md:h-14 md:w-14"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bit.value}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
