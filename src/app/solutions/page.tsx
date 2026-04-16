import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import SolutionsSection from "@/components/sections/SolutionsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FooterSection from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Solutions | RobotX AI",
  description:
    "RobotX AI solutions for Security & Inspection, Firefighting & Rescue, and Industrial Automation.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <SolutionsSection />
        <PartnersSection />
      </main>
      <FooterSection />
    </>
  );
}
