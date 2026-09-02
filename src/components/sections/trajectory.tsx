import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { candidate } from "@/content/candidate";

const positions = [
  "md:col-span-4 md:row-start-1",
  "md:col-start-10 md:col-span-3 md:row-start-1",
  "md:col-start-10 md:col-span-3 md:row-start-2",
] as const;

export function Trajectory() {
  return (
    <section id="trajetoria" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Uma trajetória construída no trabalho."
            description="Formação técnica, experiência em gestão e participação em projetos de impacto social no estado."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-12 md:grid-rows-2 md:gap-5">
          <Reveal className="order-first md:col-start-5 md:col-span-5 md:row-span-2">
            <div className="relative h-full min-h-[30rem] overflow-hidden rounded-[var(--radius-card)] bg-surface-muted">
              <Image
                src={candidate.images.journey}
                alt="Paulinho Mendonça em fotografia de corpo inteiro produzida para a campanha"
                fill
                sizes="(max-width: 767px) 100vw, 42vw"
                className="object-cover object-[center_12%]"
              />
            </div>
          </Reveal>

          {candidate.timeline.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.08 + index * 0.06}
              className={positions[index]}
            >
              <article className="h-full border-t border-line pt-5">
                <h3 className="font-display text-xl leading-tight font-semibold tracking-[-0.035em] text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
