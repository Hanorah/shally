import PageShell from "@/components/PageShell";
import InvestmentsView from "@/components/investments/InvestmentsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shally Investments — Opportunities & Partnerships",
  description:
    "Explore investment opportunities, business proposals, and partnerships with Shally Investments.",
};

export default function InvestmentsPage() {
  return (
    <PageShell>
      <InvestmentsView />
    </PageShell>
  );
}
