"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface PageLoadAnimationProps {
  children: ReactNode;
}

/**
 * Wraps page content with an elegant fade-in entrance animation.
 * No loading screen — just a smooth opacity transition.
 */
export default function PageLoadAnimation({ children }: PageLoadAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
