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
      className="relative z-10 bg-background px-6 py-16 md:px-16"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-surface px-6 py-14 shadow-[0_1px_0_var(--border)] md:px-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div data-mem-copy className="md:col-span-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border">
              <GraduationCap size={18} strokeWidth={1.75} />
            </div>
            <h2 className="font-heading text-[clamp(32px,4.5vw,52px)] font-extrabold tracking-[-0.03em] text-foreground">
              Trainings
            </h2>
            <p className="mt-4 max-w-sm font-body text-[15px] leading-relaxed text-muted">
              Pay to learn in Shally&apos;s kitchen — meat pies, donuts, cakes,
              and event trays. Hands-on packages for beginners and ambitious bakers.
            </p>
            <Link
              href="/trainings"
              className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 font-heading text-sm font-semibold text-background"
            >
              View all packages
            </Link>
          </div>

          <div className="relative flex items-end justify-center gap-3 md:col-span-7 md:gap-4">
            {PACKAGES.map((pkg, i) => (
              <div
                key={pkg.name}
                data-mem-card
                className={`w-[31%] max-w-[190px] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${
                  pkg.featured
                    ? "z-10 bg-brand-orange text-white"
                    : "bg-surface-muted text-foreground"
                }`}
                style={{
                  transform: pkg.featured
                    ? `rotate(${(i - 1) * -4}deg) translateY(-18px) scale(1.08)`
                    : `rotate(${(i - 1) * -4}deg)`,
                }}
              >
                {pkg.featured && (
                  <span className="mb-3 inline-block rounded-full bg-white/25 px-2.5 py-0.5 font-heading text-[10px] font-semibold tracking-wide uppercase">
                    Popular
                  </span>
                )}
                <p className="font-heading text-[13px] font-medium opacity-70">
                  {pkg.name}
                </p>
                <p className="mt-2 font-heading text-[28px] font-extrabold tracking-tight md:text-[34px]">
                  {pkg.price}
                </p>
                <p
                  className={`mt-3 font-body text-[12px] leading-snug ${
                    pkg.featured ? "text-white/85" : "text-muted"
                  }`}
                >
                  {pkg.note}
                </p>
              </div>
            ))}
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
