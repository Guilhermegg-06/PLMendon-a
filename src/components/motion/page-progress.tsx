"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function PageProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
