import {
  ArrowUpRight,
  GlobeHemisphereWest,
  InstagramLogo,
  LinkSimple,
  MusicNotes,
} from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import { AnimatedIcon } from "@/components/motion/animated-icon";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { visibleSocials } from "@/content/candidate";
import type { SocialNetwork } from "@/types/campaign";

const icons: Record<SocialNetwork, ReactNode> = {
  instagram: <InstagramLogo size={28} weight="bold" />,
  linktree: <LinkSimple size={28} weight="bold" />,
  website: <GlobeHemisphereWest size={28} weight="bold" />,
  playlist: <MusicNotes size={28} weight="bold" />,
  whatsapp: <LinkSimple size={28} weight="bold" />,
};

const cardStyles = [
  "md:row-span-2 bg-[#071a62] text-[#f5f7fb] border-[#071a62] min-h-64 md:min-h-full",
  "bg-surface text-ink",
  "bg-surface-muted text-ink",
  "md:col-span-2 bg-surface text-ink",
] as const;

export function OfficialLinks() {
  return (
    <section id="links-oficiais" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Um só lugar para acompanhar."
            description="Acesse somente canais confirmados e publicados pela equipe de Paulinho Mendonça."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
          {visibleSocials.map((social, index) => (
            <Reveal
              key={social.network}
              delay={index * 0.06}
              className={index === 0 ? "md:row-span-2" : undefined}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full min-h-44 flex-col justify-between rounded-[var(--radius-card)] border border-line p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent focus-visible:border-accent ${cardStyles[index]}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <AnimatedIcon className="text-accent">
                    {icons[social.network]}
                  </AnimatedIcon>
                  <ArrowUpRight
                    size={22}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.035em]">
                    {social.label}
                  </h3>
                  <p
                    className={`mt-2 max-w-[34ch] text-sm leading-6 ${index === 0 ? "text-[#f5f7fb]/76" : "text-ink-muted"}`}
                  >
                    {social.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
