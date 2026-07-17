import BlurBlobs from "@/components/BlurBlobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative min-h-full bg-background ${className}`}>
      <BlurBlobs />
      <Navbar />
      <main className="relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
