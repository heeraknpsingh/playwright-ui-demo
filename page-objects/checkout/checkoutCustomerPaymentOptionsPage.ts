import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class CheckoutCustomerPaymentOptionsPage extends HelperBase{
    readonly paymentOptionsMessage: Locator
    readonly paymentOptionsRadioButton: Locator
    readonly payAEDButton: Locator
    
    constructor(page: Page){
        super(page)
        this.paymentOptionsMessage = page.locator('[data-testid=payment-plan-selection-message]')
        this.paymentOptionsRadioButton = page.locator('.sc-fiCwlc.dRoWXC > div')
        this.payAEDButton =  page.locator('[data-testid=pay-button]')
    }

    async selectPaymentOption(num: number) {
        await expect(this.paymentOptionsMessage).toBeVisible({timeout: this.expectTimeout})
        await this.paymentOptionsRadioButton.nth(num -1).click()
        await expect(this.payAEDButton).toBeVisible()
        await this.payAEDButton.click()
    }
}