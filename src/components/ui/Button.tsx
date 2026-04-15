"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "filled",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer font-[family-name:var(--font-heading)]";

  const variantClasses =
    variant === "filled"
      ? "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(255,77,0,0.3)]"
      : "border border-white/20 text-white hover:border-white/50 hover:bg-white/5";

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  const inner = (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
      {variant === "filled" && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="ml-1"
        >
          <path
            d="M1 7H13M13 7L7 1M13 7L7 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.span>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }

  return inner;
}
