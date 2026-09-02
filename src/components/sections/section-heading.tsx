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
    <div className={cn("max-w-5xl", className)}>
      <h2 className="max-w-[12ch] font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.88] font-extrabold tracking-[-0.07em] text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[58ch] text-base leading-7 font-medium text-ink-muted sm:text-xl sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
