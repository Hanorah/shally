"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { INVESTMENT_PILLARS, SITE } from "@/lib/constants";

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
      gsap.from("[data-inv-item]", {
        opacity: 0,
        y: 24,
        duration: 0.65,
        stagger: 0.1,
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
      className="relative z-10 bg-background px-5 py-8 sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[22px] bg-surface shadow-[0_1px_0_var(--border)] sm:rounded-[28px] lg:grid-cols-[1.05fr_0.95fr]">
        <div
          data-inv-head
          className="flex flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16"
        >
          <div>
            <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
              Shally Investments
            </p>
            <h2 className="font-heading text-[clamp(28px,7vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground">
              Opportunities worth{" "}
              <span className="text-muted-light">a real conversation.</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
              Investment ideas, business proposals, and partnerships — clear
              goals, clear roles, and a direct line to talk it through.
            </p>

            <ol className="mt-8 space-y-5 border-t border-border pt-6">
              {INVESTMENT_PILLARS.map((pillar, i) => (
                <li
                  key={pillar.title}
                  data-inv-item
                  className="grid grid-cols-[auto_1fr] gap-3"
                >
                  <span className="font-heading text-[12px] font-semibold tabular-nums text-muted-light">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-[15px] font-semibold text-foreground sm:text-[16px]">
                      {pillar.title}
                    </p>
                    <p className="mt-1 font-body text-[13px] leading-relaxed text-muted sm:text-[14px]">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/investments"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-heading text-[14px] font-semibold text-background transition-opacity hover:opacity-85"
            >
              Learn more
              <ArrowUpRight size={15} />
            </Link>
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi Shally Investments, I'd like to discuss an opportunity.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-heading text-[13px] font-semibold text-foreground underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=1400&fit=crop&q=80"
            alt="Business and investment"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8">
            <p className="font-heading text-[11px] font-medium tracking-[2px] text-white/70 uppercase">
              Start here
            </p>
            <p className="mt-2 max-w-xs font-heading text-[22px] font-extrabold tracking-[-0.02em] text-white sm:text-[26px]">
              Bring the idea, the numbers, and the ask.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
