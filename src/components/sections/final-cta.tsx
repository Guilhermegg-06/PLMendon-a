import {
  ArrowUpRight,
  HeartStraight,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import { AnimatedIcon } from "@/components/motion/animated-icon";
import { MetallicPaint } from "@/components/motion/metallic-paint";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { candidate } from "@/content/candidate";

export function FinalCta() {
  const instagram = candidate.socials.find(
    (social) => social.network === "instagram",
  );
  const [conversationLead, ...conversationRest] =
    candidate.ctas.conversation.split(" ");

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[#071a62] p-6 text-[#f5f7fb] sm:p-10 md:p-14 lg:p-16">
          <div
            className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full border-[56px] border-accent/16"
            aria-hidden="true"
          />
          <AnimatedIcon className="text-accent">
            <HeartStraight size={34} weight="fill" />
          </AnimatedIcon>
          <h2 className="relative mt-8 max-w-[12ch] font-display text-4xl leading-[1.02] font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            {conversationLead}{" "}
            <MetallicPaint>{conversationRest.join(" ")}</MetallicPaint>
          </h2>
          <p className="relative mt-5 max-w-[42ch] text-base leading-7 text-[#f5f7fb]/76 sm:text-lg">
            Acompanhe Paulinho, participe da conversa e receba as atualizações pelos canais oficiais.
          </p>

          <div className="relative mt-8 flex flex-wrap gap-3">
            {instagram?.url ? (
              <Button asChild>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={19} weight="bold" />
                  {candidate.ctas.social}
                  <ArrowUpRight size={17} weight="bold" />
                </a>
              </Button>
            ) : null}

            {candidate.whatsapp ? (
              <Button asChild variant="secondary">
                <a
                  href={`https://wa.me/${candidate.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-link"
                >
                  <WhatsappLogo size={19} weight="bold" />
                  WhatsApp
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
