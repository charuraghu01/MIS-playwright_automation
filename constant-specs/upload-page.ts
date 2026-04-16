import { Page, Locator } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

export class UploadPage {
    readonly page: Page;
    readonly fileInput: Locator;
    readonly map: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fileInput = page.locator('input[type="file"]');
        this.map = page.locator('.leaflet-container');
    }

    async uploadCSV(csvContent: string) {
        const filePath = path.join(os.tmpdir(), `test-${Date.now()}.csv`);
        fs.writeFileSync(filePath, csvContent);

        await Promise.all([
            this.page.waitForResponse(res =>
                res.url().includes('/api/upload') && res.status() === 200
            ),
            this.fileInput.setInputFiles(filePath),
        ]);

        fs.unlinkSync(filePath);
    }
}