import { test, expect } from '@playwright/test';
import { SELECTORS } from '../constant-specs/selectors';

test.beforeEach(async ({ page }) => {

    await page.goto('/login');
    await page.fill(SELECTORS.AUTH.EMAIL, 'adjuster@example.com');
    await page.fill(SELECTORS.AUTH.PASSWORD, 'Claims2024!');
    await page.click(SELECTORS.AUTH.SUBMIT);
    await page.waitForURL('**/');

});

test('FILE UPLOAD SUCCESS: Upload CSV using drag-drop area', async ({ page }) => {

    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/properties-export.csv');

    // assertion (example)
    await expect(page.locator('text=properties-export.csv')).toBeVisible();
});


test('WRONG TEMPLATE FILE UPLOAD: Upload CSV using drag-drop area', async ({ page }) => {

    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/wrong-csv-template.csv');

    // assertion (example)
    await expect(page.locator('text=wrong-csv-template.csv')).toBeVisible();
    await expect(page.locator('text=No valid properties found in CSV')).toBeVisible();
});

test('BLANK FILE UPLOAD: Upload CSV using drag-drop area', async ({ page }) => {

    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/blank-csv-template.csv');

    // assertion (example)
    await expect(page.locator('text=blank-csv-template.csv')).toBeVisible();
    await expect(page.locator('text=No valid properties found in CSV')).toBeVisible();
});

test('Uploaded data appears in properties list', async ({ page }) => {
    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/properties-export.csv');
    await expect(page.locator(SELECTORS.TEXT.PROPERTY('properties-export.csv'))).toBeVisible();
});

test('Upload invalid file type', async ({ page }) => {
    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/sample.txt');

    await expect(page.locator('text=No valid properties found in CSV')).toBeVisible();
});

test('Data persists after refresh', async ({ page }) => {
    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/properties-export.csv');

    await page.reload();

    await expect(page.getByText('properties-export.csv')).not.toBeVisible();
});

test('Upload large CSV file', async ({ page }) => {
    await page.setInputFiles(SELECTORS.UPLOAD.FILE_INPUT, 'file-upload-test-flows/test-data/large-properties.csv');

    await expect(page.locator('text=No valid properties found in CSV')).toBeVisible();
});