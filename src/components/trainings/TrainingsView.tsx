"use client";

import { Check, GraduationCap } from "lucide-react";
import { PACKAGES, COMMUNITY_IMAGES, SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";

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

export default function TrainingsView() {
  return (
    <div className="px-6 pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
            Pay to learn
          </p>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
            Baking trainings
          </h1>
          <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
            Learn meat pies, donuts, cakes, and event trays from the kitchen that
            feeds Benin City. Pick a package, pay, and join the next cohort.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-6 md:grid-cols-3"
          y={44}
          stagger={0.12}
        >
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`group relative flex flex-col rounded-[24px] border p-8 transition-all duration-300 ${
                pkg.featured
                  ? "border-transparent bg-brand-orange text-white shadow-[0_24px_60px_rgba(255,106,43,0.35)] md:-translate-y-3 hover:md:-translate-y-5"
                  : "border-border bg-surface text-foreground hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)]"
              }`}
            >
              {pkg.featured && (
                <>
                  <div
                    className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full opacity-40 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, #fff, transparent 70%)",
                    }}
                  />
                  <span className="relative mb-4 inline-flex w-fit rounded-full bg-white/25 px-3 py-1 font-heading text-[11px] font-semibold tracking-wide uppercase">
                    Most popular
                  </span>
                </>
              )}
              <h2 className="relative font-heading text-xl font-bold">
                {pkg.name}
              </h2>
              <p
                className={`relative mt-1 font-body text-sm ${
                  pkg.featured ? "text-white/80" : "text-muted"
                }`}
              >
                {pkg.note}
              </p>
              <p className="relative mt-6 font-heading text-[42px] font-extrabold tracking-tight">
                {pkg.price}
              </p>
              <ul className="relative mt-6 flex-1 space-y-3">
                {pkg.includes.map((line) => (
                  <li
                    key={line}
                    className={`flex items-start gap-2.5 font-body text-sm leading-snug ${
                      pkg.featured ? "text-white/90" : "text-muted"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        pkg.featured
                          ? "bg-white/25 text-white"
                          : "bg-brand-orange/15 text-brand-orange"
                      }`}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`relative mt-8 inline-flex justify-center rounded-full px-5 py-3 text-center font-heading text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  pkg.featured
                    ? "bg-white text-[#111]"
                    : "bg-foreground text-background"
                }`}
              >
                Enrol via WhatsApp
              </a>
            </article>
          ))}
        </RevealGroup>

        <Reveal className="mt-16" y={30} scale={0.98}>
          <div className="overflow-hidden rounded-[22px] bg-brand-lime">
            <div className="flex w-max animate-marquee-slow items-center gap-6 py-7 pl-6">
              {[...bannerBits, ...bannerBits].map((bit, i) =>
                bit.type === "text" ? (
                  <span
                    key={`t-${i}`}
                    className="shrink-0 font-heading text-[clamp(24px,4vw,44px)] font-extrabold tracking-[-0.03em] text-[#111]"
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
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border">
                <GraduationCap size={18} strokeWidth={1.75} />
              </span>
              <h2 className="font-heading text-[clamp(22px,3vw,30px)] font-extrabold text-foreground">
                How enrolment works
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-3" y={32}>
            {[
              "Choose a package that fits your goals.",
              `Call or WhatsApp ${SITE.phone} to reserve your seat.`,
              "Show up, learn hands-on, leave with skills (and recipes).",
            ].map((step, i) => (
              <div
                key={step}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <span className="font-heading text-2xl font-extrabold text-brand-orange">
                  0{i + 1}
                </span>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                  {step}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </div>
  );
}
