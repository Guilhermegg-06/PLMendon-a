import {
  Buildings,
  ForkKnife,
  HandHeart,
  Heartbeat,
  MapTrifold,
  Wrench,
} from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { candidate } from "@/content/candidate";

const icons: ReactNode[] = [
  <ForkKnife key="food" size={26} weight="bold" />,
  <Wrench key="infrastructure" size={26} weight="bold" />,
  <Buildings key="management" size={26} weight="bold" />,
  <MapTrifold key="region" size={26} weight="bold" />,
  <Heartbeat key="health" size={26} weight="bold" />,
  <HandHeart key="opportunities" size={26} weight="bold" />,
];

const cells = [
  "md:col-span-7 md:row-span-2 bg-[#071a62] text-white",
  "md:col-span-5 bg-accent text-[#05150b]",
  "md:col-span-5 bg-surface text-ink",
  "md:col-span-4 bg-surface-muted text-ink",
  "md:col-span-4 bg-surface text-ink",
  "md:col-span-4 bg-[#071a62] text-white",
] as const;

export function FocusAreas() {
  return (
    <section id="atuacao" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Áreas de atuação."
            description="Eixos preliminares para revisão da campanha. Não representam um programa de propostas aprovado."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(12rem,auto)]">
          {candidate.focusAreas.map((area, index) => {
            const isDark = index === 0 || index === 5;
            return (
              <Reveal
                key={area.title}
                delay={index * 0.05}
                className={cells[index]}
              >
                <article
                  className={`spotlight-card relative flex h-full min-h-52 flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border p-6 md:p-7 ${
                    index === 1
                      ? "border-accent"
                      : isDark
                        ? "border-[#071a62]"
                        : "border-line"
                  }`}
                >
                  <span
                    className={isDark ? "text-accent" : "text-accent-strong"}
                    aria-hidden="true"
                  >
                    {icons[index]}
                  </span>
                  <div className="relative mt-10">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.035em]">
                      {area.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[36ch] text-sm leading-6 ${
                        isDark ? "text-white/76" : index === 1 ? "text-[#062011]/76" : "text-ink-muted"
                      }`}
                    >
                      {area.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
