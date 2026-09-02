import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 className="font-display text-4xl leading-[1.02] font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[62ch] text-base leading-7 text-ink-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
