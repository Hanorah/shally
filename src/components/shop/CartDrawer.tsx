"use client";

import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import {
  buildWhatsAppOrderUrl,
  formatNaira,
  useCart,
} from "@/components/shop/CartProvider";

export default function CartDrawer() {
  const {
    items,
    count,
    total,
    isOpen,
    closeCart,
    setQty,
    removeItem,
  } = useCart();

  if (!isOpen) return null;

  const checkoutUrl = buildWhatsAppOrderUrl(SITE.whatsapp, items, total);

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close cart"
        className="absolute inset-0 bg-black/45 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <h2 className="font-heading text-lg font-bold text-foreground">
              Your cart ({count})
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={closeCart}
            className="rounded-full p-2 text-foreground hover:bg-hover"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center font-body text-sm text-muted">
              Your cart is empty. Add something delicious.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-2xl border border-border bg-surface p-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt=""
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-heading text-[14px] font-semibold text-foreground">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                        className="rounded-full p-1 text-muted hover:bg-hover hover:text-foreground"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="mt-0.5 font-body text-[12px] text-muted">
                      {item.price}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 rounded-full border border-border bg-background p-0.5">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-hover"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="min-w-[1.5rem] text-center font-heading text-[13px] font-semibold">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-hover"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-heading text-[13px] font-bold text-foreground">
                        {formatNaira(item.priceValue * item.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-5 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-body text-sm text-muted">Estimated total</span>
            <span className="font-heading text-lg font-extrabold text-foreground">
              {formatNaira(total)}
            </span>
          </div>
          <a
            href={items.length ? checkoutUrl : undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!items.length}
            className={`flex w-full items-center justify-center rounded-full px-6 py-3.5 font-heading text-[14px] font-semibold transition-transform ${
              items.length
                ? "bg-foreground text-background hover:scale-[1.02]"
                : "pointer-events-none bg-surface-muted text-muted"
            }`}
          >
            Checkout on WhatsApp
          </a>
          <p className="mt-3 text-center font-body text-[12px] text-muted-light">
            We&apos;ll confirm availability, timing, and payment on WhatsApp.
          </p>
        </div>
      </aside>
    </div>
  );
}
