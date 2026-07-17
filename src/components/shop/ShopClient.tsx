"use client";

import { CartProvider } from "@/components/shop/CartProvider";
import CartDrawer from "@/components/shop/CartDrawer";
import ShopView from "@/components/shop/ShopView";

export default function ShopClient() {
  return (
    <CartProvider>
      <ShopView />
      <CartDrawer />
    </CartProvider>
  );
}
