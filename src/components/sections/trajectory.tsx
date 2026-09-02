import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { candidate } from "@/content/candidate";

const positions = [
  "md:col-span-5",
  "md:col-span-3 md:mt-20",
  "md:col-span-4 md:mt-8",
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

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:items-start">
          {candidate.timeline.map((item, index) => (
            <Reveal
              key={item.title}
              delay={0.08 + index * 0.06}
              className={positions[index]}
            >
              <article className="h-full rounded-[var(--radius-card)] bg-surface-muted p-6 sm:p-8">
                <h3 className="font-display text-2xl leading-[0.98] font-extrabold tracking-[-0.045em] text-ink sm:text-4xl">
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
