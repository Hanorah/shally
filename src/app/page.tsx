import BlurBlobs from "@/components/BlurBlobs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gateway from "@/components/Gateway";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Vision from "@/components/Vision";
import AmongUs from "@/components/AmongUs";
import Marketplace from "@/components/Marketplace";
import Membership from "@/components/Membership";
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
        <Vision />
        <AmongUs />
        <Marketplace />
        <Membership />
        <FeatureCards />
      </main>

      <Footer />
    </div>
  );
}
