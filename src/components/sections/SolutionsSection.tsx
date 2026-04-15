"use client";

import { motion } from "framer-motion";
import VideoBackground from "@/components/ui/VideoBackground";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { MEDIA } from "@/lib/media";
import { SOLUTIONS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const SOLUTION_VIDEOS = [
  MEDIA.solutionVideo1,
  MEDIA.solutionVideo2,
  MEDIA.industrialVideo,
];

const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  flame: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
  factory: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    </svg>
  ),
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-24 md:py-40 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Our Focus</SectionLabel>

        <RevealOnScroll>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-3xl md:text-5xl lg:text-[3.5rem] leading-tight tracking-tight mt-6 mb-20 max-w-4xl">
            Robotic applications that create{" "}
            <span className="text-accent">tangible impact</span> in the real
            world.
          </h2>
        </RevealOnScroll>

        {/* Solution cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-8"
        >
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-bg-card hover:border-border-hover transition-all duration-500"
            >
              {/* Text content */}
              <div
                className={`relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-center ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                  {ICONS[solution.icon]}
                </div>

                <h3 className="font-[family-name:var(--font-heading)] font-bold text-2xl md:text-3xl mb-4 group-hover:text-accent transition-colors duration-300">
                  {solution.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed font-light max-w-md">
                  {solution.description}
                </p>

                {/* Learn more link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-accent hover:gap-3 transition-all duration-300 font-[family-name:var(--font-heading)] tracking-wider uppercase"
                >
                  Learn More
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M1 7H13M13 7L7 1M13 7L7 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Video */}
              <div
                className={`relative aspect-video lg:aspect-auto min-h-[300px] ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <VideoBackground
                  src={SOLUTION_VIDEOS[i]}
                  overlay={true}
                  overlayClassName={
                    i % 2 === 0
                      ? "bg-gradient-to-r from-bg-card/40 to-transparent"
                      : "bg-gradient-to-l from-bg-card/40 to-transparent"
                  }
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
