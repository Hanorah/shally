import PageShell from "@/components/PageShell";
import ContactView from "@/components/contact/ContactView";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${SITE.name}`,
  description: `Visit Shally's Pastries at ${SITE.address}. Call ${SITE.phone} to order cakes, pastries, and trays.`,
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactView />
    </PageShell>
  );
}
