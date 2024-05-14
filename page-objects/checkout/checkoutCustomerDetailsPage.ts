import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class CheckoutCustomerDetailsPage extends HelperBase{
    readonly customerDetailsSection: Locator
    readonly firstNameInputBox: Locator
    readonly lastNameInputBox: Locator
    readonly compNameInputBox: Locator
    readonly billingAddress1InputBox: Locator
    readonly billingAddress2InputBox: Locator
    readonly billingCityInputBox: Locator
    readonly billingStateInputBox: Locator
    readonly billingPhoneInputBox: Locator
    readonly billingEmailInputBox: Locator
    readonly billingOrderCommentsTextAreaBox: Locator
    readonly proceedToPostpayButton : Locator
    readonly postpayOptionRadioButton : Locator

    constructor(page: Page){
        super(page)
        this.customerDetailsSection = page.locator('#customer_details')
        this.firstNameInputBox = page.locator('#billing_first_name')
        this.lastNameInputBox = page.locator('#billing_last_name')
        this.compNameInputBox = page.locator('#billing_company')
        this.billingAddress1InputBox = page.locator('#billing_address_1')
        this.billingAddress2InputBox = page.locator('#billing_address_2')
        this.billingCityInputBox = page.locator('#billing_city')
        this.billingStateInputBox = page.locator('#billing_state')
        this.billingPhoneInputBox = page.locator('#billing_phone')
        this.billingEmailInputBox = page.locator('#billing_email')
        this.billingOrderCommentsTextAreaBox = page.locator('#order_comments')
        this.proceedToPostpayButton = page.locator('#place_order')
        this.postpayOptionRadioButton = page.locator('li.payment_method_postpay.wc_payment_method label')
    }

    async verifyCustomerDetailsSection() {
        await expect(this.customerDetailsSection).toBeVisible()
    }

    async fillCustomerFirstName(name: string) {
        await this.firstNameInputBox.fill(name)
    }
    
    async fillCustomerLastName(name: string) {
        await this.lastNameInputBox.fill(name)
    }

    async fillCustomerCompanyName(name: string) {
        await this.compNameInputBox.fill(name)
    }

    async fillCustomerBillingAddress1(name: string) {
        await this.billingAddress1InputBox.fill(name)
    }

    async fillCustomerBillingAddress2(name: string) {
        await this.billingAddress2InputBox.fill(name)
    }

    async fillCustomerCity(name: string) {
        await this.billingCityInputBox.fill(name)
    }

    async fillCustomerState(name: string) {
        await this.billingStateInputBox.fill(name)
    }

    async fillCustomerPhone(name: string) {
        await this.billingPhoneInputBox.fill(name)
    }

    async fillCustomerEmail(name: string) {
        await this.billingEmailInputBox.fill(name)
    }

    async fillCustomerComment(name: string) {
        await this.billingOrderCommentsTextAreaBox.fill(name)
    }

    async clickProceedToPostpayButton() {
        await this.proceedToPostpayButton.click()
        await this.page.waitForLoadState();
    }

    async clickPostpayOptionRadioButton(){
        await this.postpayOptionRadioButton.click()
    }
}