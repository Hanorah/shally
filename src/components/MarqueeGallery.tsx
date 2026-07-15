"use client";

type Tile = { src: string; alt?: string };

/** Sine-wave vertical offsets so tiles float in a gentle arch (matches AmongUs). */
function archOffset(
  index: number,
  total: number,
  amplitude: number,
  invert = false
) {
  const t = (index % total) / Math.max(total - 1, 1);
  const wave = Math.sin(t * Math.PI) * amplitude;
  const jitter = index % 2 === 0 ? 6 : -6;
  return (invert ? -wave : wave) + jitter;
}

export default function MarqueeGallery({
  images,
  reverse = false,
  duration = 42,
  amplitude = 28,
  invertArch = false,
}: {
  images: readonly Tile[];
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
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background/80 to-transparent sm:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background/80 to-transparent sm:w-10" />

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
              alt={item.alt ?? ""}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
