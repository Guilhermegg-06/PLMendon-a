# Paulinho Mendonça

Landing page mobile-first da campanha de Paulinho Mendonça para deputado estadual por Alagoas. A experiência reúne apresentação, trajetória, áreas de atuação em revisão, canais confirmados e conteúdos externos, sem backend, formulário, analytics ou dados inventados.

## Stack

Next.js 16 com App Router, React 19, TypeScript estrito, Tailwind CSS 4, Motion, GSAP, componentes Radix/shadcn, Phosphor Icons, Vitest, React Testing Library e Playwright. O gerenciador é pnpm 11 e a versão mínima do Node.js é 22.14.

## Executar localmente

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Acesse `http://localhost:3000`.

## Validar

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

O Playwright usa `next start`; execute o build antes dos testes E2E. O comando `pnpm validate` agrupa lint, typecheck, testes unitários e build.

## Estrutura

- `src/app`: rotas, metadados, Open Graph, sitemap e robots.
- `src/components`: layout, seções, movimento e componentes de interface.
- `src/content/candidate.ts`: conteúdo político e estados de validação.
- `src/content/sources.ts`: URLs das fontes e canais.
- `public/candidate`: imagens WebP da campanha.
- `docs`: manifesto de ativos e checklist de lançamento.
- `tests/e2e`: fluxos essenciais no navegador.

## Atualizar conteúdo

Edite `src/content/candidate.ts`. Número eleitoral e WhatsApp são condicionais: mantenha `null` até a confirmação e a interface continuará ocultando-os. Redes sem URL não são renderizadas. Atualize fontes apenas em `src/content/sources.ts`.

Para trocar imagens, exporte derivados WebP/AVIF proporcionais ao uso, remova metadados desnecessários, salve em `public/candidate` e atualize `candidate.images` ou `candidate.closeUpSlides`. Registre origem, dimensões e direitos em `docs/ASSET_MANIFEST.md`. Não versione arquivos `.CR2`, PSD, AI, vídeos brutos ou PDFs de impressão.

## Direção visual

A interface usa exclusivamente componentes da campanha, sem a marca institucional: fotografias autorizadas, coração e wordmark tipográfico sem número. A paleta reúne `#071E9C`, `#0057FF`, `#00F0FF`, `#00FF3C`, `#A71CFF`, `#08206B` e branco. Bricolage Grotesque dá presença editorial aos títulos; Manrope mantém a leitura do corpo. A experiência combina hero fotográfico quase integral, navegação inferior inspirada em aplicativos sociais, carrossel tátil com reprodução controlável, cartões tridimensionais e movimento com suporte a `prefers-reduced-motion`.

Os efeitos foram adaptados das referências React Bits e Uiverse indicadas no briefing. Consulte `THIRD_PARTY_NOTICES.md` para autoria e licença. Todo novo arquivo visual deve ser exportado e aprovado pela campanha antes de entrar no projeto.

## Vercel

Importe este repositório na Vercel, mantenha os comandos padrão do Next.js e configure `NEXT_PUBLIC_SITE_URL` com o domínio final. Não há deploy automático neste repositório. Antes da produção, conclua `CONTENT_TODO.md` e `docs/LAUNCH_CHECKLIST.md`.

## Git e GitHub

O projeto usa GitHub Flow: `main` é estável e o desenvolvimento acontece em branches `feat/*`. Commits seguem Conventional Commits em português. Toda mudança deve passar pela Pull Request e não deve ser mesclada sem autorização.

## Pendências

Número eleitoral, partido, federação ou coligação, CNPJ, domínio, WhatsApp, dados jurídicos, conteúdo em revisão e direitos das imagens ainda dependem da campanha. Consulte `CONTENT_TODO.md` para a lista operacional.
