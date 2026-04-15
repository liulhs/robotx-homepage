"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MEDIA } from "@/lib/media";

export default function PlatformSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Video background with scale on scroll */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <VideoBackground
          src={MEDIA.platformVideo}
          overlayClassName="bg-gradient-to-r from-bg-primary/90 via-bg-primary/60 to-bg-primary/30"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-24 md:py-40"
      >
        <SectionLabel>Platform</SectionLabel>

        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-heading)] font-extrabold text-4xl md:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-tight mt-6 mb-8 max-w-3xl">
            Embodied AI
            <br />
            <span className="text-accent">Mobile Manipulation</span>
            <br />
            Platform
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10 font-light">
            Develop AI algorithms and applications for robotic mobility
            platforms across robotics. Create hybrid applications with
            RobotX&apos;s universal AI control layer for autonomous operation.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <Button href="#contact" variant="filled">
            Learn More
          </Button>
        </RevealOnScroll>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
