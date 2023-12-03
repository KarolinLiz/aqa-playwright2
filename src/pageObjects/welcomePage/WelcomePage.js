import BasePage from "../BasePage.js";
import {expect} from "@playwright/test";
import SignUpPopup from "../SignUpPopup/SignUpPopup.js";
import SignInPopup from "../components/SignInPopup.js"

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}));
        this.signUpButton = page.locator('.btn-primary')
        this.signInButton = page.locator('.header_signin')
    }

    async pressSignUpButton(){
        await this.signUpButton.click()
        return new SignUpPopup(this._page)
        
    }
    async pressSignInButton(){
        await this.signInButton.click()
        return new SignInPopup(this._page)
        
    }
}
