import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Entenda como a landing page de Paulinho Mendonça trata dados e links externos.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" className="-ml-4">
            <Link href="/">
              <ArrowLeft size={18} weight="bold" />
              Voltar ao início
            </Link>
          </Button>

          <h1 className="mt-10 font-display text-4xl leading-tight font-semibold tracking-[-0.05em] text-ink sm:text-6xl">
            Política de privacidade
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Esta página informa, de forma simples, como o site funciona e quais dados são tratados durante a navegação.
          </p>

          <div className="mt-12 space-y-10 text-base leading-7 text-ink-muted">
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Coleta de dados
              </h2>
              <p className="mt-3">
                Este MVP não possui cadastro, login, formulário, banco de dados, pixel de publicidade, cookie de marketing ou ferramenta de análise de audiência.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Dados técnicos
              </h2>
              <p className="mt-3">
                O provedor de hospedagem pode processar dados técnicos necessários para entregar o site com segurança, como endereço IP, tipo de navegador e registros de acesso. Esse tratamento depende do provedor escolhido pela campanha.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Links externos
              </h2>
              <p className="mt-3">
                Ao acessar Instagram, Linktree, notícias ou outros canais externos, passam a valer as políticas de privacidade de cada serviço. O site não controla a coleta realizada nessas plataformas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                Atualizações e contato
              </h2>
              <p className="mt-3">
                Esta política deve ser revisada antes do lançamento, junto com o domínio, os dados legais e um canal oficial para solicitações relacionadas à privacidade.
              </p>
            </section>
          </div>

          <p className="mt-12 rounded-[var(--radius-card)] bg-surface-muted p-5 text-sm leading-6 text-ink-muted">
            Última revisão do MVP: setembro de 2026. Conteúdo sujeito à validação jurídica da campanha.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
