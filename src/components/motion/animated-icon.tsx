"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type AnimatedIconProps = PropsWithChildren<{
  className?: string;
}>;

export function AnimatedIcon({ children, className }: AnimatedIconProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={cn("inline-flex shrink-0", className)}
      whileHover={reduceMotion ? undefined : { rotate: -5, scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.9 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      aria-hidden="true"
    >
      {children}
    </motion.span>
  );
}
