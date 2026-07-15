"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cake, GraduationCap } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCards() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-feat]", {
        opacity: 0,
        y: 36,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative z-10 bg-background px-6 py-10 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        <article
          data-feat
          className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#E11D74] p-8 text-white md:min-h-[440px] md:p-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&h=1100&fit=crop&q=80"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="relative">
            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <Cake size={16} />
            </div>
            <h3 className="font-heading text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-0.03em]">
              Celebrate with us
            </h3>
            <p className="mt-4 max-w-xs font-body text-[14px] leading-relaxed text-white/80">
              Custom cakes and event trays for birthdays, weddings, and every
              gathering that deserves something delicious.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 font-heading text-[14px] font-semibold text-[#111] transition-transform hover:scale-105"
          >
            Place an order
          </Link>
        </article>

        <article
          data-feat
          className="relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-surface p-8 md:min-h-[440px] md:p-10"
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,106,43,0.45), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-10 left-8 h-40 w-40 rounded-full opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-muted">
              <GraduationCap size={16} />
            </div>
            <h3 className="font-heading text-[clamp(28px,3.5vw,40px)] font-extrabold tracking-[-0.03em] text-foreground">
              Learn the craft
            </h3>
            <p className="mt-4 max-w-xs font-body text-[14px] leading-relaxed text-muted">
              Join our pay-to-learn trainings — from meat pies to custom cakes.
              Enrol early; seats fill fast.
            </p>
          </div>
          <Link
            href="/trainings"
            className="relative mt-8 inline-flex w-fit rounded-full bg-foreground px-6 py-3 font-heading text-[14px] font-semibold text-background transition-transform hover:scale-105"
          >
            View trainings
          </Link>
        </article>
      </div>
    </section>
  );
}
