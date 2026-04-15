"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface RevealOnScrollProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
