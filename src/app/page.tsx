import BlurBlobs from "@/components/BlurBlobs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gateway from "@/components/Gateway";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import AmongUs from "@/components/AmongUs";
import Marketplace from "@/components/Marketplace";
import Membership from "@/components/Membership";
import LogisticsSection from "@/components/LogisticsSection";
import InvestmentsSection from "@/components/InvestmentsSection";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative bg-background">
      <BlurBlobs />
      <Navbar />

      <main>
        <Hero />
        <Gateway />
        <Marquee />
        <Story />
        <Marketplace />
        <Membership />
        <LogisticsSection />
        <InvestmentsSection />
        <AmongUs />
        <FeatureCards />
      </main>

      <Footer />
    </div>
  );
}
