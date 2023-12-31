import BasePage from "../BasePage.js";

export default class GaragePage extends BasePage {
    constructor(page) {
        super(page, '/panel/garage', page.locator('app-panel-layout' , {has : page.locator('button', {hasText: 'Add car'})}));
        this.emptyPanel = page.locator('.panel-empty_message');
        this.myProfileButton = page.locator('#userNavDropdown');
        this.addCarBtn = page.locator('button', {hasText: 'Add car'})

    }
    
}