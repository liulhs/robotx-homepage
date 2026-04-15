"use client";

import { motion } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import Button from "@/components/ui/Button";
import { MEDIA } from "@/lib/media";
import { staggerContainer, heroWordReveal, fadeIn } from "@/lib/animations";

const HEADLINE = "One Brain. Any Robot. Any Task.";

export default function HeroSection() {
  const words = HEADLINE.split(" ");

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Video background */}
      <VideoBackground
        src={MEDIA.heroVideo}
        priority
        overlayClassName="bg-gradient-to-t from-bg-primary via-bg-primary/50 to-bg-primary/20"
      />

      {/* Subtle side gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 lg:px-16 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent font-[family-name:var(--font-heading)] font-medium mb-6"
        >
          True Physical AI is body-agnostic
        </motion.p>

        {/* Main heading - word stagger */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.95] tracking-tight mb-8 max-w-5xl"
          style={{ perspective: "800px" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={heroWordReveal}
              className="inline-block"
              style={{ transformOrigin: "bottom center" }}
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="text-base md:text-lg text-text-secondary max-w-2xl mb-10 leading-relaxed font-light"
        >
          Leading the frontier of Physical AI with deployments across Security,
          Firefighting, Industrial Automation, and Mobile Manipulation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="#solutions" variant="filled">
            Explore Solutions
          </Button>
          <Button href="#contact" variant="outlined">
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
