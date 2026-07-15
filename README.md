# Pallet Ross — Scroll-Driven Landing Page

High-end interactive landing page built from the Awsmd / QClay “Pallet Ross” reference video.

## Stack

- **Next.js** (App Router) + React
- **Tailwind CSS** v4
- **GSAP** + ScrollTrigger (pinned hero, scrubbed card fan → stack → cascade)
- **Lenis** smooth scrolling (wired at root layout)

## Run

```bash
cd pallet-ross
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Architecture

| Component | Role |
|---|---|
| `SmoothScrollWrapper` | Lenis + GSAP ticker sync |
| `Navbar` | Fixed brand nav |
| `ScrollCards` | Intro choreography + scroll-linked fan/stack/cascade + floating `@handles` |
| `Hero` | Split-word headline + CTAs |
| `ECommerce` | Section 2 copy (cascade anchors on the right) |
| `ClassSection` | Autoplay banner + Watch CTA |
| `Marquee` | Infinite “Trusted by the best” logo belt |
| `Vision` / `BentoGrid` | Asymmetric grid with hover lift |

Artwork assets live in `public/card-*.png` and `public/banner-*.png`.
