import { test } from '@playwright/test'
import { DonateWidgetFrame } from '../frames/donate.widget.frame'
import { StartPage } from '../pages/start.page'

test.describe.configure({ mode: 'parallel' })

test('Error message is shown when card is not correct', async ({ page }) => {
    const startPage = new StartPage(page)
    const donateWirgetFrame = new DonateWidgetFrame(page)
    await test.step('Open start page', async () => {
        await startPage.goto()
    })
    await test.step('Click Give Now button', async () => {
        await startPage.clickGiveNow()
    })
    await test.step('Click Montly button and enter money value', async () => {
        await donateWirgetFrame.clickMontlyButton()
        await donateWirgetFrame.inputMoneyValue('100')
    })
    await test.step('Click Donate Money button', async () => {
        await donateWirgetFrame.clickDonateMoneyButton()
    })
    await test.step('Uncheck "Cover transaction costs" checkbox', async () => {
        await donateWirgetFrame.uncheckCoverFeeCheckbox()
    })
    await test.step('Click Credit Card button', async () => {
        await donateWirgetFrame.clickCreditCardButton()
    })
    await test.step('Enter card data and click Donate button', async () => {
        await donateWirgetFrame.sendCardData(
            '4242 4242 4242 4242',
            '0424',
            '000'
        )
    })
    await test.step('Enter personal information', async () => {
        await donateWirgetFrame.sendPersonalInformation(
            'first name',
            'last name',
            'email@mail.com'
        )
    })
    await test.step('Check that error message is shown', async () => {
        await donateWirgetFrame.checkCardErrorMessage('Your card was declined.')
    })
})

test('DUPLICATE Error message is shown when card is not correct', async ({
    page,
}) => {
    const startPage = new StartPage(page)
    const donateWirgetFrame = new DonateWidgetFrame(page)
    await test.step('Open start page', async () => {
        await startPage.goto()
    })
    await test.step('Click Give Now button', async () => {
        await startPage.clickGiveNow()
    })
    await test.step('Click Montly button and enter money value', async () => {
        await donateWirgetFrame.clickMontlyButton()
        await donateWirgetFrame.inputMoneyValue('100')
    })
    await test.step('Click Donate Money button', async () => {
        await donateWirgetFrame.clickDonateMoneyButton()
    })
    await test.step('Uncheck "Cover transaction costs" checkbox', async () => {
        await donateWirgetFrame.uncheckCoverFeeCheckbox()
    })
    await test.step('Click Credit Card button', async () => {
        await donateWirgetFrame.clickCreditCardButton()
    })
    await test.step('Enter card data and click Donate button', async () => {
        await donateWirgetFrame.sendCardData(
            '4242 4242 4242 4242',
            '0424',
            '000'
        )
    })
    await test.step('Enter personal information', async () => {
        await donateWirgetFrame.sendPersonalInformation(
            'first name',
            'last name',
            'email@mail.com'
        )
    })
    await test.step('Check that error message is shown', async () => {
        await donateWirgetFrame.checkCardErrorMessage('Your card was declined.')
    })
})
