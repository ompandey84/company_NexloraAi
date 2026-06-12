"use client";

import { motion } from "framer-motion";

/**
 * Animated background gradient blobs.
 * Slow, organic movement. Very low opacity for professional subtlety.
 */
export default function FloatingBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Blob 1 — Purple, top-left area */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          top: "5%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 60, -30, 40, 0],
          y: [0, -40, 30, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 — Blue, bottom-right area */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          bottom: "10%",
          right: "-5%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -50, 30, -40, 0],
          y: [0, 30, -50, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 — Indigo, center area */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          top: "40%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, -30, 40, -10, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
