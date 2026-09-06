"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const shouldReduceMotion = useReducedMotion();

  if (as === "li") {
    return (
      <motion.li
        className={className}
        initial={shouldReduceMotion ? undefined : variants.hidden}
        whileInView={shouldReduceMotion ? undefined : variants.show}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ...transition, delay }}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? undefined : variants.hidden}
      whileInView={shouldReduceMotion ? undefined : variants.show}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
