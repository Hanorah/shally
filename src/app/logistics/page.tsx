import PageShell from "@/components/PageShell";
import LogisticsView from "@/components/logistics/LogisticsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shally Logistics — Bike Delivery Service",
  description:
    "Book Shally Logistics for same-day bike delivery, scheduled pickups, business orders, documents, parcels, and multi-stop runs.",
};

export default function LogisticsPage() {
  return (
    <PageShell>
      <LogisticsView />
    </PageShell>
  );
}
