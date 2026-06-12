import type { Variants, Transition } from "framer-motion";

// ── Shared Easing ──
export const easings = {
  // Premium ease-out curve (matches Auronetics / Linear feel)
  smooth: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Soft spring-like
  gentle: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  // Snappy entrance
  snap: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

// ── Shared Transitions ──
export const transitions = {
  fast: { duration: 0.4, ease: easings.smooth } satisfies Transition,
  medium: { duration: 0.6, ease: easings.smooth } satisfies Transition,
  slow: { duration: 0.8, ease: easings.smooth } satisfies Transition,
  spring: { type: "spring", stiffness: 300, damping: 30 } satisfies Transition,
  springGentle: { type: "spring", stiffness: 200, damping: 25 } satisfies Transition,
};

// ── Directional Fade Variants ──
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// ── Scale Variants ──
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.smooth },
  },
};

// ── Stagger Containers ──
export const staggerContainer = (
  staggerDelay = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// ── Card Entrance (used inside stagger containers) ──
export const cardEntrance: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easings.smooth },
  },
};

// ── Hero-Specific ──
export const heroWord: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: easings.smooth },
  },
};

export const heroBadge: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.1, ease: easings.smooth },
  },
};

export const heroCta: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// ── Section Header ──
export const sectionHeader: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.smooth },
  },
};

// ── Hover Presets (for whileHover) ──
export const hoverLift = {
  y: -8,
  transition: { type: "spring", stiffness: 400, damping: 25 },
};

export const hoverScale = {
  scale: 1.03,
  transition: { type: "spring", stiffness: 400, damping: 25 },
};

export const hoverGlow = {
  boxShadow: "0 0 40px rgba(139, 92, 246, 0.15), 0 20px 60px rgba(0, 0, 0, 0.3)",
};

// ── Button Hover ──
export const buttonHover = {
  scale: 1.04,
  y: -2,
  transition: { type: "spring", stiffness: 400, damping: 20 },
};

export const buttonTap = {
  scale: 0.97,
};

// ── Viewport trigger settings ──
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};
