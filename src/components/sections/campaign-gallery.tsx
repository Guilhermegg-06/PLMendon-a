"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  CaretLeft,
  CaretRight,
  CornersOut,
  Pause,
  Play,
  X,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { candidate } from "@/content/candidate";

export function CampaignGallery() {
  const slides = candidate.closeUpSlides;
  const track = useRef<HTMLUListElement>(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showSlide = useCallback(
    (index: number) => {
      const normalized = (index + slides.length) % slides.length;
      const element = track.current;
      const slide = element?.children.item(normalized) as HTMLElement | null;

      if (!element || !slide) return;
      element.scrollTo({
        left: slide.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
      setActiveIndex(normalized);
    },
    [reduceMotion, slides.length],
  );

  useEffect(() => {
    const element = track.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const index = Number((visible?.target as HTMLElement | undefined)?.dataset.index);
        if (Number.isInteger(index)) setActiveIndex(index);
      },
      { root: element, threshold: [0.55, 0.75] },
    );

    Array.from(element.children).forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || paused || interacting) return;
    const timer = window.setInterval(() => showSlide(activeIndex + 1), 5200);
    return () => window.clearInterval(timer);
  }, [activeIndex, interacting, paused, reduceMotion, showSlide]);

  const selectedSlide = selectedIndex === null ? null : slides[selectedIndex];

  return (
    <section id="de-perto" className="overflow-hidden px-4 py-20 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="max-w-[10ch] font-display text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.88] font-extrabold tracking-[-0.07em] text-ink text-balance">
            Paulinho de perto.
          </h2>
          <p className="mt-6 max-w-[48ch] text-base leading-7 font-medium text-ink-muted sm:text-xl sm:leading-8">
            Histórias, raízes e trabalho em imagens. Arraste, toque ou use os controles.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-xl font-extrabold text-ink" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => showSlide(activeIndex - 1)}
              aria-label="Ver foto anterior"
            >
              <CaretLeft size={20} weight="bold" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? "Retomar movimento do carrossel" : "Pausar movimento do carrossel"}
              aria-pressed={paused}
            >
              {paused ? <Play size={20} weight="fill" /> : <Pause size={20} weight="fill" />}
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => showSlide(activeIndex + 1)}
              aria-label="Ver próxima foto"
            >
              <CaretRight size={20} weight="bold" />
            </Button>
          </div>
        </div>

        <ul
          ref={track}
          className="mt-6 grid touch-pan-x snap-x snap-mandatory auto-cols-[86vw] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-5 pr-[14vw] [scrollbar-width:none] sm:auto-cols-[28rem] sm:gap-6 sm:pr-20 lg:auto-cols-[32rem] [&::-webkit-scrollbar]:hidden"
          aria-label="Fotos e informações sobre Paulinho Mendonça"
          onPointerDown={() => setInteracting(true)}
          onPointerUp={() => setInteracting(false)}
          onPointerCancel={() => setInteracting(false)}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocusCapture={() => setInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") {
              event.preventDefault();
              showSlide(activeIndex + 1);
            }
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              showSlide(activeIndex - 1);
            }
          }}
        >
          {slides.map((slide, index) => (
            <li key={slide.src} data-index={index} className="snap-center">
              <article className="h-full overflow-hidden rounded-[var(--radius-card)] bg-[#071e9c] text-white shadow-[var(--shadow-soft)]">
                <button
                  type="button"
                  className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#08206b] text-left active:scale-[0.995]"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`Ampliar foto: ${slide.title}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    quality={95}
                    sizes="(max-width: 639px) 86vw, 32rem"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-2xl border border-white/24 bg-[#08206b]/72 text-white backdrop-blur-xl">
                    <CornersOut size={20} weight="bold" aria-hidden="true" />
                  </span>
                </button>
                <div className="p-6 sm:p-7">
                  <h3 className="max-w-[16ch] font-display text-3xl leading-[0.98] font-extrabold tracking-[-0.045em] sm:text-4xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-[42ch] text-sm leading-6 font-medium text-white/76 sm:text-base">
                    {slide.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <Dialog.Root
        open={selectedSlide !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-[#03103f]/88 backdrop-blur-xl" />
          <Dialog.Content className="fixed inset-3 z-[60] mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[var(--radius-card)] border border-white/18 bg-[#08206b] text-white shadow-[0_32px_100px_rgb(0_0_0/0.42)] sm:inset-6">
            <Dialog.Title className="sr-only">{selectedSlide?.title}</Dialog.Title>
            <Dialog.Description className="sr-only">Imagem ampliada do carrossel Paulinho de perto.</Dialog.Description>
            <Dialog.Close asChild>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 z-10"
                aria-label="Fechar imagem ampliada"
              >
                <X size={20} weight="bold" />
              </Button>
            </Dialog.Close>
            {selectedSlide ? (
              <>
                <div className="relative min-h-0 flex-1">
                  <Image
                    src={selectedSlide.src}
                    alt={selectedSlide.alt}
                    fill
                    quality={95}
                    sizes="95vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-white/16 p-4 sm:p-5">
                  <p className="font-display text-lg font-extrabold sm:text-2xl">{selectedSlide.title}</p>
                  <div className="flex shrink-0 gap-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      aria-label="Ampliar foto anterior"
                      onClick={() =>
                        setSelectedIndex((current) =>
                          current === null ? 0 : (current - 1 + slides.length) % slides.length,
                        )
                      }
                    >
                      <CaretLeft size={20} weight="bold" />
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      aria-label="Ampliar próxima foto"
                      onClick={() =>
                        setSelectedIndex((current) =>
                          current === null ? 0 : (current + 1) % slides.length,
                        )
                      }
                    >
                      <CaretRight size={20} weight="bold" />
                    </Button>
                  </div>
                </div>
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
