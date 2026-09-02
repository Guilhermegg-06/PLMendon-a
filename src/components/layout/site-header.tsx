"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  InstagramLogo,
  List,
  X,
} from "@phosphor-icons/react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { CampaignWordmark } from "@/components/brand/campaign-wordmark";
import { Button } from "@/components/ui/button";
import { candidate } from "@/content/candidate";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Conheça", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const instagram = candidate.socials.find(
    (social) => social.network === "instagram",
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((element): element is Element => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60%", threshold: 0.01 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-line bg-page/92 shadow-[0_10px_35px_rgb(7_26_98/0.08)] backdrop-blur-xl"
          : "border-transparent bg-page/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <a href="#inicio" className="shrink-0" aria-label="Ir para o início">
          <CampaignWordmark compact />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "location" : undefined}
              className={cn(
                "relative min-h-11 px-3 py-3 text-sm font-semibold text-ink-muted transition-colors hover:text-ink",
                activeSection === item.href &&
                  "after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-accent text-ink",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {instagram?.url ? (
            <Button asChild className="hidden md:inline-flex">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={18} weight="bold" />
                {candidate.ctas.social}
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </Button>
          ) : null}

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menu"
              >
                <List size={23} weight="bold" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="menu-overlay fixed inset-0 z-50 bg-[#071a62]/38 backdrop-blur-sm" />
              <Dialog.Content className="menu-panel fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,24rem)] flex-col bg-page p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[-20px_0_70px_rgb(7_26_98/0.22)]">
                <div className="flex items-center justify-between">
                  <Dialog.Title>
                    <CampaignWordmark compact />
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      aria-label="Fechar menu"
                    >
                      <X size={22} weight="bold" />
                    </Button>
                  </Dialog.Close>
                </div>
                <Dialog.Description className="sr-only">
                  Navegação principal do site da campanha.
                </Dialog.Description>

                <nav
                  className="mt-12 flex flex-1 flex-col gap-2"
                  aria-label="Menu para celular"
                >
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={
                        activeSection === item.href ? "location" : undefined
                      }
                      className={cn(
                        "flex min-h-14 items-center justify-between rounded-[var(--radius-card)] px-4 font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:bg-surface-muted",
                        activeSection === item.href && "bg-surface-muted",
                      )}
                    >
                      {item.label}
                      <ArrowUpRight size={21} weight="bold" />
                    </a>
                  ))}
                </nav>

                {instagram?.url ? (
                  <Button asChild className="mt-6 w-full">
                    <a
                      href={instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <InstagramLogo size={19} weight="bold" />
                      {candidate.ctas.social}
                    </a>
                  </Button>
                ) : null}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
