import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type MetallicPaintProps = PropsWithChildren<{ className?: string }>;

export function MetallicPaint({ children, className }: MetallicPaintProps) {
  return (
    <span className={cn("metallic-paint", className)} data-motion="metallic-paint">
      {children}
    </span>
  );
}
