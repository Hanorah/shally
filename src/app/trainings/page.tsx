import PageShell from "@/components/PageShell";
import TrainingsView from "@/components/trainings/TrainingsView";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Trainings — ${SITE.name}`,
  description:
    "Pay to learn baking with Shally's Pastries. Starter, Pro, and Master packages in Benin City.",
};

export default function TrainingsPage() {
  return (
    <PageShell>
      <TrainingsView />
    </PageShell>
  );
}
