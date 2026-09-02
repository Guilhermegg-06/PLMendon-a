# Pendências de conteúdo

Antes da publicação definitiva, a equipe da campanha deve:

- [ ] Confirmar o número eleitoral. Os materiais consultados apresentam `1500` e `15100`; por isso `electionNumber` permanece `null`.
- [ ] Fornecer partido, federação ou coligação, CNPJ eleitoral e domínio oficial.
- [ ] Confirmar um número de WhatsApp. O botão permanece oculto enquanto o valor for `null`.
- [ ] Aprovar a biografia curta, a trajetória e cada área de atuação marcada como `review`.
- [ ] Validar se os links reunidos em `src/content/sources.ts` continuam oficiais.
- [ ] Confirmar os direitos de uso das sete fotografias de campanha atualmente incluídas no site.
- [ ] Fornecer o arquivo original em alta resolução da arte horizontal enviada para o topo do site. Enquanto ele não estiver disponível no repositório, o hero usa a fotografia de campanha já aprovada como composição provisória.
- [ ] Aprovar as quatro restaurações de imagem do carrossel e, quando possível, substituir as prévias pelos arquivos originais da campanha.
- [ ] Aprovar o aviso eleitoral e a política de privacidade com o responsável jurídico.
- [ ] Revisar textos, imagens e metadados antes de conectar o domínio de produção.

Todo o conteúdo editável está centralizado em `src/content/candidate.ts` e `src/content/sources.ts`.
