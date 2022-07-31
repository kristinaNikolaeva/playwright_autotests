import type { PlaywrightTestConfig } from '@playwright/test'
import { devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
    testDir: './tests',

    timeout: 30 * 1000,
    expect: {
        timeout: 20000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'allure-playwright',
    use: {
        headless: true,
        actionTimeout: 20000,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
        {
            name: 'pixel',
            use: {
                ...devices['Pixel 5'],
            },
        },
    ],
}

export default config
