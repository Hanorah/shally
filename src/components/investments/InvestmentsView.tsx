"use client";

import { Landmark, ArrowUpRight, Check } from "lucide-react";
import { INVESTMENT_PILLARS, SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";

export default function InvestmentsView() {
  return (
    <div className="px-5 pb-20 sm:px-6 sm:pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
            Shally Investments
          </p>
          <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
            Let&apos;s talk business
          </h1>
          <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
            A place for serious investment opportunities, business proposals,
            and partnerships. Send the idea, the numbers, and the role you expect
            each party to play.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi Shally Investments, I'd like to discuss an opportunity.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-heading text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Talk to us
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
          <div className="rounded-[28px] border border-border bg-surface p-6 sm:p-8 md:p-10">
            <p className="font-heading text-[11px] font-semibold tracking-[2.5px] text-muted-light uppercase">
              What matters
            </p>
            <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
              <h2 className="font-heading text-[clamp(24px,4vw,42px)] font-extrabold leading-tight tracking-[-0.03em] text-foreground">
                A useful opportunity should be clear enough to explain.
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-muted">
                What is the opportunity? What does it need? How does it make
                money? Who is responsible for what? Those questions come before
                any commitment.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-[28px]" y={36} scale={0.98}>
          <div className="relative aspect-[16/9] min-h-[240px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&q=80"
              alt="City skyline representing long-term investment"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border">
                <Landmark size={18} strokeWidth={1.75} />
              </span>
              <h2 className="font-heading text-[clamp(22px,3vw,30px)] font-extrabold text-foreground">
                Areas of interest
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-4 md:grid-cols-3" y={32} stagger={0.1}>
            {INVESTMENT_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8"
              >
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </article>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-16" y={30}>
          <div className="grid gap-8 overflow-hidden rounded-[28px] border border-border bg-surface md:grid-cols-2">
            <div className="p-8 sm:p-10 md:p-12">
              <h2 className="font-heading text-[clamp(24px,3vw,34px)] font-extrabold tracking-tight text-foreground">
                What a good opportunity looks like
              </h2>
              <p className="mt-4 font-body text-[15px] leading-relaxed text-muted">
                Clear operators, real demand, and a reason Shally Pastries can
                add more than money.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Aligned founders and clear governance",
                  "Grounded operations we can diligence",
                  "Room to grow with patient capital",
                  "Respect for people, process, and place",
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
            </div>
            <div className="relative min-h-[280px] bg-surface-muted md:min-h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&h=1200&fit=crop&q=80"
                alt="Hands-on operating business"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16" y={30}>
          <div className="rounded-[28px] bg-foreground p-8 text-background sm:p-10 md:p-12">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight">
              Start with a real conversation
            </h2>
            <p className="mt-4 max-w-xl font-body text-[15px] leading-relaxed text-background/70">
              Share what you are building or proposing. If there is a fit, the
              next step is a direct discussion about numbers, roles, and expectations.
            </p>
            <a
              href={`${SITE.whatsapp}?text=${encodeURIComponent("Hi Shally Investments, I'd like to discuss an opportunity.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-heading text-sm font-semibold text-[#111] transition-transform hover:scale-105"
            >
              Enquire on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
