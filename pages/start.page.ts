import { Locator, Page } from '@playwright/test'

export class StartPage {
    readonly page: Page
    readonly giveNowButton: Locator

    constructor(page: Page) {
        this.page = page
        this.giveNowButton = page.locator('[title="Donate Button"]')
    }

    async goto() {
        await this.page.goto('https://data.fundraiseup.com/qa-test-7R58U3/')
    }

    async clickGiveNow() {
        await this.giveNowButton.click()
    }
}
