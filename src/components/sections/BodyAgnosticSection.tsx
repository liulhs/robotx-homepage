"use client";

import { motion } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MEDIA } from "@/lib/media";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const CAPABILITIES = [
  {
    title: "Universal Control Layer",
    description:
      "A single AI brain that maps across different robotic bodies — from humanoids to quadrupeds to mobile platforms.",
  },
  {
    title: "Dynamic Adaptation",
    description:
      "Our models understand and adapt to unstructured, real-world environments in real time without pre-programmed instructions.",
  },
  {
    title: "Task Agnostic",
    description:
      "One architecture handles inspection, manipulation, navigation, and rescue — without task-specific engineering.",
  },
  {
    title: "Continuous Learning",
    description:
      "Deployed robots share learned behaviors across the fleet, accelerating capability improvements organization-wide.",
  },
];

export default function BodyAgnosticSection() {
  return (
    <section className="relative py-24 md:py-40 bg-bg-elevated overflow-hidden">
      {/* Subtle diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.03] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-8 md:px-16">
        <SectionLabel>Our Approach</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          {/* Left - heading and video */}
          <div>
            <RevealOnScroll>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl lg:text-[3.5rem] leading-tight tracking-tight mb-8">
                True Physical AI is{" "}
                <span className="relative">
                  <span className="text-accent">body-agnostic</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    fill="none"
                  >
                    <path
                      d="M0 3 Q50 0 100 3 T200 3"
                      stroke="#FF4D00"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                    />
                  </svg>
                </span>
              </h2>
            </RevealOnScroll>

            {/* Video container */}
            <RevealOnScroll delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <VideoBackground
                  src={MEDIA.bodyAgnosticVideo}
                  overlayClassName="bg-gradient-to-t from-bg-elevated/60 to-transparent"
                />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="text-sm text-text-secondary font-light">
                    AI algorithms work across all robotic form factors,
                    enabling seamless deployment across your entire fleet.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right - capability cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 lg:pt-20"
          >
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative p-6 rounded-xl border border-border bg-bg-card/50 hover:border-border-hover hover:bg-bg-card transition-all duration-500"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-xs font-mono text-text-muted">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
