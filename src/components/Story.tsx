"use client";

import { Fragment, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PaintBucket, Tag, Orbit, LayoutGrid, Sunset } from "lucide-react";
import { STORY_CARDS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const FAN = [
  { x: -120, y: 18, rot: -14 },
  { x: -60, y: 6, rot: -7 },
  { x: 0, y: 0, rot: 0 },
  { x: 60, y: 6, rot: 7 },
  { x: 120, y: 18, rot: 14 },
  { x: 170, y: 30, rot: 20 },
] as const;

// Split a phrase into per-word spans (kept inline so the line wraps naturally
// and each word can be revealed as you scroll).
function words(text: string, className: string) {
  return text.split(" ").map((w, i) => (
    <Fragment key={`${w}-${i}`}>
      <span data-story-word className={`inline-block ${className}`}>
        {w}
      </span>{" "}
    </Fragment>
  ));
}

export default function Story() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = gsap.utils.toArray<HTMLElement>("[data-story-card]");
    const storyWords = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll("[data-story-word]")
    );
    const para = root.querySelector<HTMLElement>("[data-story-para]");
    const mm = gsap.matchMedia();

    // Smooth, scroll-driven word flow — each word brightens in turn as the
    // paragraph rises through the viewport.
    const flow = gsap.fromTo(
      storyWords,
      { opacity: 0.18 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.4,
        duration: 0.6,
        scrollTrigger: {
          trigger: para,
          start: "top 82%",
          end: "top 38%",
          scrub: 1,
        },
      }
    );

    mm.add("(min-width: 768px)", () => {
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 0,
          rotate: 0,
          zIndex: cards.length - i,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 60%",
          end: "top 10%",
          scrub: 1,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            x: FAN[i].x,
            y: FAN[i].y,
            rotate: FAN[i].rot,
            duration: 1,
            ease: "none",
          },
          0
        );
      });
    });

    mm.add("(max-width: 767.98px)", () => {
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50,
          x: (i - 2.5) * 28,
          y: i * 4,
          rotate: (i - 2.5) * 4,
          zIndex: cards.length - i,
        });
      });
    });

    return () => {
      flow.scrollTrigger?.kill();
      flow.kill();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative z-10 flex min-h-[920px] flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 md:min-h-[1000px]"
    >
      {/* Card stack / fan */}
      <div className="relative mb-10 h-[220px] w-full max-w-lg md:mb-14 md:h-[260px]">
        <div className="absolute top-1/2 left-1/2 h-0 w-0">
          {STORY_CARDS.map((src, i) => (
            <div
              key={src}
              data-story-card
              className="absolute top-0 left-0 h-[180px] w-[130px] overflow-hidden rounded-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:h-[220px] md:w-[158px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="absolute top-[-28px] left-0 rounded-full bg-foreground px-3.5 py-1.5 font-heading text-[12px] font-semibold text-background md:left-[-20px]">
          @shallys
        </span>
        <span className="absolute top-[-28px] right-0 rounded-full bg-[#4D7EFF] px-3.5 py-1.5 font-heading text-[12px] font-semibold text-white md:right-[-20px]">
          @kitchen
        </span>

        <p
          data-story-para
          className="font-heading text-[clamp(22px,3.4vw,34px)] font-bold leading-[1.45] tracking-[-0.02em]"
        >
          {words("Whether you're celebrating a moment to share your table", "text-foreground")}
          {words("/ or craving", "text-muted-light")}
          {words("unique", "text-[#4ECDC4]")}
          {words("flavors", "text-foreground")}
          <span data-story-word className="mx-1 inline-flex align-middle">
            <PaintBucket size={22} className="text-foreground" />
          </span>{" "}
          {words("connects", "text-muted-light")}
          {words("you to a world of fresh baking", "text-muted-light")}
          <span data-story-word className="mx-1 inline-flex align-middle">
            <Tag size={20} className="fill-[#FF6A2B] text-[#FF6A2B]" />
          </span>{" "}
          {words("& catering.", "text-muted-light")}
        </p>
      </div>

      <div className="mt-14 flex items-center gap-5 text-muted-light">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
          <Orbit size={16} />
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
          <LayoutGrid size={16} />
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
          <Sunset size={16} />
        </span>
      </div>
    </section>
  );
}
