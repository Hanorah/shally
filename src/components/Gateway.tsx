"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BUSINESSES } from "@/lib/constants";

const TILE_LAYOUT = [
  "sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[420px]",
  "lg:col-span-2 lg:min-h-[200px]",
  "lg:col-span-1 lg:min-h-[200px]",
  "lg:col-span-1 lg:min-h-[200px]",
] as const;

export default function Gateway() {
  return (
    <section
      id="businesses"
      className="relative z-10 bg-background px-5 py-10 sm:px-6 sm:py-14 md:px-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-heading text-[11px] font-medium tracking-[3px] text-muted-light uppercase">
              Explore the businesses
            </p>
            <h2 className="font-heading text-[clamp(26px,5vw,40px)] font-extrabold tracking-[-0.03em] text-foreground">
              Pick a Shally path.
            </h2>
          </div>
          <p className="max-w-sm font-body text-[13px] leading-relaxed text-muted sm:text-right sm:text-[14px]">
            Pastries, training, logistics, and investments — tap a tile to go
            straight there.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {BUSINESSES.map((business, i) => {
            const isFeature = i === 0;

            return (
              <Link
                key={business.id}
                href={business.href}
                className={`group relative min-h-[220px] overflow-hidden rounded-[22px] sm:rounded-[26px] ${TILE_LAYOUT[i]}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={business.image}
                  alt={business.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div className={isFeature ? "max-w-lg" : "min-w-0 flex-1"}>
                      <p
                        className={`font-heading font-extrabold tracking-[-0.02em] text-white ${
                          isFeature
                            ? "text-[clamp(22px,2.8vw,32px)]"
                            : "text-[clamp(17px,2vw,22px)]"
                        }`}
                      >
                        {business.name}
                      </p>
                      <p
                        className={`mt-1 font-body leading-relaxed text-white/80 ${
                          isFeature
                            ? "text-[13px] sm:text-[14px]"
                            : "line-clamp-2 text-[12px] sm:text-[13px]"
                        }`}
                      >
                        {business.short}
                      </p>
                      <span className="mt-2.5 inline-flex items-center gap-1 font-heading text-[12px] font-semibold text-white sm:text-[13px]">
                        {business.cta}
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#111] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
