"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { candidate } from "@/content/candidate";

const photos = [
  { src: candidate.images.hero, alt: "Paulinho Mendonça em fotografia da campanha" },
  { src: candidate.images.heart, alt: "Paulinho Mendonça formando um coração com as mãos" },
  { src: candidate.images.journey, alt: "Paulinho Mendonça em retrato de corpo inteiro da campanha" },
];

export function CampaignGallery() {
  const section = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  const firstY = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const lastY = useTransform(scrollYProgress, [0, 1], [-32, 32]);

  return (
    <section ref={section} className="overflow-hidden px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-[0.98] font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
            Paulinho de perto.
          </h2>
          <p className="mt-5 max-w-[38ch] text-base leading-7 text-ink-muted sm:text-lg">
            Fotografias produzidas para apresentar a presença e a identidade da campanha.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-12 items-center gap-3 sm:gap-5 md:mt-16">
          {photos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              className={
                index === 0
                  ? "col-span-5 self-start md:col-span-4"
                  : index === 1
                    ? "col-span-7 mt-20 md:col-span-5 md:mt-28"
                    : "col-span-8 col-start-3 -mt-8 md:col-span-3 md:col-start-auto md:mt-0"
              }
              style={
                reduceMotion
                  ? undefined
                  : index === 0
                    ? { y: firstY }
                    : index === 2
                      ? { y: lastY }
                      : undefined
              }
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-surface-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 62vw, 34vw"
                  className="object-cover object-[center_14%] transition-transform duration-700 ease-out hover:scale-[1.025]"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
