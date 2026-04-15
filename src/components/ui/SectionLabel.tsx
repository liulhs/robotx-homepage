"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block text-xs font-medium tracking-[0.25em] uppercase text-accent font-[family-name:var(--font-heading)] ${className}`}
    >
      [ {children} ]
    </motion.span>
  );
}
