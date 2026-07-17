"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bike, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LOGISTICS_SERVICES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function LogisticsSection() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-log-head]", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      });
      gsap.from("[data-log-card]", {
        opacity: 0,
        y: 36,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 72%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="logistics"
      ref={ref}
      className="relative z-10 bg-background px-5 py-10 sm:px-6 sm:py-16 md:px-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div data-log-head className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
              <Bike size={18} strokeWidth={1.75} />
            </div>
            <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
              Shally Logistics
            </p>
            <h2 className="font-heading text-[clamp(28px,7vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground">
              Bike delivery,
              <br />
              without the stress.
            </h2>
            <p className="mt-4 max-w-md font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
              Book a rider for parcels, food, documents, customer orders, and
              everyday errands. Clear pickup details and direct communication.
            </p>
          </div>
          <Link
            href="/logistics"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-[14px] font-semibold text-background transition-opacity hover:opacity-85"
          >
            Book a delivery
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LOGISTICS_SERVICES.map((service) => (
            <article
              key={service.title}
              data-log-card
              className="rounded-[22px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <h3 className="font-heading text-[17px] font-bold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-muted">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
