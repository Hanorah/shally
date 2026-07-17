"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PenTool,
  PenLine,
  Pencil,
  Layers,
  Wand2,
  Blend,
  CircleDot,
  Shapes,
  Eye,
  Plus,
  Navigation2,
} from "lucide-react";
import { VISION_GRID } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const TOOLS = [
  { Icon: PenTool, size: 52, left: "0%", top: "42%" },
  { Icon: PenLine, size: 44, left: "16%", top: "12%" },
  { Icon: Blend, size: 40, left: "32%", top: "58%" },
  { Icon: CircleDot, size: 48, left: "48%", top: "4%" },
  { Icon: Pencil, size: 56, left: "58%", top: "38%" },
  { Icon: Layers, size: 42, left: "72%", top: "62%" },
  { Icon: Wand2, size: 46, left: "82%", top: "18%" },
  { Icon: Shapes, size: 38, left: "22%", top: "72%" },
] as const;

export default function Vision() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-vision-left]", {
        opacity: 0,
        x: -24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%", once: true },
      });
      gsap.from("[data-vision-card]", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
      gsap.from("[data-tool]", {
        opacity: 0,
        scale: 0.7,
        duration: 0.45,
        stagger: 0.05,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: el, start: "top 65%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 bg-background px-5 py-14 sm:px-6 sm:py-16 md:px-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div data-vision-left className="lg:col-span-5">
          <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface sm:mb-6">
            <Eye size={14} strokeWidth={1.75} className="text-foreground" />
          </div>
          <h2 className="font-heading text-[clamp(28px,7vw,48px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-foreground">
            Our vision for
            <br />
            every celebration.
          </h2>
          <p className="mt-4 max-w-md font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Every cake has a job: show up well, taste good, and fit the moment.
            Shally Pastries keeps the process simple from order to pickup.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex rounded-full border border-border bg-surface px-5 py-2.5 font-heading text-[14px] font-medium text-foreground transition-colors hover:bg-surface-muted sm:mt-6 sm:px-6"
          >
            Read more
          </a>

          {/* Compact icon row on mobile; scattered cloud on md+ */}
          <div className="mt-10 flex flex-wrap gap-2.5 sm:hidden">
            {TOOLS.slice(0, 6).map(({ Icon }, i) => (
              <span
                key={i}
                data-tool
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
              >
                <Icon size={14} strokeWidth={1.75} className="text-foreground" />
              </span>
            ))}
          </div>

          <div className="relative mt-16 hidden min-h-[200px] w-full max-w-sm sm:block">
            {TOOLS.map(({ Icon, size, left, top }, i) => (
              <span
                key={i}
                data-tool
                className="absolute flex items-center justify-center rounded-full bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                style={{ width: size, height: size, left, top }}
              >
                <Icon
                  size={Math.round(size * 0.34)}
                  strokeWidth={1.75}
                  className="text-foreground"
                />
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-w-0 lg:col-span-7">
          <div className="rounded-[22px] bg-surface p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-5 md:p-7">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-heading text-[22px] font-bold tracking-tight text-foreground sm:text-[28px] md:text-[34px]">
                Business
              </p>
              <a
                href="/contact"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1a1a1a] px-3.5 py-2 font-heading text-[12px] font-semibold text-white transition-opacity hover:opacity-85 sm:px-4 sm:text-[13px]"
              >
                <Plus size={14} />
                Order
              </a>
            </div>

            <div className="relative">
              <div className="relative z-10 inline-block rounded-t-[12px] bg-[#1a1a1a] px-4 py-2 sm:rounded-t-[14px] sm:px-5 sm:py-2.5">
                <span className="font-heading text-[13px] font-semibold text-white sm:text-[14px]">
                  Personal
                </span>
              </div>

              <div
                className="-mt-px rounded-[16px] rounded-tl-none bg-[#1a1a1a] p-2.5 pt-4 sm:rounded-[20px] sm:p-4 sm:pt-5"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                }}
              >
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                  {VISION_GRID.map((src, i) => (
                    <div
                      key={src}
                      data-vision-card
                      className="relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      {i === 3 && (
                        <span className="absolute bottom-1.5 left-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#111] text-white sm:bottom-3 sm:left-3 sm:h-9 sm:w-9">
                          <Navigation2 size={12} className="sm:size-[14px]" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
