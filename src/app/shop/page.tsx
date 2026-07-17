import PageShell from "@/components/PageShell";
import ShopClient from "@/components/shop/ShopClient";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Shop — ${SITE.name}`,
  description:
    "Order cakes, meat pies, donuts, burgers, and event trays online from Shally Pastries. Cart checkout via WhatsApp.",
};

export default function ShopPage() {
  return (
    <PageShell>
      <ShopClient />
    </PageShell>
  );
}
