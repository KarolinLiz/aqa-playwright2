import BasePage from "../BasePage.js";
import {expect} from "@playwright/test";
import SignUpPopup from "../SignUpPopup/SignUpPopup.js";

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}));
        this.page = page
        this.container = page.locator('.modal-content')
        this.signUpButton = this._page.locator('div [class="hero-descriptor_btn btn btn-primary"]', {hasText: 'Sign up'})
    }

    async pressSignUpButton(){
        await this.signUpButton.click()
        return new SignUpPopup(this._page)
        
    }
}
