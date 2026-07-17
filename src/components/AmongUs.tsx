"use client";

import { COMMUNITY_IMAGES } from "@/lib/constants";

type GalleryItem = (typeof COMMUNITY_IMAGES)[number];

/** Sine-wave vertical offsets so tiles float in a gentle arch */
function archOffset(index: number, total: number, amplitude: number, invert = false) {
  const t = (index % total) / Math.max(total - 1, 1);
  const wave = Math.sin(t * Math.PI) * amplitude;
  const jitter = index % 2 === 0 ? 6 : -6;
  return (invert ? -wave : wave) + jitter;
}

function ThumbRow({
  images,
  reverse = false,
  duration = 42,
  amplitude = 28,
  invertArch = false,
}: {
  images: readonly GalleryItem[];
  reverse?: boolean;
  duration?: number;
  amplitude?: number;
  invertArch?: boolean;
}) {
  // Repeat enough to fill wide screens, then keep an even count so
  // translateX(-50%) loops seamlessly with no visible start/end.
  const base = [...images, ...images, ...images];
  const set = [...base, ...base];
  const n = images.length;

  return (
    <div className="relative overflow-hidden py-3">
      {/* Soft edge fade so tiles feel endless */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <div
        className={`flex w-max gap-3 sm:gap-4 ${
          reverse ? "marquee-track-reverse" : "marquee-track"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {set.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-[22px] bg-surface-muted shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-border sm:h-[92px] sm:w-[92px] md:h-[108px] md:w-[108px] md:rounded-[26px]"
            style={{
              transform: `translateY(${archOffset(i % n, n, amplitude, invertArch)}px)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AmongUs() {
  const top = COMMUNITY_IMAGES.slice(0, 6);
  const bottom = [
    ...COMMUNITY_IMAGES.slice(6, 12),
    ...COMMUNITY_IMAGES.slice(0, 2),
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-background py-12 sm:py-16 md:py-28">
      <div className="py-2 sm:py-3">
        <ThumbRow images={top} duration={48} amplitude={18} invertArch />
      </div>

      <div className="relative z-20 mx-auto max-w-4xl px-5 py-10 text-center sm:px-6 sm:py-12 md:py-16">
        <h2 className="font-heading text-[clamp(26px,6.5vw,52px)] font-medium leading-[1.12] tracking-[-0.035em] text-foreground">
          Fresh bakes, training days, and delivery moments from the work behind
          Shally Pastries.
        </h2>

        <a
          href="/work"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-hover sm:mt-7"
        >
          See our work
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="py-2 sm:py-3">
        <ThumbRow images={bottom} reverse duration={40} amplitude={16} />
      </div>
    </section>
  );
}
