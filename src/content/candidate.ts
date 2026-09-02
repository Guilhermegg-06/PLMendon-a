import type { CandidateContent } from "@/types/campaign";
import { sources } from "./sources";

export const candidate: CandidateContent = {
  publicName: "Paulinho Mendonça",
  fullName: "Paulo Roberto Esequiel de Mendonça",
  role: "Candidato a deputado estadual por Alagoas",
  state: "Alagoas",
  electionNumber: null,
  slogan: "O coração que alimenta.",
  biography: {
    short:
      "Engenheiro civil, empresário e consultor com experiência em infraestrutura, gestão e projetos de impacto social em Alagoas.",
    details: [
      "Formado em Engenharia Civil pelo CESMAC, construiu uma trajetória profissional ligada a obras, planejamento e gestão.",
      "Atuou em projetos públicos e privados e reuniu experiência nos setores de infraestrutura, saúde e turismo.",
      "Sua história recente inclui participação em iniciativas de segurança alimentar e articulação entre governo, empresas e sociedade civil.",
    ],
    validation: "review",
  },
  focusAreas: [
    {
      title: "Segurança alimentar",
      description:
        "Articulação de iniciativas que ampliem o acesso à alimentação e fortaleçam redes locais.",
      validation: "review",
    },
    {
      title: "Infraestrutura",
      description:
        "Experiência técnica voltada a obras, mobilidade e desenvolvimento dos municípios.",
      validation: "review",
    },
    {
      title: "Gestão pública",
      description:
        "Planejamento, responsabilidade e capacidade de transformar projetos em entregas.",
      validation: "review",
    },
    {
      title: "Desenvolvimento regional",
      description:
        "Integração entre oportunidades, vocações locais e crescimento sustentável em Alagoas.",
      validation: "review",
    },
    {
      title: "Saúde",
      description:
        "Atenção à gestão e às condições que aproximam cuidado e qualidade de vida.",
      validation: "review",
    },
    {
      title: "Oportunidades",
      description:
        "Formação, trabalho e apoio a caminhos que gerem autonomia para as famílias.",
      validation: "review",
    },
  ],
  socials: [
    {
      network: "instagram",
      label: "Instagram",
      description: "Acompanhe a agenda e os conteúdos mais recentes.",
      url: sources.instagram,
      validation: "confirmed",
    },
    {
      network: "linktree",
      label: "Links oficiais",
      description: "Encontre os canais reunidos pela campanha.",
      url: sources.linktree,
      validation: "confirmed",
    },
    {
      network: "website",
      label: "Trajetória completa",
      description: "Consulte a fonte pública de biografia e notícias.",
      url: sources.institutionalSite,
      validation: "confirmed",
    },
    {
      network: "playlist",
      label: "Playlist",
      description: "Ouça as músicas publicadas pela comunicação da campanha.",
      url: sources.playlist,
      validation: "confirmed",
    },
  ],
  whatsapp: null,
  featuredContent: [
    {
      type: "noticia",
      title: "Parcerias que podem gerar desenvolvimento",
      summary:
        "Uma análise sobre colaboração entre o poder público e a iniciativa privada.",
      image: null,
      url: "https://www.municipioassessoria.com/paulo-roberto-esequiel-de-mendonca-analisa-a-importancia-das-parcerias-publico-privadas-para-gerar-desenvolvimento-social-e-economico/",
      date: null,
      alt: null,
      source: "Município Assessoria",
    },
    {
      type: "noticia",
      title: "Programas sociais integrados",
      summary:
        "Conteúdo sobre ações coordenadas para ampliar impacto social nas comunidades.",
      image: null,
      url: "https://www.revistaprefeitosdesaopaulo.com.br/paulo-roberto-esequiel-de-mendonca-explica-como-programas-sociais-integrados-sao-capazes-de-transformar-vidas-e-comunidades/",
      date: null,
      alt: null,
      source: "Revista Prefeitos de SP",
    },
    {
      type: "noticia",
      title: "Segurança alimentar como referência",
      summary:
        "Uma conversa sobre a experiência de Alagoas e caminhos para ampliar seu alcance.",
      image: null,
      url: "https://www.pesquisa365.com.br/2026/02/12/paulo-roberto-esequiel-de-mendonca-explica-como-o-programa-alagoas-sem-fome-pode-se-tornar-uma-referencia-em-seguranca-alimentar-em-outros-estados/",
      date: "2026-02-12",
      alt: null,
      source: "Pesquisa 365",
    },
    {
      type: "playlist",
      title: "Músicas de Paulinho Mendonça",
      summary: "A playlist oficial reunida pela comunicação da campanha.",
      image: null,
      url: sources.playlist,
      date: null,
      alt: null,
      source: "Sua Música",
    },
  ],
  timeline: [
    {
      title: "Formação em engenharia",
      description:
        "Graduação em Engenharia Civil pelo CESMAC e formação complementar ligada a infraestrutura e gestão pública.",
      validation: "review",
    },
    {
      title: "Experiência em projetos",
      description:
        "Mais de 20 anos de atuação profissional em empreendimentos públicos e privados.",
      validation: "review",
    },
    {
      title: "Gestão e compromisso social",
      description:
        "Passagens por saneamento, saúde, turismo e iniciativas de segurança alimentar em Alagoas.",
      validation: "review",
    },
  ],
  images: {
    hero: "/candidate/paulinho-hero.webp",
    heart: "/candidate/paulinho-coracao.webp",
    journey: "/candidate/paulinho-trajetoria.webp",
  },
  closeUpSlides: [
    {
      src: "/candidate/paulinho-coracao.webp",
      alt: "Paulinho Mendonça forma um coração com as mãos",
      title: "Um gesto que virou compromisso",
      description: "Cuidar das pessoas está no centro da presença de Paulinho em Alagoas.",
    },
    {
      src: "/candidate/paulinho-trajetoria.webp",
      alt: "Paulinho Mendonça em fotografia de corpo inteiro da campanha",
      title: "Engenharia e gestão",
      description: "Formação técnica e experiência para transformar planejamento em entrega.",
    },
    {
      src: "/candidate/paulinho-servico-publico-hq.webp",
      alt: "Registros de Paulinho Mendonça em ações de serviço público",
      title: "Mais de 20 anos de serviço público",
      description: "Uma trajetória construída perto de quem faz Alagoas acontecer.",
    },
    {
      src: "/candidate/paulinho-major-izidoro-hq.webp",
      alt: "Paulinho Mendonça em Major Izidoro, lugar de suas raízes",
      title: "Raízes em Major Izidoro",
      description: "Memória, pertencimento e conexão com o interior de Alagoas.",
    },
    {
      src: "/candidate/paulinho-politica-hq.webp",
      alt: "Paulinho Mendonça ao lado de alagoanos durante visita pública",
      title: "Uma decisão por Alagoas",
      description: "Entrar na política para ampliar o trabalho e fazer mais pelos alagoanos.",
    },
    {
      src: "/candidate/paulinho-alagoas-sem-fome-hq.webp",
      alt: "Paulinho Mendonça durante visita ligada ao Alagoas Sem Fome",
      title: "Alagoas Sem Fome",
      description: "O contato com as comunidades reforçou seu olhar sobre cuidado e dignidade.",
    },
  ],
  legal: {
    party: null,
    federationOrCoalition: null,
    cnpj: null,
    domain: null,
    legalNotice:
      "Conteúdo em preparação. Publicação sujeita à revisão jurídica e eleitoral da campanha.",
  },
  ctas: {
    learnMore: "Conheça Paulinho",
    social: "Instagram",
    conversation: "Vamos conversar",
  },
};

export const visibleSocials = candidate.socials.filter(
  (social): social is typeof social & { url: string } => Boolean(social.url),
);
