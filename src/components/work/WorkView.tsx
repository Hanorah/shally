"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { SITE, WORK_GALLERY } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";
import MarqueeGallery from "@/components/MarqueeGallery";

const CATEGORIES = ["All", ...Array.from(new Set(WORK_GALLERY.map((w) => w.category)))];

/** Varying tile sizes so the gallery reads as a bento grid. */
function bentoSpan(i: number) {
  const m = i % 6;
  if (m === 0) return "col-span-2 row-span-2";
  if (m === 3) return "row-span-2";
  if (m === 5) return "sm:col-span-2";
  return "";
}

const topRow = WORK_GALLERY.slice(0, 6).map((w) => ({ src: w.image, alt: w.title }));
const bottomRow = [...WORK_GALLERY.slice(4), ...WORK_GALLERY.slice(0, 2)].map((w) => ({
  src: w.image,
  alt: w.title,
}));

export default function WorkView() {
  const [active, setActive] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () =>
      active === "All"
        ? WORK_GALLERY
        : WORK_GALLERY.filter((w) => w.category === active),
    [active]
  );

  useLayoutEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        opacity: 0,
        y: 28,
        scale: 0.97,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, [active]);

  return (
    <div className="pb-24">
      <div className="px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
              Gallery
            </p>
            <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
              Our work
            </h1>
            <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
              Custom cakes, everyday favourites, event trays, and students in
              training — a peek into the Shally&apos;s kitchen.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12">
        <MarqueeGallery images={topRow} duration={48} amplitude={30} invertArch />
      </div>

      <div className="px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal y={16} className="mt-12">
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`rounded-full border px-4 py-2 font-heading text-[13px] font-semibold transition-all duration-200 ${
                    active === cat
                      ? "border-transparent bg-foreground text-background"
                      : "border-border bg-surface text-foreground hover:bg-hover"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div
            ref={gridRef}
            className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-4 [grid-auto-flow:dense] sm:auto-rows-[180px] lg:grid-cols-4"
          >
            {items.map((item, i) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-[0_28px_60px_rgba(0,0,0,0.2)] ${bentoSpan(i)}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="font-heading text-[10px] font-semibold tracking-[1.5px] text-brand-lime uppercase">
                    {item.category}
                  </p>
                  <h2 className="mt-0.5 font-heading text-[14px] font-semibold text-white sm:text-[15px]">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <MarqueeGallery images={bottomRow} reverse duration={40} amplitude={28} />
      </div>

      <div className="px-6 md:px-16">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mt-14 text-center" y={24}>
            <p className="font-body text-sm text-muted">
              Want something like this for your next event?
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-4 inline-flex rounded-full bg-foreground px-6 py-3 font-heading text-sm font-semibold text-background transition-transform hover:scale-105"
            >
              Call {SITE.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
