"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GradualBlur } from "@/components/motion/gradual-blur";

type HeroVisualProps = {
  src: string;
  alt: string;
};

export function HeroVisual({ src, alt }: HeroVisualProps) {
  const reduceMotion = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <motion.div
      ref={frame}
      className="relative h-[36svh] min-h-52 max-h-80 overflow-hidden rounded-[var(--radius-card)] bg-surface-muted sm:h-auto sm:min-h-96 sm:max-h-none md:min-h-[calc(100dvh-8rem)]"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute -inset-y-8 inset-x-0"
        style={reduceMotion ? undefined : { scale: imageScale, y: imageY }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 767px) 100vw, 52vw"
          className="object-cover object-[center_18%] md:object-[center_12%]"
        />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#071a62]/20 to-transparent"
        aria-hidden="true"
      />
      <GradualBlur strength={1.15} />
    </motion.div>
  );
}
