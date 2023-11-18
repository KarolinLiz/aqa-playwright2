import BasePage from "../BasePage.js";

export default class GaragePage extends BasePage {
    constructor(page) {
        super(page, '/panel/garage', page.locator('button' , {hasText: 'Add car'}));
        this.emptyPanel = page.locator('.panel-empty_message')
    }
}