"use client";

import { gsap } from "gsap";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type TextLoopProps = {
  text: string;
  separator?: string;
  speed?: number;
  reverse?: boolean;
};

const pathDefinition =
  "M -320 260 Q -160 92 0 260 T 320 260 T 640 260 T 960 260 T 1280 260 T 1520 260";

export function TextLoop({
  text,
  separator = "ALAGOAS",
  speed = 88,
  reverse = false,
}: TextLoopProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const firstRef = useRef<SVGTextPathElement>(null);
  const secondRef = useRef<SVGTextPathElement>(null);
  const [metrics, setMetrics] = useState({ length: 0, repetitions: 1 });
  const rawId = useId();
  const pathId = `campaign-loop-${rawId.replaceAll(":", "")}`;
  const unit = useMemo(
    () => `${text.toUpperCase()}  ${separator.toUpperCase()}  `,
    [separator, text],
  );

  useLayoutEffect(() => {
    const path = pathRef.current;
    const measure = measureRef.current;
    if (!path || !measure) return;

    let cancelled = false;
    const update = () => {
      if (cancelled) return;
      const length = path.getTotalLength();
      const unitWidth = measure.getComputedTextLength();
      if (!length) return;
      setMetrics({
        length,
        repetitions: unitWidth > 0 ? Math.max(1, Math.ceil(length / unitWidth)) : 1,
      });
    };

    update();
    document.fonts?.ready.then(update).catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [unit]);

  useEffect(() => {
    const first = firstRef.current;
    const second = secondRef.current;
    const { length } = metrics;
    if (!first || !second || !length) return;

    const applyOffset = (offset: number) => {
      first.setAttribute("startOffset", String(offset));
      second.setAttribute(
        "startOffset",
        String(offset >= 0 ? offset - length : offset + length),
      );
    };

    applyOffset(0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: reverse ? -length : length,
      duration: length / speed,
      ease: "none",
      repeat: -1,
      onUpdate: () => applyOffset(state.offset),
    });

    return () => {
      tween.kill();
    };
  }, [metrics, reverse, speed]);

  const repeatedText = unit.repeat(metrics.repetitions);
  const textLength = metrics.length || undefined;

  return (
    <div className="relative w-full overflow-hidden" data-motion="text-loop">
      <svg
        className="block h-auto w-full min-w-[52rem] -translate-x-[22%] sm:min-w-[64rem] sm:-translate-x-[12%] lg:min-w-0 lg:translate-x-0"
        viewBox="0 0 1200 520"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`${text}, ${separator}`}
      >
        <path
          ref={pathRef}
          id={pathId}
          d={pathDefinition}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="78"
          strokeLinecap="round"
        />
        <text
          ref={measureRef}
          className="pointer-events-none invisible"
          style={{ fontSize: 34, fontWeight: 760, letterSpacing: 0.5 }}
          aria-hidden="true"
        >
          {unit}
        </text>
        <text
          fill="var(--on-accent)"
          dominantBaseline="central"
          style={{ fontSize: 34, fontWeight: 760, letterSpacing: 0.5 }}
          aria-hidden="true"
        >
          <textPath
            ref={firstRef}
            href={`#${pathId}`}
            startOffset={0}
            textLength={textLength}
            lengthAdjust="spacing"
          >
            {repeatedText}
          </textPath>
        </text>
        <text
          fill="var(--on-accent)"
          dominantBaseline="central"
          style={{ fontSize: 34, fontWeight: 760, letterSpacing: 0.5 }}
          aria-hidden="true"
        >
          <textPath
            ref={secondRef}
            href={`#${pathId}`}
            startOffset={0}
            textLength={textLength}
            lengthAdjust="spacing"
          >
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
