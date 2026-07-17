import PageShell from "@/components/PageShell";
import ContactView from "@/components/contact/ContactView";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact — ${SITE.name}`,
  description: `Call or WhatsApp ${SITE.phone} for pastry orders, trainings, logistics quotes, and investment enquiries.`,
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactView />
    </PageShell>
  );
}
