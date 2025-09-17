import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test("should not have any automatically detectable accessibility issues in light mode", async ({
    page,
  }) => {
    await page.goto("http://localhost:4321/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("should not have any automatically detectable accessibility issues in dark mode", async ({
    page,
  }) => {
    await page.goto("http://localhost:4321/");

    await page.emulateMedia({ colorScheme: "dark" });

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
