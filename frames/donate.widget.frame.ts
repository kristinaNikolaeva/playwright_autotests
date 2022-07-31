import { expect, FrameLocator, Locator, Page } from '@playwright/test'

export class DonateWidgetFrame {
    readonly page: Page
    readonly frame: FrameLocator
    readonly monthlyBtn: Locator
    readonly moneyInput: Locator
    readonly donateMoneyBtn: Locator
    readonly coverFeeCheckbox: Locator
    readonly creditCardBtn: Locator
    readonly cardNumberInput: Locator
    readonly cardExpireInput: Locator
    readonly cardCvcInput: Locator
    readonly continueBtn: Locator
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly finalDonateBtn: Locator
    readonly cardErrorTitle: Locator

    constructor(page: Page) {
        this.page = page
        this.frame = page.frameLocator('[title="Donation Widget"]')

        this.monthlyBtn = this.frame.locator('[data-qa="give-monthly"]')
        this.moneyInput = this.frame.locator('[data-qa="amount"]')
        this.donateMoneyBtn = this.frame.locator('[data-qa="donate-button"]')

        this.coverFeeCheckbox = this.frame.locator(
            '[data-qa="cover-fee-checkbox"]'
        )
        this.creditCardBtn = this.frame.locator('[data-qa="cc-button"]')

        this.cardNumberInput = this.frame
            .frameLocator('[title="Secure card number input frame"]')
            .locator('[name="cardnumber"]')
        this.cardExpireInput = this.frame
            .frameLocator('[title="Secure expiration date input frame"]')
            .locator('[name="exp-date"]')
        this.cardCvcInput = this.frame
            .frameLocator('[title="Secure CVC input frame"]')
            .locator('[name="cvc"]')
        this.continueBtn = this.frame.locator('[data-qa="card-continue"]')

        this.firstNameInput = this.frame.locator(
            '[data-qa="personal-first-name"]'
        )
        this.lastNameInput = this.frame.locator(
            '[data-qa="personal-last-name"]'
        )
        this.emailInput = this.frame.locator('[data-qa="personal-email"]')
        this.finalDonateBtn = this.frame.locator('[data-qa="privacy-continue"]')
        this.cardErrorTitle = this.frame.locator(
            '[data-qa="card-continue-error-title"]'
        )
    }

    async clickMontlyButton() {
        await this.monthlyBtn.click()
    }
    async inputMoneyValue(value: string) {
        await this.moneyInput.fill(value)
    }

    async clickDonateMoneyButton() {
        await this.donateMoneyBtn.click()
        await expect(this.donateMoneyBtn).not.toBeVisible()
    }

    async uncheckCoverFeeCheckbox() {
        await this.coverFeeCheckbox.uncheck()
        await expect(this.coverFeeCheckbox).not.toBeChecked()
    }

    async clickCreditCardButton() {
        await this.creditCardBtn.click()
        await expect(this.creditCardBtn).not.toBeVisible()
    }
    async sendCardData(number: string, date: string, cvc: string) {
        await this.cardNumberInput.fill(number)
        await this.cardExpireInput.fill(date)
        await this.cardCvcInput.fill(cvc)
        await this.continueBtn.click()
    }
    async sendPersonalInformation(
        firstName: string,
        lastName: string,
        email: string
    ) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.finalDonateBtn.click()
        await expect(this.finalDonateBtn).not.toBeVisible()
    }
    async checkCardErrorMessage(expectedTitle: string) {
        await this.cardErrorTitle.waitFor()
        await expect(this.cardErrorTitle).toContainText(expectedTitle)
    }
}
