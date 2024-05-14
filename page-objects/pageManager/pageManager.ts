import { Page } from "@playwright/test";
import { HomePage } from "../woocommerce/homePage";
import { ViewCartPage } from "../woocommerce/viewCartPage";
import { CheckoutCustomerDetailsPage } from "../checkout/checkoutCustomerDetailsPage";
import { CheckoutCustomerSendPhoneCodePage } from "../checkout/checkoutCustomerSendCodePage";
import { CheckoutCustomerVerifyPhoneCodePage } from "../checkout/checkoutCustomerVerifyCodePage";
import { CheckoutCustomerPaymentOptionsPage } from "../checkout/checkoutCustomerPaymentOptionsPage";
import { CheckoutCustomerOrderCompletedPage } from "../checkout/checkoutCustomerOrderCompletedPage";
import { CustomerOrderReceivedPage } from "../woocommerce/customerOrderReceivedPage";

export class PageManager {
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly viewCartPage: ViewCartPage
    private readonly checkoutCustomerDetailsPage: CheckoutCustomerDetailsPage
    private readonly checkoutCustomerSendPhoneCodePage: CheckoutCustomerSendPhoneCodePage
    private readonly checkoutCustomerVerifyPhoneCodePage: CheckoutCustomerVerifyPhoneCodePage
    private readonly checkoutCustomerPaymentOptionsPage: CheckoutCustomerPaymentOptionsPage
    private readonly checkoutCustomerOrderCompletedPage: CheckoutCustomerOrderCompletedPage
    private readonly customerOrderReceivedPage: CustomerOrderReceivedPage

    constructor(page: Page){
        this.page = page
        this.homePage = new HomePage(this.page)
        this.viewCartPage = new ViewCartPage(this.page)
        this.checkoutCustomerDetailsPage = new CheckoutCustomerDetailsPage(this.page)
        this.checkoutCustomerSendPhoneCodePage = new CheckoutCustomerSendPhoneCodePage(this.page)
        this.checkoutCustomerVerifyPhoneCodePage = new CheckoutCustomerVerifyPhoneCodePage(this.page)
        this.checkoutCustomerPaymentOptionsPage = new CheckoutCustomerPaymentOptionsPage(this.page)
        this.checkoutCustomerOrderCompletedPage = new CheckoutCustomerOrderCompletedPage(this.page)
        this.customerOrderReceivedPage = new CustomerOrderReceivedPage(this.page)
    }

    HomePage(){
        return this.homePage
    }

    ViewCartPage(){
        return this.viewCartPage
    }

    ViewCheckoutCustomerDetailsPage(){
        return this.checkoutCustomerDetailsPage
    }

    ViewCheckoutCustomerSendPhoneCodePage(){
        return this.checkoutCustomerSendPhoneCodePage
    }

    ViewCheckoutCustomerVerifyPhoneCodePage(){
        return this.checkoutCustomerVerifyPhoneCodePage
    }

    ViewCheckoutCustomerPaymentOptionsPage(){
        return this.checkoutCustomerPaymentOptionsPage
    }

    ViewCheckoutCustomerOrderCompletedPage(){
        return this.checkoutCustomerOrderCompletedPage
    }

    ViewCustomerOrderReceivedPage(){
        return this.customerOrderReceivedPage
    }
}