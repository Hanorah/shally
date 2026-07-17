"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Landmark, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { INVESTMENT_PILLARS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function InvestmentsSection() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-inv-head]", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
      gsap.from("[data-inv-card]", {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 72%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="investments"
      ref={ref}
      className="relative z-10 bg-background px-5 py-14 sm:px-6 sm:py-20 md:px-16"
    >
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[22px] bg-surface-muted px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-14 md:px-12 md:py-16">
        <div data-inv-head className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
              <Landmark size={18} strokeWidth={1.75} />
            </div>
            <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
              Shally Investments
            </p>
            <h2 className="font-heading text-[clamp(28px,7vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground">
              Opportunities,
              <br />
              partnerships, growth.
            </h2>
            <p className="mt-4 max-w-md font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
              A dedicated space for investment opportunities, business proposals,
              and partnerships with clear goals.
            </p>
          </div>
          <Link
            href="/investments"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-[14px] font-semibold text-background transition-opacity hover:opacity-85"
          >
            Learn more
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {INVESTMENT_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              data-inv-card
              className="rounded-[22px] border border-border bg-surface p-6 sm:p-8"
            >
              <h3 className="font-heading text-[18px] font-bold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-muted">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
