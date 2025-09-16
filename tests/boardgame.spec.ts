import { test, expect } from '@playwright/test';

test.describe('Individual game pages', () => {
  test('displays game name, score, and rank for a specific game', async ({ page }) => {
    // Test with game ID 1 (Crystal Realms)
    await page.goto('/boardgame/1');

    // Check that the game name is displayed as a heading
    const gameNameHeading = page.locator('h1');
    await expect(gameNameHeading).toContainText('Crystal Realms');

    // Check that the current rank is displayed
    const rankElement = page.locator('dd').nth(0); // First dd element (rank)
    await expect(rankElement).toBeVisible();
    await expect(rankElement).toContainText('1'); // Crystal Realms should be rank 1

    // Check that the current score is displayed
    const scoreElement = page.locator('dd').nth(1); // Second dd element (score)
    await expect(scoreElement).toBeVisible();
    await expect(scoreElement).toContainText('94%');

    // Check that rank and score labels are present
    await expect(page.locator('dt').nth(0)).toContainText('Current Rank:');
    await expect(page.locator('dt').nth(1)).toContainText('Current Score:');
  });

  test('displays correct information for different games', async ({ page }) => {
    // Test with game ID 2 (Dragon's Legacy: First Dawn)
    await page.goto('/boardgame/2');

    // Check that the correct game name is displayed
    const gameNameHeading = page.locator('h1');
    await expect(gameNameHeading).toContainText("Dragon's Legacy: First Dawn");

    // Check that rank and score are visible
    const rankElement = page.locator('dd').nth(0);
    const scoreElement = page.locator('dd').nth(1);
    
    await expect(rankElement).toBeVisible();
    await expect(scoreElement).toBeVisible();
    await expect(scoreElement).toContainText('92%');
  });

  test('has proper semantic structure', async ({ page }) => {
    await page.goto('/boardgame/1');

    // Check for proper heading hierarchy
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h2')).toContainText('Game Statistics');

    // Check for definition list structure
    await expect(page.locator('dl')).toBeVisible();
    await expect(page.locator('dt')).toHaveCount(2);
    await expect(page.locator('dd')).toHaveCount(2);
  });
});