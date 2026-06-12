"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export default function AnimatedCounter({
  value,
  duration = 2,
  suffix = "",
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [springValue, inView, value]);

  const display = useTransform(springValue, (current) => 
    Math.round(current).toString() + suffix
  );

  return <motion.span ref={ref}>{display}</motion.span>;
}
