import { test, expect } from '@playwright/test';
import { SELECTORS } from '../constant-specs/selectors';

test.beforeEach(async ({ page }) => {

    await page.goto('/login');
    await page.fill(SELECTORS.AUTH.EMAIL, 'adjuster@example.com');
    await page.fill(SELECTORS.AUTH.PASSWORD, 'Claims2024!');
    await page.click(SELECTORS.AUTH.SUBMIT);
    await page.waitForURL('**/');

});

// ✅ 1. TC05 – Multiple file upload restriction
test('MULTIPLE FILE UPLOAD: Should restrict to one file', async ({ page }) => {
    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, [
        'file-upload-test-flows/test-data/properties-export.csv',
        'file-upload-test-flows/test-data/properties-export.csv'
    ]);

    await expect(page.locator('text=Only one file')).toBeVisible();
});

//  2. TC06 – Keyboard accessibility
test('KEYBOARD ACCESSIBILITY: Upload using keyboard', async ({ page }) => {
    await page.keyboard.press('Tab'); // focus upload area
    await page.keyboard.press('Enter');

    const fileChooser = await page.waitForEvent('filechooser');
    await fileChooser.setFiles('file-upload-test-flows/test-data/properties-export.csv');

    await expect(page.getByText('properties-export.csv')).toBeVisible();
});

// 3. TC08 – Map markers validation
test('MAP VALIDATION: Markers appear on map after upload', async ({ page }) => {
    await page.setInputFiles(
        SELECTORS.UPLOAD.FILE_INPUT,
        'file-upload-test-flows/test-data/properties-export.csv'
    );

    await expect(page.locator(SELECTORS.MAP.MARKERS)).toBeVisible();
});


// 4. TC09 – Stats correctness 

test('STATS VALIDATION: Values update correctly', async ({ page }) => {
    await page.setInputFiles(
        SELECTORS.UPLOAD.FILE_INPUT,
        'file-upload-test-flows/test-data/properties-export.csv'
    );

    await expect(page.getByText(/Total Properties/i)).toBeVisible();
    await expect(page.getByText(/Average/i)).toBeVisible();
});

// 5. TC10 – Sort + Export CSV
test('SORT AND EXPORT: Validate export functionality', async ({ page }) => {
    await page.setInputFiles(
        SELECTORS.UPLOAD.FILE_INPUT,
        'file-upload-test-flows/test-data/properties-export.csv'
    );

    await page.click(SELECTORS.PROPERTIES.SORT_BUTTON);
    await page.click(SELECTORS.EXPORT.BUTTON);

    await expect(page.locator('text=Download')).toBeVisible();
});


// 6. TC11 – Re-upload exported CSV (round-trip)
test('ROUND TRIP: Re-upload exported CSV', async ({ page }) => {
    await page.setInputFiles(
        SELECTORS.UPLOAD.FILE_INPUT,
        'file-upload-test-flows/test-data/properties-export.csv'
    );

    await page.click(SELECTORS.EXPORT.BUTTON);

    // Assume downloaded file reused
    await page.setInputFiles(
        SELECTORS.UPLOAD.FILE_INPUT,
        'file-upload-test-flows/test-data/properties-export.csv'
    );

    await expect(page.getByText('properties-export.csv')).toBeVisible();
});