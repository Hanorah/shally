import PageShell from "@/components/PageShell";
import WorkView from "@/components/work/WorkView";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Work — ${SITE.name}`,
  description:
    "Cakes, trays, pastries, and training moments from Shally Pastries.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <WorkView />
    </PageShell>
  );
}
