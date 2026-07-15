"use client";

import { ArrowUpRight } from "lucide-react";
import { MENU_CATEGORIES, SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";

const ACCENTS = ["var(--brand-orange)", "var(--brand-purple)", "var(--brand-teal)"];

export default function MenuView() {
  return (
    <div className="px-6 pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
            Full menu
          </p>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
            What we bake &amp; cook
          </h1>
          <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
            From yummy meat pies and fresh donuts to custom cakes and party
            trays. Call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-foreground">
              {SITE.phone}
            </a>{" "}
            to place an order.
          </p>
        </Reveal>

        <Reveal delay={0.1} y={16}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {MENU_CATEGORIES.map((c, i) => (
              <a
                key={c.name}
                href={`#${c.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="rounded-full border border-border bg-surface px-4 py-2 font-heading text-[13px] font-semibold text-foreground transition-colors hover:bg-hover"
              >
                <span
                  className="mr-2 inline-block h-2 w-2 rounded-full align-middle"
                  style={{ background: ACCENTS[i % ACCENTS.length] }}
                />
                {c.name}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-20">
          {MENU_CATEGORIES.map((category, ci) => (
            <section
              key={category.name}
              id={category.name.replace(/\s+/g, "-").toLowerCase()}
              className="scroll-mt-28"
            >
              <Reveal x={-20} y={0}>
                <div className="flex items-center gap-3">
                  <span
                    className="h-6 w-1.5 rounded-full"
                    style={{ background: ACCENTS[ci % ACCENTS.length] }}
                  />
                  <h2 className="font-heading text-[clamp(24px,3vw,32px)] font-extrabold tracking-[-0.02em] text-foreground">
                    {category.name}
                  </h2>
                </div>
                <p className="mt-2 max-w-lg font-body text-sm text-muted">
                  {category.description}
                </p>
              </Reveal>

              <RevealGroup
                className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                y={40}
              >
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(0,0,0,0.14)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 font-heading text-[12px] font-semibold text-[#111] shadow-sm backdrop-blur">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <h3 className="font-heading text-[16px] font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-[var(--accent)] group-hover:text-white"
                        style={
                          {
                            "--accent": ACCENTS[ci % ACCENTS.length],
                          } as React.CSSProperties
                        }
                      >
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </article>
                ))}
              </RevealGroup>
            </section>
          ))}
        </div>

        <Reveal className="mt-20" y={40}>
          <div className="relative overflow-hidden rounded-[28px] bg-brand-orange px-8 py-10 text-white md:px-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-2xl"
              style={{ background: "radial-gradient(circle, #fff, transparent 70%)" }}
            />
            <h2 className="relative font-heading text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight">
              Ready to order?
            </h2>
            <p className="relative mt-2 max-w-md font-body text-white/85">
              Visit us at {SITE.address}, or call / WhatsApp to reserve cakes and
              trays.
            </p>
            <div className="relative mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="rounded-full bg-white px-6 py-3 font-heading text-sm font-semibold text-[#111] transition-transform hover:scale-105"
              >
                Call {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
