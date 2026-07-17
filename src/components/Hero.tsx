"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CARD_IMAGES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const BRAND = "#6B2D4A";

// Menu reveal (folded into the hero timeline for one continuous motion).
// The three cards are IDENTICAL to the hero card — same image, same style —
// so the single card that gathers at centre literally splits into three.
const MENU_CENTER = 1; // middle card = the one that arrived from the hero
const MENU_CARD_W = 192; // matches the hero card's large width
const MENU_CARD_H = 220;
const MENU_GAP = 24;
const MENU_STEP = MENU_CARD_W + MENU_GAP;

const FAN = [
  { x: -300, y: 56, rot: -22 },
  { x: -200, y: 28, rot: -15 },
  { x: -100, y: 8, rot: -8 },
  { x: 0, y: 0, rot: -2 },
  { x: 100, y: 8, rot: 5 },
  { x: 200, y: 28, rot: 12 },
  { x: 300, y: 56, rot: 19 },
] as const;

const CASCADE = [
  { x: -210, y: -110, rot: -3 },
  { x: -120, y: -60, rot: 1 },
  { x: -40, y: -20, rot: -1 },
  { x: 40, y: 15, rot: 1 },
  { x: 120, y: 50, rot: 0 },
  { x: 190, y: 80, rot: 2 },
  { x: 255, y: 105, rot: 1 },
] as const;

const TOP_INDEX = FAN.length - 1;

// The three cards the single card opens into — the middle one keeps the hero
// card's image so the split is seamless; the siblings reveal other bakes.
const MENU_IMAGES = [
  { src: CARD_IMAGES[2], label: "Custom cakes" },
  { src: CARD_IMAGES[TOP_INDEX], label: "Meat pies" },
  { src: CARD_IMAGES[4], label: "Fresh donuts" },
] as const;

const SC_HEADING = [
  { t: "Choose what", br: true },
  { t: "you", br: false, accent: true },
  { t: "need.", br: false, accent: true },
] as const;

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(min-width: 640px) and (max-width: 1023.98px)",
        isMobile: "(max-width: 639.98px)",
      },
      (self) => {
        const { isDesktop, isTablet, isMobile } = self.conditions as {
          isDesktop: boolean;
          isTablet: boolean;
          isMobile: boolean;
        };

        // Tighter fan on phones so cards sit closer to the heading/CTA.
        const fanScale = isDesktop ? 1 : isTablet ? 0.82 : 0.55;
        const casScale = isDesktop ? 1 : isTablet ? 0.82 : 0.42;
        const ox = () =>
          isDesktop
            ? window.innerWidth * 0.22
            : isTablet
              ? window.innerWidth * 0.14
              : 0;
        const oy = () =>
          isDesktop
            ? window.innerHeight * 0.08
            : isTablet
              ? window.innerHeight * 0.1
              : window.innerHeight * 0.22;

        const stack = root.querySelector<HTMLElement>("[data-stack]");
        const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
        const heroBubbles = gsap.utils.toArray<HTMLElement>("[data-hero-bubble]");
        const scBubbles = gsap.utils.toArray<HTMLElement>("[data-sc-bubble]");
        const scWords = gsap.utils.toArray<HTMLElement>("[data-sc-word]");

        const menuLayer = root.querySelector<HTMLElement>("[data-menu-layer]");
        const menuAnchor = root.querySelector<HTMLElement>("[data-menu-anchor]");
        const menuCards = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-menu-card]")
        );
        const menuHeading = root.querySelector("[data-menu-heading]");
        const menuCta = root.querySelector("[data-menu-cta]");
        // Scale the menu cards to exactly match the hero card at this breakpoint
        // so the gather → split reads as one continuous card.
        const heroCardW = isDesktop ? 192 : isTablet ? 162 : 134;
        const menuScale = heroCardW / MENU_CARD_W;
        const finalW = isDesktop
          ? 240
          : isTablet
            ? 210
            : Math.min(340, window.innerWidth - 28);
        const finalH = isDesktop
          ? 210
          : isTablet
            ? 180
            : Math.round(finalW * 0.58);
        const menuGap = isDesktop ? 22 : isTablet ? 18 : 12;

        const menuFinalPos = (i: number) => {
          const dir = i - MENU_CENTER;
          if (isMobile) {
            return { x: 0, y: dir * (finalH + menuGap) };
          }
          return { x: dir * (finalW + menuGap), y: 0 };
        };

        cards.forEach((card, i) => {
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            rotate: 0,
            opacity: i === TOP_INDEX ? 1 : 0,
          });
        });
        gsap.set(heroBubbles, { opacity: 0, scale: 0.6 });
        gsap.set(scBubbles, { opacity: 0, scale: 0.6 });
        gsap.set("[data-hero-copy]", { opacity: 0, y: 20 });
        gsap.set("[data-hero-cta]", { opacity: 0, y: 16 });
        gsap.set("[data-sc-layer]", { opacity: 0, y: 24 });

        // The three menu cards start perfectly stacked at the centre — fully
        // opaque, overlapping into what looks like ONE card. The siblings hide
        // behind the middle one, ready to slide out. The whole layer stays
        // hidden until the hero card has gathered into the same spot.
        gsap.set(menuLayer, { autoAlpha: 0 });
        gsap.set(menuAnchor, { scale: menuScale, transformOrigin: "50% 50%" });
        menuCards.forEach((card, i) => {
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0,
            width: MENU_CARD_W,
            height: MENU_CARD_H,
            rotate: 0,
            scale: 1,
            opacity: 1,
            zIndex: i === MENU_CENTER ? 10 : 5 - i,
          });
        });
        gsap.set(menuHeading, { opacity: 0, y: 18 });
        gsap.set(menuCta, { opacity: 0, y: 14 });
        const menuTags = gsap.utils.toArray<HTMLElement>("[data-menu-tag]");
        gsap.set(menuTags, { opacity: 0, y: 10, scale: 0.9 });

        let scene: gsap.core.Timeline | null = null;

        const intro = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: buildScene,
        });

        intro.fromTo(
          stack,
          {
            y: 260,
            rotationY: -155,
            rotationZ: -6,
            opacity: 0,
            transformPerspective: 1200,
            transformOrigin: "50% 50%",
          },
          { y: 0, rotationY: 0, rotationZ: 0, opacity: 1, duration: 1.15 },
          0
        );
        intro.fromTo(
          "[data-hero-word]",
          { color: "rgba(26,18,24,0.13)", y: 14 },
          {
            color: "rgba(26,18,24,1)",
            y: 0,
            duration: 0.55,
            stagger: 0.09,
            ease: "power2.out",
          },
          0.15
        );
        cards.forEach((card, i) => {
          intro.to(
            card,
            {
              x: FAN[i].x * fanScale,
              y: FAN[i].y * fanScale,
              rotate: FAN[i].rot,
              opacity: 1,
              duration: 0.75,
            },
            0.95 + i * 0.05
          );
        });
        intro.to(
          heroBubbles,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.12,
            ease: "back.out(1.8)",
          },
          1.85
        );
        intro.to("[data-hero-copy]", { opacity: 1, y: 0, duration: 0.6 }, 1.7);
        intro.to("[data-hero-cta]", { opacity: 1, y: 0, duration: 0.6 }, 1.85);

        heroBubbles.forEach((b, i) => {
          gsap.to(b, {
            y: i % 2 === 0 ? -8 : 8,
            duration: 2.4 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 2.3,
          });
        });

        function buildScene() {
          scene = gsap.timeline({
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "+=480%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          cards.forEach((card, i) => {
            scene!.to(
              card,
              {
                x: 0,
                y: 0,
                rotate: 0,
                opacity: i === TOP_INDEX ? 1 : 0,
                ease: "power2.inOut",
                duration: 0.8,
              },
              0
            );
          });
          scene.to(heroBubbles, { opacity: 0, scale: 0.7, duration: 0.35 }, 0);
          scene.to(
            ["[data-hero-copy]", "[data-hero-cta]"],
            { opacity: 0, y: 16, duration: 0.35 },
            0
          );

          scene.to(
            "[data-hero-heading]",
            { opacity: 0, y: -30, duration: 0.4 },
            0.8
          );
          cards.forEach((card) => {
            scene!.to(
              card,
              {
                x: () => ox(),
                y: () => oy(),
                duration: 0.6,
                ease: "power2.inOut",
              },
              0.9
            );
          });
          scene.to("[data-sc-layer]", { opacity: 1, y: 0, duration: 0.5 }, 1.05);

          scWords.forEach((w, i) => {
            const accent = w.dataset.accent === "true";
            scene!.fromTo(
              w,
              {
                color: accent
                  ? "rgba(107,45,74,0.16)"
                  : "rgba(26,18,24,0.12)",
              },
              {
                color: accent ? BRAND : "#111",
                duration: 0.35,
                ease: "none",
              },
              1.1 + i * 0.05
            );
          });

          cards.forEach((card, i) => {
            scene!.to(
              card,
              {
                x: () => ox() + CASCADE[i].x * casScale,
                y: () => oy() + CASCADE[i].y * casScale,
                rotate: CASCADE[i].rot,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
              },
              1.7 + i * 0.05
            );
          });
          scene.to("[data-sc-copy]", { opacity: 1, y: 0, duration: 0.5 }, 1.9);
          scene.to(
            scBubbles,
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              stagger: 0.12,
              ease: "back.out(1.8)",
            },
            2.15
          );

          // Finale: the cascade gathers back into ONE card, dead-centre, at the
          // exact size/position of the menu cards. That very card then opens
          // into three — the two siblings slide straight out from behind it.
          scene.to(scBubbles, { opacity: 0, scale: 0.7, duration: 0.35 }, 2.75);
          scene.to("[data-sc-layer]", { opacity: 0, y: -24, duration: 0.4 }, 2.8);
          cards.forEach((card, i) => {
            scene!.to(
              card,
              {
                x: 0,
                y: () => (isMobile ? 0 : -window.innerHeight * 0.1),
                rotate: 0,
                scale: 1,
                opacity: i === TOP_INDEX ? 1 : 0,
                duration: 0.6,
                ease: "power2.inOut",
              },
              2.85
            );
          });

          // Seamless hand-off: the menu cards are identical to the hero card and
          // sit at the same spot, so revealing them and hiding the hero stack is
          // invisible — it's the same card.
          scene.set(menuLayer, { autoAlpha: 1 }, 3.3);
          scene.to(cards, { opacity: 0, duration: 0.2 }, 3.3);
          scene.to(menuHeading, { opacity: 1, y: 0, duration: 0.4 }, 3.35);

          // Split, grow width/height, and open gaps — then tags appear.
          scene.to(
            menuAnchor,
            { scale: 1, duration: 0.75, ease: "power3.out" },
            3.5
          );
          menuCards.forEach((card, i) => {
            const pos = menuFinalPos(i);
            scene!.to(
              card,
              {
                x: pos.x,
                y: pos.y,
                width: finalW,
                height: finalH,
                duration: 0.75,
                ease: "back.out(1.35)",
              },
              3.5 + Math.abs(i - MENU_CENTER) * 0.06
            );
          });
          scene.to(
            menuTags,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.45,
              ease: "back.out(2)",
              stagger: 0.1,
            },
            4.2
          );
          scene.to(menuCta, { opacity: 1, y: 0, duration: 0.4 }, 4.55);

          ScrollTrigger.refresh();
        }

        return () => {
          scene?.scrollTrigger?.kill();
          scene?.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      data-hero
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div
        data-hero-heading
        className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col items-center px-5 pt-[170px] text-center sm:px-6 sm:pt-[104px] md:pt-[112px]"
      >
        <h1 className="font-heading max-w-[900px] text-[40px] font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[clamp(36px,6.5vw,72px)]">
          {["Shally", "Pastries"].map((word, i) => (
            <span
              key={`${word}-${i}`}
              data-hero-word
              className="mr-[0.22em] inline-block"
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          data-hero-copy
          className="mt-2.5 max-w-[280px] font-body text-[14px] leading-relaxed text-muted sm:mt-4 sm:max-w-md sm:text-[15px]"
        >
          Cakes, pastries, training, deliveries, and the business behind them.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[68%] z-20 flex flex-col items-center px-5 text-center sm:top-[78%] sm:px-6 md:top-[81%]">
        <div
          data-hero-cta
          className="pointer-events-auto flex flex-col items-center"
        >
          <p className="mb-4 max-w-[280px] font-body text-[14px] leading-relaxed text-muted sm:hidden">
            Order pastries, apply for training, book a bike delivery, or explore
            investment opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:mt-5 sm:gap-3 md:mt-6 md:gap-4">
            <a
              href="/shop"
              className="rounded-full bg-foreground px-5 py-2.5 font-body text-[14px] font-semibold text-background transition-opacity hover:opacity-85 sm:px-6 sm:py-3 sm:text-[14px] md:px-7 md:py-3.5 md:text-[15px]"
            >
              Shop now
            </a>
            <a
              href="#businesses"
              className="rounded-full px-4 py-2.5 font-body text-[14px] font-medium text-foreground transition-colors hover:bg-hover sm:px-5 sm:py-3 sm:text-[14px] md:py-3.5 md:text-[15px]"
            >
              See what we do
            </a>
          </div>
        </div>
      </div>

      <div
        data-sc-layer
        className="pointer-events-none absolute inset-0 z-20 px-6 pt-[80px] md:px-16 md:pt-[100px]"
      >
        <p className="mb-3 font-body text-[11px] font-semibold tracking-[3px] text-muted-light uppercase">
          Meet the Shally businesses
        </p>
        <h2 className="font-heading max-w-[560px] text-[clamp(30px,5.6vw,58px)] font-extrabold leading-[1.05] tracking-[-0.03em]">
          {SC_HEADING.map((w, i) => (
            <span key={`${w.t}-${i}`}>
              <span
                data-sc-word
                data-accent={"accent" in w && w.accent ? "true" : "false"}
              >
                {w.t}
              </span>
              {w.br ? <br /> : " "}
            </span>
          ))}
        </h2>

        <div data-sc-copy className="pointer-events-auto mt-6 max-w-[320px] md:mt-8">
          <p className="font-body text-[14px] leading-[1.65] text-muted">
            Shally Pastries, Shally Pastries Training, Shally Logistics, and
            Shally Investments each have a clear service and a page of their own.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-7">
            <a
              href="/trainings"
              className="rounded-full bg-foreground px-6 py-3 font-body text-[14px] font-semibold text-background transition-opacity hover:opacity-85"
            >
              See trainings
            </a>
            <a
              href="/logistics"
              className="rounded-full bg-hover px-5 py-3 font-body text-[14px] font-medium text-foreground transition-colors hover:opacity-80"
            >
              Logistics
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10">
        <div
          data-stack
          className="absolute top-[48%] left-1/2 h-0 w-0 will-change-transform sm:top-[56%] md:top-[60%]"
        >
          {CARD_IMAGES.map((src, i) => (
            <div
              key={src}
              data-card
              className="absolute top-0 left-0 h-[152px] w-[134px] overflow-hidden rounded-[16px] shadow-[0_24px_60px_rgba(0,0,0,0.22)] will-change-transform sm:h-[184px] sm:w-[162px] lg:h-[220px] lg:w-[192px]"
              style={{ zIndex: i }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div
          className="absolute top-[60%] left-1/2 hidden sm:block"
          style={{ transform: "translate(-235px, -150px)" }}
        >
          <div
            data-hero-bubble
            className="relative rounded-full bg-[#2F5D50] px-5 py-2 font-body text-[15px] font-semibold text-white"
          >
            Fresh cakes
            <span
              className="absolute bottom-[-8px] left-5 block h-0 w-0"
              style={{
                borderLeft: "8px solid transparent",
                borderRight: "4px solid transparent",
                borderTop: "10px solid #2F5D50",
              }}
            />
          </div>
        </div>
        <div
          className="absolute top-[60%] left-1/2 hidden sm:block"
          style={{ transform: "translate(180px, -165px)" }}
        >
          <div
            data-hero-bubble
            className="relative rounded-full bg-[#6B2D4A] px-5 py-2 font-body text-[15px] font-semibold text-white"
          >
            Meat pies
            <span
              className="absolute right-5 bottom-[-8px] block h-0 w-0"
              style={{
                borderLeft: "4px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "10px solid #6B2D4A",
              }}
            />
          </div>
        </div>

        <div className="absolute top-[76%] left-1/2 hidden sm:block md:top-[68%] md:left-[60%]">
          <div
            className="absolute top-0 left-0"
            style={{ transform: "translate(-215px, -195px)" }}
          >
            <div
              data-sc-bubble
              className="relative rounded-full bg-[#C47A9A] px-5 py-2 font-body text-[15px] font-semibold text-white"
            >
              Events
              <span
                className="absolute bottom-[-8px] left-6 block h-0 w-0"
                style={{
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "10px solid #C47A9A",
                }}
              />
            </div>
          </div>
          <div
            className="absolute top-0 left-0"
            style={{ transform: "translate(140px, -60px)" }}
          >
            <div
              data-sc-bubble
              className="relative rounded-full bg-[#111] px-5 py-2 font-body text-[15px] font-semibold text-white"
            >
              Classes
              <span
                className="absolute bottom-[-8px] left-6 block h-0 w-0"
                style={{
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "10px solid #111",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu reveal — same pinned timeline. The three cards are identical to
          the hero card, so the single card simply splits into three. */}
      <div data-menu-layer className="pointer-events-none absolute inset-0 z-30">
        <div
          data-menu-heading
          className="absolute inset-x-0 top-[7%] px-5 text-center sm:top-[10%] sm:px-6"
        >
          <h2 className="font-heading text-[clamp(24px,6.5vw,48px)] font-extrabold tracking-[-0.03em] text-foreground">
            Favourites from the oven
          </h2>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pt-6 sm:pt-0">
          <div data-menu-anchor className="relative h-0 w-0">
            {MENU_IMAGES.map((item, i) => (
              <div
                key={i}
                data-menu-card
                className="absolute top-0 left-0 w-[192px] overflow-hidden rounded-[16px] shadow-[0_24px_60px_rgba(0,0,0,0.22)] will-change-transform sm:rounded-[18px]"
                style={{ height: MENU_CARD_H }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <span
                  data-menu-tag
                  className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3.5 py-1.5 font-heading text-[12px] font-semibold text-[#111] shadow-[0_6px_18px_rgba(0,0,0,0.25)] backdrop-blur sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:text-[13px]"
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          data-menu-cta
          className="pointer-events-auto absolute inset-x-0 bottom-[5%] flex justify-center px-5 sm:bottom-[12%] sm:px-0 md:bottom-[14%]"
        >
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2.5 rounded-full bg-foreground py-3 pr-3 pl-6 font-heading text-[14px] font-semibold text-background shadow-[0_14px_34px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.4)] sm:py-3.5 sm:pr-3.5 sm:pl-7 sm:text-[15px]"
          >
            Order online
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-white/30">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
