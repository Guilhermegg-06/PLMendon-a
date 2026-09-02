import { Reveal } from "@/components/motion/reveal";
import { ContentCarousel } from "@/components/sections/content-carousel";
import { SectionHeading } from "@/components/sections/section-heading";
import { candidate } from "@/content/candidate";

export function FeaturedContentSection() {
  return (
    <section id="conteudos" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            title="Conteúdo para ir além."
            description="Notícias e materiais reunidos a partir dos canais indicados pela campanha."
          />
        </Reveal>
        <Reveal delay={0.08} amount={0.08}>
          <ContentCarousel items={candidate.featuredContent} />
        </Reveal>
      </div>
    </section>
  );
}
