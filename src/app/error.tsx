"use client";

import { WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-4 py-16">
      <div className="max-w-xl text-center">
        <WarningCircle
          size={38}
          weight="fill"
          className="mx-auto text-accent"
          aria-hidden="true"
        />
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
          Algo não carregou como esperado.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-ink-muted">
          Tente novamente. Se o problema continuar, acesse um dos canais oficiais da campanha.
        </p>
        <Button type="button" onClick={reset} className="mt-8">
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
