import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class HomePage extends HelperBase{
    readonly addCartButton: Locator

    constructor(page: Page){
        super(page)
        this.addCartButton = page.locator('.products li')
    }

    /**
     * This method adds a product to cart based on its position
     * @param itemnum - item number which you want to add (from top-left)
     */
    async addItemToCart(itemnum: number) {
        const item = this.addCartButton.nth(itemnum -1).locator('a')
        await item.nth(1).click()
        await this.page.waitForResponse(resp => resp.url().includes('?wc-ajax=add_to_cart') && resp.status() === 200)
        await this.waitForNumberOfSeconds(1)
    }

    /**
     * This method verify view cart based on its position
     * @param itemnum - item which you want to verify (from top-left)
     */
    async verifyViewCart(itemnum: number) {
        const item = this.addCartButton.nth(itemnum -1).locator('a')
        await expect(item.nth(2)).toHaveText('View cart')
    }

    /**
     * This method clicks on view cart button based on its position
     * @param itemnum - item which you want to click (from top-left)
     */
    async clickViewCartbutton(itemnum: number){
        const item = this.addCartButton.nth(itemnum -1).locator('a')
        await item.nth(2).click()
        await this.page.waitForURL("**/cart/")
    }
}