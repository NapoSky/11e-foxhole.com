import { test, expect } from '@playwright/test';
import { sectionIds, descriptionNames, pageTitles } from './helpers/translations';

// These tests run on both 'desktop' and 'mobile' projects — layout is identical.

test.describe('Page par défaut (Français, /)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('titre de page correct', async ({ page }) => {
    await expect(page).toHaveTitle(pageTitles.fr);
  });

  test('h1 contient le nom du régiment', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(descriptionNames.fr);
  });

  test('bouton Discord présent avec href discord.com', async ({ page }) => {
    const discordLink = page.locator('a[href*="discord.com"]').first();
    await expect(discordLink).toBeVisible();
  });

  test('bouton YouTube présent avec href youtube.com', async ({ page }) => {
    const ytLink = page.locator('a[href*="youtube.com"]').first();
    await expect(ytLink).toBeVisible();
  });

  test('image de fond dans la section hero', async ({ page }) => {
    const heroSection = page.locator(`[id="${sectionIds.fr.Description}"]`).first();
    await expect(heroSection).toBeVisible();
    const img = heroSection.locator('img').first();
    await expect(img).toBeVisible();
    const src = await img.getAttribute('src');
    expect(src).toBeTruthy();
  });
});

test.describe('Ancres de section présentes dans le DOM (/)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('ancre "Le Régiment" présente', async ({ page }) => {
    await expect(page.locator(`[id="${sectionIds.fr.Description}"]`).first()).toBeAttached();
  });

  test('ancre "Les Activités" présente', async ({ page }) => {
    await expect(page.locator(`[id="${sectionIds.fr.Activities}"]`).first()).toBeAttached();
  });

  test('ancre "Les Opérations" présente', async ({ page }) => {
    await expect(page.locator(`[id="${sectionIds.fr.Operations}"]`).first()).toBeAttached();
  });

  test('ancre "Pied de page" présente', async ({ page }) => {
    await expect(page.locator(`[id="${sectionIds.fr.Footer}"]`).first()).toBeAttached();
  });
});

test.describe('Section Activités', () => {
  test('5 titres d\'activités rendus (h3)', async ({ page }) => {
    await page.goto('/');
    const activitiesSection = page.locator(`section[id="${sectionIds.fr.Activities}"]`);
    await expect(activitiesSection).toBeVisible();
    const activityTitles = activitiesSection.locator('h3');
    await expect(activityTitles).toHaveCount(5);
  });
});

test.describe('Section Opérations', () => {
  test('8 cartes d\'opération rendues', async ({ page }) => {
    await page.goto('/');
    const opsSection = page.locator(`section[id="${sectionIds.fr.Operations}"]`);
    await expect(opsSection).toBeVisible();
    // Each operation card is wrapped in a <div class="pb-6">
    const opCards = opsSection.locator('div.pb-6');
    await expect(opCards).toHaveCount(8);
  });

  test('chaque carte contient une image', async ({ page }) => {
    await page.goto('/');
    const opsSection = page.locator(`section[id="${sectionIds.fr.Operations}"]`);
    const opImages = opsSection.locator('div.pb-6 img');
    await expect(opImages).toHaveCount(8);
  });
});

test.describe('Footer — liens sociaux', () => {
  test('lien Discord visible', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator(`[id="${sectionIds.fr.Footer}"]`);
    await expect(footer).toBeVisible();
    await expect(footer.locator('a[aria-label="Discord"]')).toBeVisible();
  });

  test('lien Youtube visible', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator(`[id="${sectionIds.fr.Footer}"]`);
    await expect(footer.locator('a[aria-label="Youtube"]')).toBeVisible();
  });
});

test.describe('Page /fr (locale explicite)', () => {
  test('même titre français que /', async ({ page }) => {
    await page.goto('/fr');
    await expect(page).toHaveTitle(pageTitles.fr);
  });

  test('h1 contient le nom du régiment en français', async ({ page }) => {
    await page.goto('/fr');
    await expect(page.locator('h1')).toContainText(descriptionNames.fr);
  });
});

test.describe('Page /en — smoke test', () => {
  test('titre de page en anglais', async ({ page }) => {
    await page.goto('/en');
    await expect(page).toHaveTitle(pageTitles.en);
  });

  test('h1 contient le nom anglais du régiment', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('h1')).toContainText(descriptionNames.en);
  });

  test('ancre de section anglaise présente', async ({ page }) => {
    await page.goto('/en');
    await expect(
      page.locator(`[id="${sectionIds.en.Description}"]`).first()
    ).toBeAttached();
  });
});
