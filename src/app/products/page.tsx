import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import PlatformSection from "@/components/sections/PlatformSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FooterSection from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Products | RobotX AI",
  description:
    "RobotX AI Embodied AI Mobile Manipulation Platform — develop AI algorithms and apps for robots.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <PlatformSection />
        <PartnersSection />
      </main>
      <FooterSection />
    </>
  );
}
