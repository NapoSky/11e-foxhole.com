import { test, expect } from '@playwright/test';

// Mobile tests use the 'mobile' project (viewport 375px, isMobile: true).
// Desktop tests use the 'desktop' project (viewport 1280px, isMobile: false).
// Each describe block is scoped to one project via test.skip.

test.describe('Viewport mobile (375px) — hamburger et drawer', () => {
  test.skip(({ isMobile }) => !isMobile, 'Tests réservés au projet mobile');

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('bouton hamburger visible', async ({ page }) => {
    const hamburger = page.locator('button[aria-label="Menu Button"]');
    await expect(hamburger).toBeVisible();
  });

  test('nav desktop masquée (hidden sm:block)', async ({ page }) => {
    const desktopHeader = page.locator('#headerNav');
    await expect(desktopHeader).not.toBeVisible();
  });

  test('click hamburger ouvre le drawer', async ({ page }) => {
    await page.locator('button[aria-label="Menu Button"]').click();
    const drawer = page.locator('nav.fixed');
    await expect(drawer).toBeVisible({ timeout: 5_000 });
  });

  test('drawer contient au moins 3 liens de navigation', async ({ page }) => {
    await page.locator('button[aria-label="Menu Button"]').click();
    const drawer = page.locator('nav.fixed');
    await expect(drawer).toBeVisible({ timeout: 5_000 });
    const links = drawer.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('drawer contient le sélecteur de langue (3 boutons)', async ({ page }) => {
    await page.locator('button[aria-label="Menu Button"]').click();
    const drawer = page.locator('nav.fixed');
    await expect(drawer).toBeVisible({ timeout: 5_000 });
    await expect(drawer.locator('button[aria-label="Français"]')).toBeVisible();
    await expect(drawer.locator('button[aria-label="English"]')).toBeVisible();
    await expect(drawer.locator('button[aria-label="中文"]')).toBeVisible();
  });

  test('click backdrop ferme le drawer', async ({ page }) => {
    await page.locator('button[aria-label="Menu Button"]').click();
    const drawer = page.locator('nav.fixed');
    await expect(drawer).toBeVisible({ timeout: 5_000 });
    // Backdrop : div.fixed.inset-0 (bg-stone-900/40 z-50 via Headless UI TransitionChild)
    const backdrop = page.locator('div.fixed.inset-0').first();
    await backdrop.click();
    await expect(drawer).not.toBeVisible({ timeout: 5_000 });
  });
});

test.describe('Viewport desktop (1280px) — nav desktop', () => {
  test.skip(({ isMobile }) => !!isMobile, 'Tests réservés au projet desktop');

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('bouton hamburger non visible (sm:hidden)', async ({ page }) => {
    const hamburger = page.locator('button[aria-label="Menu Button"]');
    await expect(hamburger).not.toBeVisible();
  });

  test('nav desktop visible', async ({ page }) => {
    const desktopHeader = page.locator('#headerNav');
    await expect(desktopHeader).toBeVisible();
  });

  test('nav desktop contient au moins 3 liens de navigation', async ({ page }) => {
    const desktopHeader = page.locator('#headerNav');
    const links = desktopHeader.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test('sélecteur de langue visible dans la nav desktop', async ({ page }) => {
    const desktopHeader = page.locator('#headerNav');
    await expect(desktopHeader.locator('button[aria-label="Français"]')).toBeVisible();
    await expect(desktopHeader.locator('button[aria-label="English"]')).toBeVisible();
    await expect(desktopHeader.locator('button[aria-label="中文"]')).toBeVisible();
  });
});
