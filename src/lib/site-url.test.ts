import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getSiteUrl } from "@/lib/site-url";

const environmentKeys = [
  "NEXT_PUBLIC_SITE_URL",
  "VERCEL_PROJECT_PRODUCTION_URL",
  "VERCEL_URL",
] as const;

const originalEnvironment = Object.fromEntries(
  environmentKeys.map((key) => [key, process.env[key]]),
) as Record<(typeof environmentKeys)[number], string | undefined>;

beforeEach(() => {
  environmentKeys.forEach((key) => delete process.env[key]);
});

afterEach(() => {
  environmentKeys.forEach((key) => {
    const originalValue = originalEnvironment[key];
    if (originalValue === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = originalValue;
    }
  });
});

describe("getSiteUrl", () => {
  it("mantém o build válido quando a variável pública está vazia", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "";

    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  it("normaliza a URL canônica configurada", () => {
    process.env.NEXT_PUBLIC_SITE_URL = " https://campanha.example.com/ ";

    expect(getSiteUrl()).toBe("https://campanha.example.com");
  });

  it("usa o domínio de produção fornecido automaticamente pela Vercel", () => {
    process.env.NEXT_PUBLIC_SITE_URL = " ";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "paulinho.vercel.app";
    process.env.VERCEL_URL = "paulinho-git-main.vercel.app";

    expect(getSiteUrl()).toBe("https://paulinho.vercel.app");
  });

  it("usa a URL do deployment quando o domínio de produção não está disponível", () => {
    process.env.VERCEL_URL = "paulinho-preview.vercel.app";

    expect(getSiteUrl()).toBe("https://paulinho-preview.vercel.app");
  });

  it("ignora valores inválidos sem interromper o build", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "://";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "deploy.vercel.app";

    expect(getSiteUrl()).toBe("https://deploy.vercel.app");
  });
});
