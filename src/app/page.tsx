import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import OverviewSection from "@/components/sections/OverviewSection";
import BodyAgnosticSection from "@/components/sections/BodyAgnosticSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <BodyAgnosticSection />
        <PartnersSection />
      </main>
      <FooterSection />
    </>
  );
}
