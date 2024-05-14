import { Page, expect, Locator } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";


export class ViewCartPage extends HelperBase {
    readonly quantityInputBox: Locator
    readonly cartTotalsTable: Locator
    readonly proceedToCheckoutButton: Locator

    constructor(page: Page){
        super(page)
        this.quantityInputBox = page.locator('.qty')
        this.cartTotalsTable = page.locator('.cart_totals .shop_table')
        this.proceedToCheckoutButton = page.locator('.checkout-button ')
    }

    /**
     * This method verifies the product quantities on cart page
     * @param qty - product quantity you want to verify
     */
    async verifyItemsQuantity(qty: number) {
        await this.waitForNumberOfSeconds(1)
        await expect(this.quantityInputBox).toHaveValue(qty.toString())
    }

    /**
     * This method verify total amount value in cart total table
     * @param amount - amount value you want to verify (product value * number of items)
     */
    async verifyTotalCartValue(amount: number){
        await this.waitForNumberOfSeconds(1)
        await expect(this.cartTotalsTable).toBeVisible()
        await expect(this.cartTotalsTable.locator('tbody').locator('tr').nth(1).locator('td')).toBeVisible()
        await expect(this.cartTotalsTable.locator('tbody').locator('tr').nth(1).locator('td')).toContainText(`${amount.toString()}.00`)
    }

    async clickProceedToCheckoutButton(){
        await this.waitForNumberOfSeconds(1)
        await this.proceedToCheckoutButton.click()
        await this.page.waitForURL("**/checkout/")
    }
}