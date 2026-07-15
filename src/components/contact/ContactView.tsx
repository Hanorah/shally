"use client";

import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";

const cards = [
  {
    icon: MapPin,
    tint: "bg-brand-teal/15 text-brand-teal",
    title: "Store address",
    body: SITE.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
    external: true,
  },
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
    body: "Quick orders & training enrolment",
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
    <div className="px-6 pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
            Get in touch
          </p>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
            Visit or call us
          </h1>
          <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
            We&apos;re at the heart of Uselu — walk in for fresh pastries or ring
            ahead for custom cakes and event trays.
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
            <div className="h-full overflow-hidden rounded-[28px] border border-border bg-surface-muted">
              <iframe
                title="Shally's Pastries location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                className="h-full min-h-[420px] w-full border-0 grayscale dark:invert-[0.85] dark:hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
