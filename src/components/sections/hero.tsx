import { ArrowDown, InstagramLogo } from "@phosphor-icons/react/ssr";
import { AnimatedIcon } from "@/components/motion/animated-icon";
import { HeroVisual } from "@/components/motion/hero-visual";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { candidate } from "@/content/candidate";

export function Hero() {
  const instagram = candidate.socials.find(
    (social) => social.network === "instagram",
  );

  return (
    <section
      id="inicio"
      className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-6 px-4 py-5 sm:px-6 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:py-8 lg:min-h-[calc(100dvh-4.5rem)] lg:px-8"
    >
      <Reveal className="relative z-10 flex max-w-xl flex-col items-start py-3 md:py-10">
        <p className="font-display text-sm font-bold tracking-[-0.01em] text-accent sm:text-base">
          {candidate.publicName}
        </p>
        <h1 className="mt-4 max-w-[10ch] font-display text-[clamp(2.65rem,11vw,5rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-ink md:max-w-[9ch] md:text-[clamp(3.8rem,6.2vw,5.8rem)]">
          {candidate.slogan}
        </h1>
        <p className="mt-5 max-w-[34ch] text-base leading-7 text-ink-muted sm:text-lg">
          {candidate.role}.
        </p>
        <div className="mt-7 flex w-full flex-wrap gap-3 sm:w-auto">
          <Button asChild className="flex-1 sm:flex-none">
            <a href="#sobre">{candidate.ctas.learnMore}</a>
          </Button>
          {instagram?.url ? (
            <Button
              asChild
              variant="secondary"
              className="flex-1 sm:flex-none"
            >
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={19} weight="bold" />
                {candidate.ctas.social}
              </a>
            </Button>
          ) : null}
        </div>
      </Reveal>

      <HeroVisual
        src={candidate.images.hero}
        alt="Paulinho Mendonça em retrato oficial da campanha"
      />

      <a
        href="#links-oficiais"
        aria-label="Continuar para os links oficiais"
        className="absolute bottom-4 left-1/2 hidden size-11 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-[var(--shadow-soft)] backdrop-blur-md transition-colors hover:border-accent hover:text-accent md:flex"
      >
        <AnimatedIcon>
          <ArrowDown size={19} weight="bold" />
        </AnimatedIcon>
      </a>
    </section>
  );
}
