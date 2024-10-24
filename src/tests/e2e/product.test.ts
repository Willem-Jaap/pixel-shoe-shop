import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/product/classic-runner');

    expect(await page.textContent('h1')).toBe('Classic Runner');
});

test('can add to cart', async ({ page }) => {
    await page.goto('/product/classic-runner');

    await page.click('[data-testid="product-increase"]');
    await page.click('[data-testid="product-increase"]');
    await page.click('[data-testid="product-add-to-cart"]');

    // product-added-to-cart is a toast notification should be visible
    await page.waitForSelector('[data-testid="product-added-to-cart"]');

    // Check the content of the toast notification
    expect(await page.textContent('[data-testid="product-added-to-cart"]')).toContain(
        'Classic Runner',
    );
});

test('has discount with 4 products', async ({ page }) => {
    await page.goto('/product/classic-runner');

    await page.click('[data-testid="product-increase"]');
    await page.click('[data-testid="product-increase"]');
    await page.click('[data-testid="product-increase"]');

    // data-testid="product-discount" should be visible
    await page.waitForSelector('[data-testid="product-discount"]');
    expect(await page.textContent('[data-testid="product-discount"]')).toContain('You save');
});
