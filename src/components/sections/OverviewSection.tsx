"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MEDIA } from "@/lib/media";
import { slideInRight } from "@/lib/animations";

export default function OverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 px-8 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <SectionLabel>Overview</SectionLabel>

            <RevealOnScroll>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl lg:text-[3.5rem] leading-tight tracking-tight mt-6 mb-8">
                Where <span className="text-accent">AI</span> Meets the{" "}
                <span className="text-accent">Real World</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 font-light">
                Most AI today exists only in digital systems. The physical world,
                however, is far more complex and unstructured. Bridging this
                gap&mdash;real-world environments with nuanced decision-making and
                adaptable control&mdash;is where AI can deliver transformative,
                measurable impact.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light">
                At RobotX AI, we&apos;re building systems that operate in
                unpredictable environments&mdash;learning, adapting, and executing
                tasks that once required human intuition. Our focus is on turning
                physical intelligence into real, measurable impact.
              </p>
            </RevealOnScroll>

            {/* Stats row */}
            <RevealOnScroll delay={0.45}>
              <div className="flex gap-12 mt-10 pt-10 border-t border-border">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-accent">
                    6+
                  </p>
                  <p className="text-xs uppercase tracking-widest text-text-muted mt-1">
                    Robot Types
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-accent">
                    4
                  </p>
                  <p className="text-xs uppercase tracking-widest text-text-muted mt-1">
                    Industries
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-accent">
                    24/7
                  </p>
                  <p className="text-xs uppercase tracking-widest text-text-muted mt-1">
                    Autonomous
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Image with parallax */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={MEDIA.overviewImage}
                  alt="RobotX AI robots in action"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
              </div>
              {/* Decorative accent line */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/20 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-accent/10 rounded-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
