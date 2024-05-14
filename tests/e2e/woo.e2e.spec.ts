import test from "@playwright/test";
import { PageManager } from "../../page-objects/pageManager/pageManager";

test.beforeEach(async({page}) => {
  await page.goto("/")
})

test('e2e flow', async({page}) => {
    const pm = new PageManager(page)
    const item: number = 1
    const data = 'pay'
    const phone = '+971504268800'
    const code = phone.slice(phone.length-4, phone.length)
    
    await pm.HomePage().addItemToCart(item)
    await pm.HomePage().addItemToCart(item)
    await pm.HomePage().verifyViewCart(item)
    await pm.HomePage().clickViewCartbutton(item)

    await pm.ViewCartPage().verifyItemsQuantity(2)
    await pm.ViewCartPage().verifyTotalCartValue(10)
    await pm.ViewCartPage().clickProceedToCheckoutButton()

    await pm.ViewCheckoutCustomerDetailsPage().verifyCustomerDetailsSection()
    await pm.ViewCheckoutCustomerDetailsPage().clickPostpayOptionRadioButton()

    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerFirstName(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerLastName(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerCompanyName(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerBillingAddress1(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerBillingAddress2(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerCity(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerState(data)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerPhone(phone)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerEmail(`${data}@${data}.io`)
    await pm.ViewCheckoutCustomerDetailsPage().fillCustomerComment(data)
    await pm.ViewCheckoutCustomerDetailsPage().clickProceedToPostpayButton()
    await pm.ViewCheckoutCustomerSendPhoneCodePage().verifyCustomerSendCodeSection()
    await pm.ViewCheckoutCustomerSendPhoneCodePage().clickSendCodeButton()
    await pm.ViewCheckoutCustomerVerifyPhoneCodePage().fillVerificationCode(code)
    await pm.ViewCheckoutCustomerPaymentOptionsPage().selectPaymentOption(1)
    await pm.ViewCheckoutCustomerOrderCompletedPage().verifySuccessOrderProcessing()
    
    await pm.ViewCustomerOrderReceivedPage().verifyOrderReceived()
    await pm.ViewCustomerOrderReceivedPage().verifyTableColumnValue('Paayment method:', '3 interest-free payments with Postpay')
    await pm.ViewCustomerOrderReceivedPage().verifyTableColumnValue('Subtotal:', 'د.إ10.00')
    await pm.ViewCustomerOrderReceivedPage().verifyTableColumnValue('Total:', 'د.إ10.00')
})