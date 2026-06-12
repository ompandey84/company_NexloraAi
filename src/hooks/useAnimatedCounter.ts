"use client";

import { useEffect, useRef, useState } from "react";
import {
  useMotionValue,
  useSpring,
  useInView,
} from "framer-motion";

interface UseAnimatedCounterOptions {
  /** The target number to count to */
  target: number;
  /** Duration in seconds */
  duration?: number;
  /** Only trigger once */
  once?: boolean;
}

/**
 * Animates a number from 0 → target when the returned ref enters the viewport.
 * Returns { ref, value } where value is the current animated integer.
 */
export function useAnimatedCounter({
  target,
  duration = 2,
  once = true,
}: UseAnimatedCounterOptions) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const [displayValue, setDisplayValue] = useState(0);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 50,
    damping: 20,
    duration: duration,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest: number) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return { ref, value: displayValue, isInView };
}
