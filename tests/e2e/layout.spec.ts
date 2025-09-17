import { test, expect } from "@playwright/test";

test("header and footer are visible on homepage", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  const header = page.locator("header");
  const footer = page.locator("footer");

  await expect(header).toBeVisible();
  await expect(footer).toBeVisible();

  const homeLink = page.locator('header nav a[href="/"]');
  await expect(homeLink).toBeVisible();
  await expect(homeLink).toHaveText("Home");

  const currentYear = new Date().getFullYear();
  const copyrightText = page.locator("footer p");
  await expect(copyrightText).toHaveText(`© ${currentYear}`);
});
