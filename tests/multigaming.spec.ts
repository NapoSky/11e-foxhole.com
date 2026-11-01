import { test, expect } from '@playwright/test';
import fr from '../src/locales/fr/common.json';
import en from '../src/locales/en/common.json';
import cn from '../src/locales/cn/common.json';

const pages = [
  { path: '/', locale: 'fr', copy: fr.homepage },
  { path: '/fr', locale: 'fr', copy: fr.homepage },
  { path: '/en', locale: 'en', copy: en.homepage },
  { path: '/cn', locale: 'cn', copy: cn.homepage },
] as const;

test.describe('Multigaming — contenu statique et SEO', () => {
  test.use({ javaScriptEnabled: false });

  for (const { path, locale, copy } of pages) {
    test(`${path} contient les textes et liens localisés sans JavaScript`, async ({ page }) => {
      await page.goto(path);
      const section = page.locator(`section[id="${copy.sections.Multigaming}"]`);
      await expect(section.locator('h2')).toHaveText(copy.multigaming.title);
      await expect(section.locator('p')).toHaveText(copy.multigaming.description);
      const destination = locale === 'fr'
        ? 'https://multigaming.11e-foxhole.com/'
        : 'https://multigaming.11e-foxhole.com/en/';
      const action = section.getByRole('link', { name: copy.multigaming.action });
      await expect(action).toHaveAttribute('href', destination);
      await expect(action).toHaveAttribute('hreflang', locale === 'fr' ? 'fr' : 'en');
      const communityLink = page.locator(`section[id="${copy.sections.Activities}"]`)
        .getByRole('link', { name: copy.multigaming.communityLink });
      await expect(communityLink).toHaveAttribute('href', destination);
      await expect(page).toHaveTitle(copy.meta.title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', copy.meta.description);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href', locale === 'fr' ? 'https://11e-foxhole.com/' : `https://11e-foxhole.com/${locale}`,
      );
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toHaveText(copy.descriptionData.name);
      expect(await section.evaluate(element => {
        const previous = element.previousElementSibling;
        return {
          previousId: previous?.id,
          followedByFooter: element.nextElementSibling?.textContent?.includes('© Copyright'),
        };
      })).toEqual({ previousId: copy.sections.Operations, followedByFooter: true });
      if (locale === 'cn') {
        await expect(section).toContainText('主要使用法语和英语交流');
        await expect(action).toContainText('法语 / 英语');
      }
    });
  }
});

test.describe('Multigaming — liens et header préservé', () => {
  test('les quatre liens restent centrés et les drapeaux restent à droite', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Géométrie du header desktop');
    for (const width of [640, 768, 1024, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      for (const path of ['/fr', '/en', '/cn']) {
        await page.goto(path);
        const menu = page.locator('#headerNav');
        const boxes = await menu.locator('a').evaluateAll(links => links.map(link => {
          const box = link.getBoundingClientRect();
          return { left: box.left, right: box.right };
        }));
        expect(boxes).toHaveLength(4);
        const left = Math.min(...boxes.map(box => box.left));
        const right = Math.max(...boxes.map(box => box.right));
        expect(Math.abs((left + right) / 2 - width / 2)).toBeLessThan(2);
        const firstFlag = await menu.locator('button[aria-label="Français"]').boundingBox();
        const lastFlag = await menu.locator('button[aria-label="中文"]').boundingBox();
        expect(right).toBeLessThan(firstFlag!.x);
        expect(Math.abs(lastFlag!.x + lastFlag!.width - (width - 16))).toBeLessThan(2);
      }
    }
  });

  for (const { path, locale, copy } of pages) {
    test(`${path} centre les quatre entrées du header et ouvre le site Multigaming`, async ({ page, isMobile }) => {
      const requests: string[] = [];
      page.on('request', request => {
        if (new URL(request.url()).hostname === 'multigaming.11e-foxhole.com') {
          requests.push(request.url());
        }
      });
      await page.route('https://multigaming.11e-foxhole.com/**', route =>
        route.fulfill({ contentType: 'text/html', body: '<html><body>Multigaming</body></html>' }),
      );
      await page.goto(path);
      const menu = isMobile ? page.locator('nav.fixed') : page.locator('#headerNav');
      if (isMobile) await page.getByRole('button', { name: 'Menu Button', exact: true }).click();
      await expect(menu.getByRole('link')).toHaveText([
        copy.sections.Description, copy.sections.Activities, copy.sections.Operations, copy.sections.Multigaming,
      ]);
      await menu.getByRole('link', { name: copy.sections.Multigaming, exact: true }).click();
      await expect.poll(() => decodeURIComponent(new URL(page.url()).hash)).toBe(`#${copy.sections.Multigaming}`);
      if (isMobile) {
        await expect(menu).not.toBeVisible();
      }
      await expect(page.locator(`section[id="${copy.sections.Multigaming}"]`)).toBeInViewport();
      expect(requests).toEqual([]);
      const link = page.locator(`section[id="${copy.sections.Activities}"]`)
        .getByRole('link', { name: copy.multigaming.communityLink });
      await link.click();
      await expect(page).toHaveURL(locale === 'fr'
        ? 'https://multigaming.11e-foxhole.com/'
        : 'https://multigaming.11e-foxhole.com/en/');
    });
  }
});
