import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class CheckoutCustomerSendPhoneCodePage extends HelperBase{
    readonly customerSendCodeText: Locator
    readonly sendCodeButton: Locator

    constructor(page: Page){
        super(page)
        this.customerSendCodeText = page.locator('[data-testid=cta-text-message]')
        this.sendCodeButton = page.locator('.send-code-button')
    }

    async verifyCustomerSendCodeSection() {
        await expect(this.customerSendCodeText).toBeVisible({timeout: this.expectTimeout })
    }

    async clickSendCodeButton() {
        await this.sendCodeButton.click()
        await this.page.waitForLoadState();
    }
}