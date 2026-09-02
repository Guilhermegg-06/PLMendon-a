import { HeartStraight } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

type CampaignWordmarkProps = {
  compact?: boolean;
  className?: string;
};

export function CampaignWordmark({
  compact = false,
  className,
}: CampaignWordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display font-extrabold tracking-[-0.05em] text-ink",
        compact ? "text-lg" : "text-2xl",
        className,
      )}
      aria-label="Paulinho Mendonça"
    >
      <span aria-hidden="true">Paulinho</span>
      <HeartStraight
        aria-hidden="true"
        className="text-accent"
        size={compact ? 18 : 22}
        weight="fill"
      />
    </span>
  );
}
