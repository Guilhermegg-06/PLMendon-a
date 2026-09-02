"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MusicNotes,
  Newspaper,
  PlayCircle,
} from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { useRef } from "react";
import type { FeaturedContent } from "@/types/campaign";

type ContentCarouselProps = {
  items: FeaturedContent[];
};

const typeIcons = {
  noticia: Newspaper,
  playlist: MusicNotes,
  entrevista: PlayCircle,
  video: PlayCircle,
} as const;

export function ContentCarousel({ items }: ContentCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();

  function move(direction: -1 | 1) {
    const element = track.current;
    if (!element) return;
    element.scrollBy({
      left: direction * element.clientWidth * 0.82,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className="mt-10">
      <div className="mb-4 flex justify-end gap-2 lg:hidden">
        <button
          type="button"
          onClick={() => move(-1)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
          aria-label="Ver conteúdo anterior"
        >
          <ArrowLeft size={19} weight="bold" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
          aria-label="Ver próximo conteúdo"
        >
          <ArrowRight size={19} weight="bold" />
        </button>
      </div>

      <ul
        ref={track}
        tabIndex={0}
        aria-label="Conteúdos em destaque"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
        className="grid snap-x snap-mandatory auto-cols-[84vw] grid-flow-col gap-4 overflow-x-auto pb-5 outline-none sm:auto-cols-[25rem] lg:grid-flow-row lg:grid-cols-2 lg:overflow-visible lg:pb-0"
      >
        {items.map((item, index) => {
          const Icon = typeIcons[item.type];
          const featured = index === 0;
          return (
            <li key={item.url} className="snap-start">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full min-h-72 flex-col justify-between rounded-[var(--radius-card)] border p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 focus-visible:border-accent sm:p-7 ${
                  featured
                    ? "border-[#071a62] bg-[#071a62] text-[#f5f7fb] lg:min-h-96"
                    : "border-line bg-surface text-ink"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon
                    size={27}
                    weight="bold"
                    className="text-accent"
                    aria-hidden="true"
                  />
                  <ArrowUpRight
                    size={21}
                    weight="bold"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="mt-12">
                  <p
                    className={`text-sm font-bold ${featured ? "text-accent" : "text-accent-strong"}`}
                  >
                    {item.source}
                  </p>
                  <h3 className="mt-3 max-w-[21ch] font-display text-2xl leading-tight font-semibold tracking-[-0.04em] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-[48ch] text-sm leading-6 ${featured ? "text-[#f5f7fb]/76" : "text-ink-muted"}`}
                  >
                    {item.summary}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
