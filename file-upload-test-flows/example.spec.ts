import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

// ── Helpers 

/** Log in with the provided credentials and navigate to the map. */
async function login(page: any) {
    await page.goto('/login');
    await page.fill('input[type="email"], input[type="text"]', 'adjuster@example.com');
    await page.fill('input[type="password"]', 'Claims2024!');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/');
}

/** Write a CSV string to a temp file and upload it via the file input. */
async function uploadCSV(page: any, csvContent: string) {
    const tmpFile = path.join(os.tmpdir(), `test-${Date.now()}.csv`);
    fs.writeFileSync(tmpFile, csvContent);
    await page.setInputFiles('input[type="file"]', tmpFile);
    fs.unlinkSync(tmpFile);
}

// ── Tests

test.beforeEach(async ({ page }) => {
    await login(page);
});

test('happy path: valid CSV loads markers onto the map', async ({ page }) => {
    const csv = [
        'Address,Latitude,Longitude,Property value',
        '123 Main St,37.7749,-122.4194,850000',
        '456 Oak Ave,37.7849,-122.4094,920000',
        '789 Pine Rd,37.7649,-122.4294,750000',
    ].join('\n');

    await uploadCSV(page, csv);
    await page.waitForTimeout(2000);

    // All three addresses should appear in the sidebar
    await expect(page.locator('text=123 Main St')).toBeVisible();;
    await expect(page.locator('text=456 Oak Ave')).toBeVisible();
    await expect(page.locator('text=789 Pine Rd')).toBeVisible();

    // Map should be rendered
    await expect(page.locator('.leaflet-container')).toBeVisible();
});

test('wrong column names: uploads but nothing appears', async ({ page }) => {
    // TODO: upload a CSV with columns Street, Lat, Long, Value instead of
    // Address, Latitude, Longitude, Property value and assert the result
});

test('single-row CSV: the only property is not shown', async ({ page }) => {
    // TODO: upload a CSV with exactly one data row and check whether
    // the property appears. What is the expected behaviour?
});

test('stats API returns expected fields', async ({ page }) => {
    // TODO: use page.request.get('/api/stats') and assert that
    // count, average, min, max, and median are present in the response
});