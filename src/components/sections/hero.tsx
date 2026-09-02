import Image from "next/image";
import { ArrowDownRight } from "@phosphor-icons/react/ssr";
import { CampaignWordmark } from "@/components/brand/campaign-wordmark";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { candidate } from "@/content/candidate";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#08206b] text-white"
    >
      <Image
        src={candidate.images.hero}
        alt="Paulinho Mendonça em fotografia principal da campanha"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-[center_18%]"
        data-testid="hero-image"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_32_107/0.08)_0%,rgb(8_32_107/0.15)_36%,rgb(3_14_63/0.9)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgb(0_240_255/0.2),transparent_28%),radial-gradient(circle_at_8%_86%,rgb(167_28_255/0.2),transparent_30%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-between px-4 pb-28 pt-5 sm:px-6 sm:pb-32 sm:pt-7 lg:px-8">
        <Reveal>
          <CampaignWordmark
            compact
            className="rounded-2xl border border-white/20 bg-[#08206b]/64 px-3 py-2 text-white shadow-[0_12px_34px_rgb(3_14_63/0.2)] backdrop-blur-xl"
          />
        </Reveal>

        <Reveal className="max-w-4xl" delay={0.08}>
          <h1 className="max-w-[8.8ch] font-display text-[clamp(3.8rem,14vw,8.5rem)] leading-[0.82] font-extrabold tracking-[-0.075em] text-balance [text-shadow:0_4px_30px_rgb(3_14_63/0.38)]">
            {candidate.slogan}
          </h1>
          <p className="mt-6 max-w-[28ch] text-base leading-6 font-bold text-white/84 sm:text-xl sm:leading-8">
            Trabalho, presença e compromisso com Alagoas.
          </p>
          <div className="mt-7">
            <Button asChild>
              <a href="#sobre">
                {candidate.ctas.learnMore}
                <ArrowDownRight size={18} weight="bold" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
