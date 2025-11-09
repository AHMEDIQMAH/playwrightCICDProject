import { test, expect } from '@playwright/test';

test('my first test - visit a website', async ({ page }) => {

    await page.goto('https://playwright.dev');

    await expect(page).toHaveTitle(/Playwright/);


}); 