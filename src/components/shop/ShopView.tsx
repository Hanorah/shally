"use client";

import { Plus, ShoppingBag } from "lucide-react";
import { MENU_CATEGORIES, SITE } from "@/lib/constants";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { useCart } from "@/components/shop/CartProvider";

export default function ShopView() {
  const { addItem, openCart, count } = useCart();

  return (
    <div className="px-5 pb-20 sm:px-6 sm:pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 font-heading text-[11px] font-medium tracking-[2.5px] text-muted-light uppercase">
                Shally Pastries
              </p>
              <h1 className="font-heading text-[clamp(36px,6vw,64px)] font-extrabold tracking-[-0.035em] text-foreground">
                Order online
              </h1>
              <p className="mt-4 max-w-xl font-body text-[16px] leading-relaxed text-muted">
                Pick what you want, add it to cart, and send the order to WhatsApp.
                We confirm availability, timing, and payment from there.
              </p>
            </div>
            <button
              type="button"
              onClick={openCart}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-hover"
            >
              <ShoppingBag size={16} />
              Cart{count > 0 ? ` (${count})` : ""}
            </button>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {MENU_CATEGORIES.map((category) => (
            <section key={category.name} id={category.slug} className="scroll-mt-28">
              <Reveal>
                <h2 className="font-heading text-[clamp(24px,3vw,32px)] font-extrabold tracking-[-0.02em] text-foreground">
                  {category.name}
                </h2>
                <p className="mt-2 max-w-lg font-body text-sm text-muted">
                  {category.description}
                </p>
              </Reveal>

              <RevealGroup
                className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                y={36}
                stagger={0.08}
              >
                {category.items.map((item) => (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[22px] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.1)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 font-heading text-[12px] font-semibold text-[#111] shadow-sm backdrop-blur">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <h3 className="font-heading text-[16px] font-semibold text-foreground">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() =>
                          addItem({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            priceValue: item.priceValue,
                            image: item.image,
                          })
                        }
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 font-heading text-[12px] font-semibold text-background transition-transform hover:scale-105"
                      >
                        <Plus size={14} />
                        Add
                      </button>
                    </div>
                  </article>
                ))}
              </RevealGroup>
            </section>
          ))}
        </div>

        <Reveal className="mt-16" y={30}>
          <div className="rounded-[28px] bg-brand-orange p-8 text-white sm:p-10">
            <h2 className="font-heading text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight">
              Prefer to talk it through?
            </h2>
            <p className="mt-3 max-w-lg font-body text-[15px] leading-relaxed text-white/85">
              Custom cakes and large trays are easiest over a quick call or
              WhatsApp — we&apos;ll shape the order with you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 font-heading text-sm font-semibold text-[#111] transition-transform hover:scale-105"
              >
                WhatsApp {SITE.phone}
              </a>
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-white/40 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
