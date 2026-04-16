"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PartnersSection from "@/components/sections/PartnersSection";
import FooterSection from "@/components/sections/FooterSection";
import { MEDIA } from "@/lib/media";
import { COMPANY } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const MILESTONES = [
  {
    year: "2020",
    title: "Founded",
    description:
      "RobotX AI founded in Irvine, California with a vision to build body-agnostic physical AI systems.",
  },
  {
    year: "2022",
    title: "First Deployments",
    description:
      "Deployed initial security and inspection robots in real-world industrial environments.",
  },
  {
    year: "2024",
    title: "Platform Launch",
    description:
      "Launched the Embodied AI Mobile Manipulation Platform, enabling universal robotic control.",
  },
  {
    year: "2025",
    title: "Scaling Operations",
    description:
      "Expanded across firefighting, industrial automation, and partnered with leading institutions worldwide.",
  },
];

const VALUES = [
  {
    title: "Real-World Impact",
    description:
      "We build technology that works outside the lab. Every system we deploy is designed for unpredictable, real-world conditions.",
  },
  {
    title: "Body-Agnostic Intelligence",
    description:
      "One brain that adapts to any robot. Our universal control layer eliminates the need for robot-specific engineering.",
  },
  {
    title: "Safety First",
    description:
      "From firefighting to industrial automation, safety is embedded in every layer of our AI systems.",
  },
  {
    title: "Continuous Innovation",
    description:
      "Our fleet shares learned behaviors, accelerating capability improvements across every deployed robot.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
            <img
              src={MEDIA.platformImage}
              alt="RobotX AI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-bg-primary/70" />
          </motion.div>
          <div className="relative z-10 text-center px-8">
            <SectionLabel>About Us</SectionLabel>
            <h1 className="font-[family-name:var(--font-heading)] font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight mt-4">
              Pioneering{" "}
              <span className="text-accent">Physical AI</span>
            </h1>
            <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto font-light">
              Built by veterans from leading AI and robotics institutions,{" "}
              {COMPANY.name} is redefining what robots can do in the real world.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 md:py-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl tracking-tight mb-8">
                Our Mission
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
                To create a universal AI control layer that enables any robot to
                operate autonomously across any task in any environment&mdash;bringing
                deeper automation and long-term value to industries worldwide.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 px-8 md:px-16 bg-bg-elevated">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>Our Values</SectionLabel>
              <RevealOnScroll>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl tracking-tight mt-6">
                  What Drives Us
                </h2>
              </RevealOnScroll>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {VALUES.map((value, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-8 rounded-2xl border border-border bg-bg-card/50 hover:border-border-hover transition-all duration-500"
                >
                  <span className="text-xs font-mono text-text-muted">
                    0{i + 1}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl mt-3 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 md:py-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SectionLabel>Our Journey</SectionLabel>
              <RevealOnScroll>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl tracking-tight mt-6">
                  Milestones
                </h2>
              </RevealOnScroll>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-12 md:space-y-0"
              >
                {MILESTONES.map((milestone, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`relative md:grid md:grid-cols-2 md:gap-16 md:py-8 ${
                      i % 2 === 0 ? "" : "md:direction-rtl"
                    }`}
                  >
                    <div
                      className={`${
                        i % 2 === 0
                          ? "md:text-right md:pr-16"
                          : "md:text-left md:pl-16 md:col-start-2"
                      }`}
                      style={{ direction: "ltr" }}
                    >
                      <span className="font-[family-name:var(--font-heading)] text-accent font-bold text-2xl">
                        {milestone.year}
                      </span>
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl mt-2 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                    {/* Dot on timeline */}
                    <div className="hidden md:block absolute left-1/2 top-8 w-3 h-3 rounded-full bg-accent -translate-x-1/2" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-24 md:py-32 px-8 md:px-16 bg-bg-elevated">
          <div className="max-w-6xl mx-auto text-center">
            <SectionLabel>Headquarters</SectionLabel>
            <RevealOnScroll>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl tracking-tight mt-6 mb-4">
                Irvine, California
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="text-text-secondary text-lg font-light">
                {COMPANY.address}
              </p>
            </RevealOnScroll>
          </div>
        </section>

        <PartnersSection />
      </main>
      <FooterSection />
    </>
  );
}
