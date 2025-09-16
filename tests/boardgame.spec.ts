import { test, expect } from "@playwright/test";

test.describe("Individual game pages", () => {
  test("displays game name, score, and rank for a specific game", async ({
    page,
  }) => {
    await page.goto("/boardgame/1");

    const gameNameHeading = page.locator("h1");
    await expect(gameNameHeading).toContainText("Crystal Realms");

    const rankElement = page.locator("dd").nth(0);
    await expect(rankElement).toBeVisible();
    await expect(rankElement).toContainText("1");

    const scoreElement = page.locator("dd").nth(1);
    await expect(scoreElement).toBeVisible();
    await expect(scoreElement).toContainText("94%");
  });
});
