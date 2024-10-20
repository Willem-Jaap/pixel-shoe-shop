import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    expect(await page.textContent('h1')).toBe('Run Faster, Go Further');
});

test('has cart button', async ({ page }) => {
    await page.goto('/');

    expect(await page.textContent('[data-testid=cart-button]')).toBe('Cart (0)');
});

test('has 6 products', async ({ page }) => {
    await page.goto('/');

    const products = await page.$$('data-testid=product-card');
    expect(products).toHaveLength(6);
});

test('can navigate to product page', async ({ page }) => {
    await page.goto('/');

    await page.click('[data-testid=view-product]');
    // Wait for the page to navigate
    await page.waitForURL('/product/classic-runner');
    expect(page.url()).toContain('/product/classic-runner');
    expect(await page.textContent('h1')).toBe('Classic Runner');
});
