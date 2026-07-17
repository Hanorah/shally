import PageShell from "@/components/PageShell";
import MenuView from "@/components/menu/MenuView";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Menu — ${SITE.name}`,
  description:
    "Browse custom cakes, meat pies, donuts, burgers, and event food trays from Shally Pastries.",
};

export default function MenuPage() {
  return (
    <PageShell>
      <MenuView />
    </PageShell>
  );
}
