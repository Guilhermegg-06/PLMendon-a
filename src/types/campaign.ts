export type ValidationState = "confirmed" | "review" | "pending";

export type SocialNetwork =
  | "instagram"
  | "linktree"
  | "website"
  | "playlist"
  | "whatsapp";

export type SocialLink = {
  network: SocialNetwork;
  label: string;
  description: string;
  url: string | null;
  validation: ValidationState;
};

export type FocusArea = {
  title: string;
  description: string;
  validation: ValidationState;
};

export type FeaturedContent = {
  type: "noticia" | "playlist" | "entrevista" | "video";
  title: string;
  summary: string;
  image: string | null;
  url: string;
  date: string | null;
  alt: string | null;
  source: string;
};

export type TimelineItem = {
  title: string;
  description: string;
  validation: ValidationState;
};

export type CandidateContent = {
  publicName: string;
  fullName: string;
  role: string;
  state: string;
  electionNumber: string | null;
  slogan: string;
  biography: {
    short: string;
    details: string[];
    validation: ValidationState;
  };
  focusAreas: FocusArea[];
  socials: SocialLink[];
  whatsapp: string | null;
  featuredContent: FeaturedContent[];
  timeline: TimelineItem[];
  images: {
    hero: string;
    heart: string;
    journey: string;
  };
  legal: {
    party: string | null;
    federationOrCoalition: string | null;
    cnpj: string | null;
    domain: string | null;
    legalNotice: string;
  };
  ctas: {
    learnMore: string;
    social: string;
    conversation: string;
  };
};
