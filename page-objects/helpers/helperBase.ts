import { Page } from "@playwright/test";

export class HelperBase {
    readonly page: Page
    readonly expectTimeout: number
    
    constructor(page: Page){
        this.page = page
        this.expectTimeout = 10000
    }

    /**
     * This method waits for specific number of seconds in script
     * @param timeInSeconds - time in seconds
     */
    async waitForNumberOfSeconds(timeInSeconds: number){
        await this.page.waitForTimeout(timeInSeconds * 1000)
    }
}