# Checklist de lançamento

## Conteúdo e dados eleitorais

- [ ] Confirmar número eleitoral.
- [ ] Confirmar partido.
- [ ] Confirmar federação ou coligação.
- [ ] Informar CNPJ eleitoral.
- [ ] Aprovar biografia, trajetória e áreas de atuação.
- [ ] Confirmar redes oficiais e WhatsApp.
- [ ] Revisar todas as notícias e URLs externas.

## Domínio e conformidade

- [ ] Definir o domínio oficial.
- [ ] Comunicar o domínio à Justiça Eleitoral no prazo aplicável.
- [ ] Nomear o responsável jurídico.
- [ ] Fazer revisão jurídica e eleitoral completa.
- [ ] Aprovar aviso eleitoral e política de privacidade.
- [ ] Confirmar se dados legais adicionais devem aparecer no rodapé.

## Imagens e materiais

- [ ] Confirmar direitos das fotografias e créditos necessários.
- [ ] Validar materiais que tenham passado por ferramentas de IA.
- [ ] Confirmar que nenhuma peça com número divergente está publicada.
- [ ] Revalidar textos alternativos e enquadramentos em celulares.

## Produto e publicação

- [x] Permitir build de preview sem `NEXT_PUBLIC_SITE_URL` obrigatória.
- [ ] Executar instalação limpa, lint, typecheck, testes, build e Playwright.
- [ ] Revisar 320 px, 390 px, tablet, desktop e modo paisagem.
- [ ] Testar teclado, foco, movimento reduzido, contraste e zoom em 200%.
- [ ] Confirmar ausência de analytics, pixels e formulários não autorizados.
- [ ] Configurar `NEXT_PUBLIC_SITE_URL` com o domínio canônico quando ele for definido.
- [ ] Manter habilitada a exposição automática das variáveis de sistema da Vercel.
- [ ] Revisar Open Graph, favicon, sitemap e robots no domínio final.
- [ ] Obter aprovação explícita antes do merge e da publicação em produção.
