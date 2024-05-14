import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class CheckoutCustomerOrderCompletedPage extends HelperBase{
    readonly verifyButton: Locator
    readonly processingSpinner: Locator
    readonly processingMessage: Locator
    readonly orderCompleteMessage: Locator
    readonly thankYouMessage: Locator

    constructor(page: Page){
        super(page)
        this.processingMessage = page.locator(':text("Give us a moment, we are processing your information...")')
        this.processingSpinner = page.locator('[data-testid=spinner]')
        this.orderCompleteMessage = page.locator(':text("Your order is complete")')
        this.thankYouMessage = page.locator(':text("Thank you for using Postpay, Heera !")')
    }

    async verifySuccessOrderProcessing(){
        await expect(this.processingSpinner.last()).toBeVisible()
        await expect(this.processingMessage.last()).toBeVisible({timeout: this.expectTimeout})
        await expect(this.orderCompleteMessage).toBeVisible({timeout: this.expectTimeout})
        await expect(this.thankYouMessage).toBeVisible({timeout: this.expectTimeout})
    }
}