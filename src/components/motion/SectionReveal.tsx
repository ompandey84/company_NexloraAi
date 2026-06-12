"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { easings, viewportOnce } from "@/lib/animationVariants";

interface SectionRevealProps {
  children: ReactNode;
  /** Direction the content comes from */
  direction?: "up" | "down" | "left" | "right";
  /** Delay before animation starts */
  delay?: number;
  /** Animation duration */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
}: SectionRevealProps) {
  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease: easings.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
