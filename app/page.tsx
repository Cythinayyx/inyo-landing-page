import { BrandClose } from "@/components/BrandClose";
import { CasesSection } from "@/components/CasesSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PainPoints } from "@/components/PainPoints";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7fbff] text-[#152033]">
      <Navbar />
      <Hero />
      <PainPoints />
      <CasesSection />
      <BrandClose />
      <Footer />
    </main>
  );
}
