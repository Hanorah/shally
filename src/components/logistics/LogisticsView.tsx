"use client";

import { Bike, Check, ArrowUpRight } from "lucide-react";
import { LOGISTICS_SERVICES, LOGISTICS_STEPS, SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";

export default function LogisticsView() {
  return (
    <div className="px-5 pb-20 sm:px-6 sm:pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
            Shally Logistics
          </p>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
            Send it by bike
          </h1>
          <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
            Fast bike delivery for parcels, food, documents, business orders,
            and everyday errands. Send the pickup and drop-off details, and we
            will assign a rider.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi Shally Logistics, I need a bike delivery.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Get a quote
              <ArrowUpRight size={16} />
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex rounded-full border border-border bg-surface px-6 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-hover"
            >
              Call {SITE.phone}
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-10" y={28}>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Bike dispatch", "A practical option for items that need to move quickly."],
              ["Direct updates", "Pickup, rider contact, and delivery details confirmed upfront."],
              ["For individuals & businesses", "Book one delivery or arrange repeat runs."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <p className="font-heading text-sm font-bold text-foreground">
                  {title}
                </p>
                <p className="mt-1 font-body text-[13px] leading-relaxed text-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-[28px]" y={36} scale={0.98}>
          <div className="relative aspect-[16/9] min-h-[240px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shally-%20deliveries.PNG"
              alt="Shally Logistics riders ready for delivery"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border">
                <Bike size={18} strokeWidth={1.75} />
              </span>
              <h2 className="font-heading text-[clamp(22px,3vw,30px)] font-extrabold text-foreground">
                Delivery options
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-2" y={32} stagger={0.08}>
            {LOGISTICS_SERVICES.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </article>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="mb-6 font-heading text-[clamp(22px,3vw,30px)] font-extrabold text-foreground">
              Simple process
            </h2>
          </Reveal>
          <RevealGroup className="grid gap-4 sm:grid-cols-3" y={32}>
            {LOGISTICS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-border bg-surface p-6"
              >
                <span className="font-heading text-2xl font-extrabold text-brand-orange">
                  {item.step}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-16" y={30}>
          <div className="grid overflow-hidden rounded-[28px] border border-border bg-surface-muted md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[260px] bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/shally-delivery.PNG"
                alt="Shally Logistics Services sign"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-8 sm:p-10 md:p-12">
              <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight text-foreground">
                A rider assigned to every trip
              </h2>
              <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-muted">
                The rider gets the pickup, destination, contact details, and item
                description before leaving. You receive the rider&apos;s details
                and can stay informed until delivery.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "A rider assigned before pickup",
                  "Clear pickup and drop-off briefings",
                  "Updates through delivery",
                  "Same-day and scheduled delivery",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 font-body text-sm text-foreground"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-brand-green"
                    />
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi Shally Logistics, I need a bike delivery.")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-sm font-semibold text-background transition-transform hover:scale-105"
              >
                Request a quote
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
