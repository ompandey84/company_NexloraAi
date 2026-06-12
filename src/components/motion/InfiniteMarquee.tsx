"use client";

import { motion } from "framer-motion";

export default function InfiniteMarquee({
  items,
  speed = 40,
}: {
  items: React.ReactNode[];
  speed?: number;
}) {
  return (
    <div className="relative flex w-full overflow-hidden bg-transparent py-4 group">
      {/* Left/Right Fade Gradients */}
      <div className="absolute left-0 top-0 z-10 h-full w-[150px] bg-gradient-to-r from-[#050505] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-[150px] bg-gradient-to-l from-[#050505] to-transparent" />

      <motion.div
        className="flex whitespace-nowrap min-w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Render items twice to create the infinite loop effect */}
        <div className="flex gap-16 px-8 items-center">
          {items.map((item, i) => (
            <div key={`first-${i}`} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-16 px-8 items-center">
          {items.map((item, i) => (
            <div key={`second-${i}`} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
