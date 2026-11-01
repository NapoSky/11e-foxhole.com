import { test, expect } from "@playwright/test";

test("une route inconnue renvoie une vraie 404, sans fallback vers la page d’accueil", async ({
  request,
}) => {
  const response = await request.get("/__static_export_missing_page__");
  expect(response.status()).toBe(404);
});

test("les assets CSS et JavaScript de l’export sont servis", async ({
  page,
  request,
}) => {
  await page.goto("/en");
  const assets = await page
    .locator('link[rel="stylesheet"], script[src]')
    .evaluateAll((elements) =>
      elements
        .map(
          (element) =>
            element.getAttribute("href") ?? element.getAttribute("src"),
        )
        .filter(
          (url): url is string => !!url && url.startsWith("/_next/static/"),
        ),
    );
  expect(assets.some((url) => url.endsWith(".css"))).toBe(true);
  expect(assets.some((url) => url.endsWith(".js"))).toBe(true);
  for (const asset of assets) {
    const response = await request.get(asset);
    expect(response.status(), asset).toBe(200);
    expect(response.headers()["content-type"], asset).toMatch(/javascript|css/);
  }
});
