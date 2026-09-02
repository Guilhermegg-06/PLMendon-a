import { TextLoop } from "@/components/motion/text-loop";
import { candidate } from "@/content/candidate";

export function TextLoopBand() {
  return (
    <section
      className="overflow-hidden py-3 sm:py-6"
      aria-label="Identidade da campanha"
    >
      <TextLoop text={candidate.publicName} separator={candidate.state} />
    </section>
  );
}
