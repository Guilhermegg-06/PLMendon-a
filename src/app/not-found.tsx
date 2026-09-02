import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import { CampaignWordmark } from "@/components/brand/campaign-wordmark";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-4 py-16">
      <div className="max-w-xl text-center">
        <CampaignWordmark />
        <h1 className="mt-10 font-display text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-7xl">
          Página não encontrada.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-ink-muted">
          O endereço pode ter mudado ou ainda não está disponível.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft size={18} weight="bold" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </main>
  );
}
