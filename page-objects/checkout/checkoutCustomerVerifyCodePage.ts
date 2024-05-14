import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class CheckoutCustomerVerifyPhoneCodePage extends HelperBase{
    readonly verifyButton: Locator
    readonly otpCodeInputText: Locator

    constructor(page: Page){
        super(page)
        this.verifyButton = page.locator('.submit-opt-button')
        this.otpCodeInputText = page.locator('[data-testid="otp-code-input"]')
    }

    async fillVerificationCode(code: string){
        await expect(this.otpCodeInputText).toBeVisible()
        await expect(this.verifyButton).toBeDisabled()
        await this.otpCodeInputText.fill(code)
        await expect(this.verifyButton).toHaveText('Please Wait')
    }
}