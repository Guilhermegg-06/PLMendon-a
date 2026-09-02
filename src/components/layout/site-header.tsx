"use client";

import {
  House,
  ImagesSquare,
  PlayCircle,
  Target,
  UserCircle,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Início", href: "#inicio", icon: House },
  { label: "Paulinho", href: "#sobre", icon: UserCircle },
  { label: "De perto", href: "#de-perto", icon: ImagesSquare },
  { label: "Atuação", href: "#atuacao", icon: Target },
  { label: "Conteúdos", href: "#conteudos", icon: PlayCircle },
] as const;

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = navigation
      .map(({ href }) => document.querySelector(href))
      .filter((element): element is Element => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-22% 0px -62%", threshold: [0.05, 0.2, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))] sm:px-5"
      data-testid="bottom-navigation"
    >
      <nav
        className="pointer-events-auto mx-auto grid w-full max-w-xl grid-cols-5 gap-1 rounded-[1.6rem] border border-white/20 bg-[#08206b]/94 p-1.5 text-white shadow-[0_18px_60px_rgb(3_14_63/0.38)] backdrop-blur-2xl"
        aria-label="Navegação principal"
      >
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={active ? "location" : undefined}
              className={cn(
                "flex min-h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-[1.15rem] px-1 text-[0.64rem] font-extrabold leading-none transition-[transform,background-color,color] duration-300 active:scale-95 sm:min-h-16 sm:text-xs",
                active
                  ? "bg-white text-[#071e9c] shadow-[inset_0_1px_0_rgb(255_255_255/0.7)]"
                  : "text-white/72 hover:bg-white/10 hover:text-white",
              )}
            >
              <Icon size={22} weight={active ? "fill" : "bold"} aria-hidden="true" />
              <span className="truncate">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
