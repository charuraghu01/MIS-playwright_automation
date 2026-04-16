import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

// ✅ ADD THIS
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

export default defineConfig({
    use: {
        baseURL: 'https://geo-qa-test.vercel.app',
        headless: true,
    },

    reporter: [
        ['html', { outputFolder: `playwright-report-${timestamp}`, open: 'never' }]
    ],
});