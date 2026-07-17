"use client";

import { Phone, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";

const cards = [
  {
    icon: Phone,
    tint: "bg-brand-orange/15 text-brand-orange",
    title: "Phone",
    body: SITE.phone,
    href: SITE.phoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    tint: "bg-brand-green/15 text-brand-green",
    title: "WhatsApp",
    body: "Orders, training applications, delivery questions, and enquiries",
    href: SITE.whatsapp,
    external: true,
  },
  {
    icon: Clock,
    tint: "bg-brand-purple/15 text-brand-purple",
    title: "Hours",
    body: "Mon – Sat · 8:00 AM – 7:00 PM\nSunday · By appointment for events",
    href: null,
    external: false,
  },
] as const;

export default function ContactView() {
  return (
    <div className="px-5 pb-20 sm:px-6 sm:pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
            Get in touch
          </p>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
            Call or message us
          </h1>
          <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
            Send the details and we will respond directly. Pastry orders,
            training applications, bike deliveries, and investment enquiries
            all start here.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevealGroup className="flex flex-col gap-4" y={30} stagger={0.1}>
            {cards.map((card) => {
              const Icon = card.icon;
              const inner = (
                <>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${card.tint}`}
                  >
                    <Icon size={20} />
                  </span>
                  <div className="flex-1">
                    <h2 className="font-heading text-base font-semibold text-foreground">
                      {card.title}
                    </h2>
                    <p className="mt-1 font-body text-sm leading-relaxed whitespace-pre-line text-muted">
                      {card.body}
                    </p>
                  </div>
                  {card.href && (
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-muted-light transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                    />
                  )}
                </>
              );

              const base =
                "group flex gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300";

              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  {...(card.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className={`${base} hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:bg-hover`}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.title} className={base}>
                  {inner}
                </div>
              );
            })}
          </RevealGroup>

          <Reveal scale={0.97} y={30}>
            <div className="flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] border border-border bg-foreground p-8 text-background sm:p-10">
              <div>
                <p className="font-heading text-[11px] font-semibold tracking-[2.5px] text-background/50 uppercase">
                  Quick start
                </p>
                <h2 className="mt-4 font-heading text-[clamp(24px,4vw,36px)] font-extrabold tracking-tight">
                  Tell us what you need
                </h2>
                <p className="mt-4 max-w-sm font-body text-[15px] leading-relaxed text-background/70">
                  For orders, include the date, item, quantity, and delivery needs.
                  For training, use the application form on the trainings page.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-white px-6 py-3 font-heading text-sm font-semibold text-[#111] transition-transform hover:scale-105"
                >
                  WhatsApp {SITE.phone}
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex rounded-full border border-white/30 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
