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
import { useRef, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
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

const palettes = [
  ["#0057ff", "#00f0ff"],
  ["#071e9c", "#a71cff"],
  ["#08206b", "#0057ff"],
  ["#071e9c", "#00ff3c"],
] as const;

export function ContentCarousel({ items }: ContentCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();

  function move(direction: -1 | 1) {
    const element = track.current;
    if (!element) return;
    element.scrollBy({
      left: direction * element.clientWidth * 0.78,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-end gap-2">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={() => move(-1)}
          aria-label="Ver conteúdo anterior"
        >
          <ArrowLeft size={19} weight="bold" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={() => move(1)}
          aria-label="Ver próximo conteúdo"
        >
          <ArrowRight size={19} weight="bold" />
        </Button>
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
        className="grid touch-pan-x snap-x snap-mandatory auto-cols-[86vw] grid-flow-col gap-5 overflow-x-auto overscroll-x-contain pb-12 pr-[14vw] outline-none [scrollbar-width:none] sm:auto-cols-[24rem] sm:pr-20 lg:auto-cols-[27rem] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const Icon = typeIcons[item.type];
          const [from, to] = palettes[index % palettes.length];
          const style = {
            "--card-from": from,
            "--card-to": to,
          } as CSSProperties;

          return (
            <li key={item.url} className="content-card-perspective snap-center" style={style}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="content-card-3d group flex h-full text-[#08206b] focus-visible:outline-offset-4"
              >
                <span className="content-card-glass" aria-hidden="true" />
                <span className="content-card-orbits" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span>
                    <Icon size={22} weight="fill" className="text-white" />
                  </span>
                </span>

                <span className="content-card-body flex w-full flex-col justify-between p-7 sm:p-8">
                  <span className="max-w-[12ch] font-display text-[2.35rem] leading-[0.9] font-extrabold tracking-[-0.06em] sm:text-[2.8rem]">
                    {item.title}
                  </span>
                  <span className="mt-16 block">
                    <span className="text-xs font-extrabold tracking-[0.08em] uppercase">
                      {item.source}
                    </span>
                    <span className="mt-3 block max-w-[34ch] text-sm leading-6 font-semibold text-[#08206b]/76">
                      {item.summary}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold">
                      Abrir conteúdo
                      <ArrowUpRight
                        size={18}
                        weight="bold"
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
