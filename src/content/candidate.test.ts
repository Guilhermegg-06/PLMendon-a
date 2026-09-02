import { describe, expect, it } from "vitest";
import { candidate, visibleSocials } from "@/content/candidate";

describe("configuração da campanha", () => {
  it("mantém dados eleitorais não confirmados fora da publicação", () => {
    expect(candidate.electionNumber).toBeNull();
    expect(candidate.whatsapp).toBeNull();
    expect(candidate.legal.party).toBeNull();
    expect(candidate.legal.federationOrCoalition).toBeNull();
    expect(candidate.legal.cnpj).toBeNull();
    expect(candidate.legal.domain).toBeNull();
  });

  it("publica somente redes com URL confirmada", () => {
    expect(visibleSocials.length).toBeGreaterThan(0);
    expect(visibleSocials.every((social) => Boolean(social.url))).toBe(true);
    expect(visibleSocials.every((social) => social.validation === "confirmed")).toBe(true);
  });

  it("mantém as áreas preliminares em revisão", () => {
    expect(candidate.focusAreas).toHaveLength(6);
    expect(candidate.focusAreas.every((area) => area.validation === "review")).toBe(true);
  });
});
