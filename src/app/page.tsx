import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { About } from "@/components/sections/about";
import { FeaturedContentSection } from "@/components/sections/featured-content";
import { FinalCta } from "@/components/sections/final-cta";
import { FocusAreas } from "@/components/sections/focus-areas";
import { Hero } from "@/components/sections/hero";
import { OfficialLinks } from "@/components/sections/official-links";
import { Trajectory } from "@/components/sections/trajectory";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <OfficialLinks />
        <About />
        <FocusAreas />
        <FeaturedContentSection />
        <Trajectory />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
