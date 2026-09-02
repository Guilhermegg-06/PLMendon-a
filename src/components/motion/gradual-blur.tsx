import type { CSSProperties } from "react";

type GradualBlurProps = {
  className?: string;
  strength?: number;
  layers?: number;
};

export function GradualBlur({
  className = "",
  strength = 1.5,
  layers = 6,
}: GradualBlurProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[38%] ${className}`}
      aria-hidden="true"
      data-motion="gradual-blur"
    >
      {Array.from({ length: layers }, (_, index) => {
        const start = Math.round((index / layers) * 100);
        const end = Math.min(100, start + Math.ceil(200 / layers));
        const style: CSSProperties = {
          backdropFilter: `blur(${((index + 1) * strength).toFixed(2)}px)`,
          WebkitBackdropFilter: `blur(${((index + 1) * strength).toFixed(2)}px)`,
          maskImage: `linear-gradient(to bottom, transparent ${start}%, black ${end}%)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent ${start}%, black ${end}%)`,
        };

        return <span key={index} className="absolute inset-0" style={style} />;
      })}
    </div>
  );
}
