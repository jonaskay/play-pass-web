import { test, expect } from "@playwright/test";

test("pagination shows correct pagination information", async ({ page }) => {
  await page.goto("http://localhost:4321/ranking/3");

  const activePage = page.locator('[aria-current="page"]');
  await expect(activePage).toHaveText("3");

  const pageInfo = page.locator(
    "text=/Showing \\d+-\\d+ of \\d+ games \\(Page \\d+ of \\d+\\)/",
  );
  await expect(pageInfo).toHaveText(
    "Showing 101-150 of 220 games (Page 3 of 5)",
  );

  const orderedList = page.locator("ol");
  await expect(orderedList).toBeVisible();
  await expect(orderedList).toHaveAttribute("start", "101");
});

test("pagination navigation works correctly", async ({ page }) => {
  await page.goto("http://localhost:4321/");

  const activePage1 = page.locator('[aria-current="page"]');
  await expect(activePage1).toHaveText("1");

  await page.click('nav a:has-text("3")');

  await expect(page).toHaveURL(/ranking\/3/);
  const activePage3 = page.locator('[aria-current="page"]');
  await expect(activePage3).toHaveText("3");

  await page.click('nav a:has-text("Next")');

  await expect(page).toHaveURL(/ranking\/4/);
  const activePage4 = page.locator('[aria-current="page"]');
  await expect(activePage4).toHaveText("4");

  await page.click('nav a:has-text("Previous")');

  await expect(page).toHaveURL(/ranking\/3/);
  const activePageBack3 = page.locator('[aria-current="page"]');
  await expect(activePageBack3).toHaveText("3");
});

test("pagination accessibility attributes are correct", async ({ page }) => {
  await page.goto("http://localhost:4321/ranking/3");

  const nav = page.locator('nav[aria-labelledby="pagination"]');
  await expect(nav).toBeVisible();

  const heading = page.locator("#pagination");
  await expect(heading).toHaveText("Pagination");

  const activePage = page.locator('[aria-current="page"]');
  await expect(activePage).toHaveAttribute("aria-current", "page");
  await expect(activePage).toHaveText("3");
});
