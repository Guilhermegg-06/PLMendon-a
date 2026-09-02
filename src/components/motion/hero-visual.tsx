"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type HeroVisualProps = {
  src: string;
  alt: string;
};

export function HeroVisual({ src, alt }: HeroVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative h-[36svh] min-h-52 max-h-80 overflow-hidden rounded-[var(--radius-card)] bg-surface-muted sm:h-auto sm:min-h-96 sm:max-h-none md:min-h-[calc(100dvh-8rem)]"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 767px) 100vw, 52vw"
        className="object-cover object-[center_18%] md:object-[center_12%]"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#071a62]/20 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  );
}
