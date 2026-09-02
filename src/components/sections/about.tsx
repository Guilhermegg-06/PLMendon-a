import { CheckCircle, Info } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { candidate } from "@/content/candidate";

export function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-center lg:gap-16">
        <Reveal className="relative overflow-hidden rounded-[var(--radius-card)] bg-surface-muted">
          <div className="relative aspect-[4/5] sm:aspect-[5/6]">
            <Image
              src={candidate.images.heart}
              alt="Paulinho Mendonça forma um coração com as mãos durante ensaio de campanha"
              fill
              sizes="(max-width: 767px) 100vw, 44vw"
              className="object-cover object-[center_16%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            title="Experiência para cuidar de Alagoas."
            description={candidate.biography.short}
          />

          <div className="mt-8 space-y-5">
            {candidate.biography.details.map((detail) => (
              <div key={detail} className="flex gap-3">
                <CheckCircle
                  className="mt-1 shrink-0 text-accent"
                  size={21}
                  weight="fill"
                  aria-hidden="true"
                />
                <p className="max-w-[60ch] text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 flex max-w-xl items-start gap-2 rounded-[var(--radius-card)] bg-surface-muted p-4 text-sm leading-6 text-ink-muted">
            <Info
              className="mt-0.5 shrink-0 text-accent"
              size={19}
              weight="bold"
              aria-hidden="true"
            />
            Informações biográficas em revisão pela equipe da campanha antes da publicação definitiva.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
