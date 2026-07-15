"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Scroll reveals driven by IntersectionObserver rather than ScrollTrigger.
 * This is immune to Lenis/route-change measurement issues (which could leave
 * content stuck at opacity:0 on client-side navigation) and always guarantees
 * the content becomes visible once it enters the viewport.
 */

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
};

export function Reveal({
  children,
  className,
  y = 28,
  x = 0,
  scale,
  rotate,
  duration = 0.75,
  delay = 0,
}: BaseProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0, y, x };
    if (scale !== undefined) fromVars.scale = scale;
    if (rotate !== undefined) fromVars.rotate = rotate;
    gsap.set(el, fromVars);

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        duration,
        delay,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) reveal();
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    // Safety net: if the element is already within the viewport, reveal it.
    const safety = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    }, 500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [y, x, scale, rotate, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealGroup({
  children,
  className,
  y = 34,
  scale,
  rotate,
  duration = 0.65,
  stagger = 0.09,
}: BaseProps & { stagger?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children);
    if (!items.length) return;

    const fromVars: gsap.TweenVars = { opacity: 0, y };
    if (scale !== undefined) fromVars.scale = scale;
    if (rotate !== undefined) fromVars.rotate = rotate;
    gsap.set(items, fromVars);

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      gsap.to(items, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration,
        stagger,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) reveal();
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);

    const safety = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    }, 600);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [y, scale, rotate, duration, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
