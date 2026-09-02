import { CheckCircle, Info } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { candidate } from "@/content/candidate";

export function About() {
  return (
    <section id="sobre" className="px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Quem é Paulinho."
            description={candidate.biography.short}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:items-stretch">
          <Reveal className="md:col-span-5">
            <div className="flex h-full min-h-80 flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-[#071e9c] p-7 text-white sm:p-9">
              <span className="font-display text-[clamp(4rem,10vw,7rem)] leading-none font-extrabold tracking-[-0.08em] text-[#00f0ff]">
                AL
              </span>
              <p className="max-w-[14ch] font-display text-3xl leading-[0.96] font-extrabold tracking-[-0.045em] sm:text-5xl">
                Técnica para planejar. Presença para cuidar.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-surface-muted p-6 sm:p-9">
              <div className="space-y-6">
                {candidate.biography.details.map((detail) => (
                  <div key={detail} className="flex gap-3">
                    <CheckCircle
                      className="mt-1 shrink-0 text-accent"
                      size={22}
                      weight="fill"
                      aria-hidden="true"
                    />
                    <p className="max-w-[62ch] text-sm leading-6 font-medium text-ink-muted sm:text-base sm:leading-7">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-9 flex max-w-2xl items-start gap-2 border-t border-line pt-5 text-sm leading-6 text-ink-muted">
                <Info
                  className="mt-0.5 shrink-0 text-accent"
                  size={19}
                  weight="bold"
                  aria-hidden="true"
                />
                Informações biográficas em revisão pela equipe da campanha antes da publicação definitiva.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
