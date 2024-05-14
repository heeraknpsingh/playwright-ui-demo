import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "../helpers/helperBase";

export class CustomerOrderReceivedPage extends HelperBase{
    readonly orderDetailsTable: Locator
    readonly orderTableData: Locator
    
    constructor(page: Page){
        super(page)
        this.orderDetailsTable = page.locator('table.order_details')
        this.orderTableData = page.locator('table.order_details tfoot tr')
    }

    async verifyOrderReceived(){
        await expect(this.orderDetailsTable).toBeVisible({timeout: this.expectTimeout})
        await expect(this.orderDetailsTable).toBeInViewport();

    }

    async verifyTableColumnValue(row_key: string, row_val: string){
        const rowCount = await this.orderTableData.locator('th').count();
        for (let index = 0; index < rowCount; index++) {
            const row_key_value = await this.orderTableData.locator('th').nth(index).innerText()
            if(row_key_value === row_key){
                const cellValue = await this.orderTableData.locator('td').nth(index).innerText()
                expect(cellValue).toBe(row_val)
                break
                }   
            }
        }
}