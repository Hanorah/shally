import PageShell from "@/components/PageShell";
import TrainingsView from "@/components/trainings/TrainingsView";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Trainings — ${SITE.name}`,
  description:
    "Apply for practical pastry training at Shally Pastries, with accommodation options for longer programmes.",
};

export default function TrainingsPage() {
  return (
    <PageShell>
      <TrainingsView />
    </PageShell>
  );
}
