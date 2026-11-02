import { test, expect } from "@playwright/test";
import { sectionIds } from "./helpers/translations";

const operationImages = `section[id="${sectionIds.fr.Operations}"] img`;

test.describe("Images sans JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  for (const path of ["/", "/fr", "/en", "/cn"]) {
    test(`${path} réserve les images et conserve leurs URL sans JavaScript`, async ({
      page,
    }) => {
      await page.route("**/images/**", (route) => route.abort());
      await page.goto(path);

      const images = page.locator("img");
      await expect(images).toHaveCount(11);
      await expect(images.first()).toHaveAttribute("loading", "eager");
      await expect(images.first()).toHaveAttribute("fetchpriority", "high");

      const geometry = await images.evaluateAll((elements) =>
        elements.map((image) => ({
          src: image.getAttribute("src"),
          width: Number(image.getAttribute("width")),
          height: Number(image.getAttribute("height")),
          loading: (image as HTMLImageElement).loading,
          boxHeight: image.getBoundingClientRect().height,
        })),
      );
      for (const image of geometry) {
        expect(image.src).toMatch(/^\/images\/.+\.webp$/);
        expect(image.width).toBeGreaterThan(0);
        expect(image.height).toBeGreaterThan(0);
        expect(image.boxHeight).toBeGreaterThan(0);
      }
      expect(geometry.slice(1).every((image) => image.loading === "lazy")).toBe(
        true,
      );
    });
  }
});

test("les cartes gardent leur place pendant le chargement des images", async ({
  page,
}) => {
  let releaseImages!: () => void;
  const gate = new Promise<void>((resolve) => {
    releaseImages = resolve;
  });
  await page.route("**/images/**", async (route) => {
    await gate;
    await route.continue();
  });

  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const cards = page.locator(operationImages);
    await expect(cards).toHaveCount(8);
    const positions = () =>
      cards.evaluateAll((images) =>
        images.map((image) => {
          const box = image.getBoundingClientRect();
          return { top: box.top + scrollY, height: box.height };
        }),
      );
    const before = await positions();
    expect(before.every((box) => box.height > 0)).toBe(true);

    releaseImages();
    for (const image of await cards.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) =>
              (element as HTMLImageElement).complete &&
              (element as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    const after = await positions();
    for (let i = 0; i < before.length; i++) {
      expect(Math.abs(after[i].top - before[i].top)).toBeLessThan(2);
      expect(Math.abs(after[i].height - before[i].height)).toBeLessThan(2);
    }
  } finally {
    releaseImages();
    await page.unrouteAll({ behavior: "wait" });
  }
});

test("sur mobile, les images éloignées sont demandées à l’approche du défilement", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Vérification du chargement mobile");
  const session = await page.context().newCDPSession(page);
  await session.send("Network.emulateNetworkConditions", {
    offline: false,
    latency: 40,
    downloadThroughput: 2_000_000,
    uploadThroughput: 1_000_000,
    connectionType: "cellular4g",
  });
  const requested = new Set<string>();
  page.on("request", (request) => {
    const match = new URL(request.url()).pathname.match(
      /\/images\/(formation|artillery|infiltration|nuke|tank|battleship|infanterie|airborne)-fr-\d+\.webp$/,
    );
    if (match) requested.add(match[1]);
  });
  await page.goto("/", { waitUntil: "networkidle" });
  expect(requested.size).toBeLessThan(8);

  const cards = page.locator(operationImages);
  for (const image of await cards.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element) =>
            (element as HTMLImageElement).complete &&
            (element as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  expect(requested.size).toBe(8);
});
