import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageProgress } from "@/components/motion/page-progress";
import { About } from "@/components/sections/about";
import { CampaignGallery } from "@/components/sections/campaign-gallery";
import { FeaturedContentSection } from "@/components/sections/featured-content";
import { FinalCta } from "@/components/sections/final-cta";
import { FocusAreas } from "@/components/sections/focus-areas";
import { Hero } from "@/components/sections/hero";
import { OfficialLinks } from "@/components/sections/official-links";
import { Trajectory } from "@/components/sections/trajectory";
import { TextLoopBand } from "@/components/sections/text-loop-band";

export default function HomePage() {
  return (
    <>
      <PageProgress />
      <SiteHeader />
      <main>
        <Hero />
        <TextLoopBand />
        <OfficialLinks />
        <About />
        <CampaignGallery />
        <FocusAreas />
        <FeaturedContentSection />
        <Trajectory />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
