import { expect, test } from "@playwright/test";

test("entrega o conteúdo central sem dados pendentes", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "O coração que alimenta." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Áreas de atuação." })).toBeVisible();
  await expect(page.getByTestId("election-number")).toHaveCount(0);
  await expect(page.getByTestId("whatsapp-link")).toHaveCount(0);
});

test("mantém a navegação social fixa na parte inferior", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const navigation = page.getByTestId("bottom-navigation");
  await expect(navigation).toBeVisible();
  await expect(navigation).toHaveCSS("position", "fixed");
  await expect(navigation.getByRole("link")).toHaveCount(5);
  await navigation.getByRole("link", { name: "De perto" }).click();
  await expect(page.getByRole("heading", { name: "Paulinho de perto." })).toBeVisible();
});

test("galeria é tátil, controlável e não repete fotografias", async ({ page }) => {
  await page.goto("/");
  const gallery = page.locator("#de-perto");
  const openers = gallery.getByRole("button", { name: /^Ampliar foto:/ });
  await expect(openers).toHaveCount(6);

  const imageSources = await gallery.locator("ul > li article button img").evaluateAll((images) =>
    images.map((image) => image.getAttribute("src")),
  );
  expect(new Set(imageSources).size).toBe(imageSources.length);

  const pause = gallery.getByRole("button", { name: "Pausar movimento do carrossel" });
  await pause.click();
  await expect(
    gallery.getByRole("button", { name: "Retomar movimento do carrossel" }),
  ).toHaveAttribute("aria-pressed", "true");

  await openers.first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("links externos usam proteção de nova aba", async ({ page }) => {
  await page.goto("/");
  const links = page.locator('a[target="_blank"]');
  expect(await links.count()).toBeGreaterThan(0);
  for (let index = 0; index < await links.count(); index += 1) {
    const rel = (await links.nth(index).getAttribute("rel")) ?? "";
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
  }
});

test("respeita movimento reduzido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe("auto");
});

test("não cria overflow nos tamanhos essenciais", async ({ page }) => {
  await page.goto("/");
  for (const viewport of [
    { width: 320, height: 568 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(viewport);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  }
});

test("carrega os movimentos principais do redesign", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[data-motion="text-loop"]')).toHaveCount(1);
  await expect(page.locator('[data-motion="metallic-paint"]')).toHaveCount(1);
  await expect(page.locator(".content-card-3d")).toHaveCount(4);
  await expect(page.getByTestId("hero-image")).toBeVisible();
});

test("publica a política de privacidade", async ({ page }) => {
  await page.goto("/politica-de-privacidade");
  await expect(page.getByRole("heading", { level: 1, name: "Política de privacidade" })).toBeVisible();
  await expect(page.getByText(/não possui cadastro, login, formulário/i)).toBeVisible();
});
