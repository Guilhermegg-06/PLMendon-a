import Link from "next/link";
import { CampaignWordmark } from "@/components/brand/campaign-wordmark";
import { candidate } from "@/content/candidate";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <CampaignWordmark />
          <p className="mt-4 text-sm font-semibold text-ink">
            {candidate.fullName}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{candidate.role}</p>
          {candidate.electionNumber ? (
            <p className="mt-3 font-display text-2xl font-bold" data-testid="election-number">
              {candidate.electionNumber}
            </p>
          ) : null}
        </div>

        <div className="md:text-right">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
            aria-label="Rodapé"
          >
            <a href="#sobre" className="min-h-11 py-3 text-sm font-semibold text-ink hover:text-accent">
              Conheça
            </a>
            <a href="#conteudos" className="min-h-11 py-3 text-sm font-semibold text-ink hover:text-accent">
              Conteúdos
            </a>
            <Link
              href="/politica-de-privacidade"
              className="min-h-11 py-3 text-sm font-semibold text-ink hover:text-accent"
            >
              Privacidade
            </Link>
          </nav>
          <p className="mt-5 max-w-2xl text-xs leading-5 text-ink-muted md:ml-auto">
            {candidate.legal.legalNotice}
          </p>
          <p className="mt-3 text-xs text-ink-muted">
            © {new Date().getFullYear()} {candidate.publicName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
