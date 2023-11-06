import BasePage from "../BasePage.js";
import {expect} from "@playwright/test";

export default class WelcomePage extends BasePage {
    constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Guest log in'}));
        this.page = page
        this.container = page.locator('.modal-content')
        this.signUpButton = this._page.locator('div [class="hero-descriptor_btn btn btn-primary"]', {hasText: 'Sign up'})
    }

    async pressSignUpButton(){
        await this.signUpButton.click()
        // await expect(signUpButton, "Sign up button should be visible").toBeVisible()
        // await expect(signUpButton, "Sign up button should be enabled").toBeEnabled()
        
    }
}

//     get nameField() {
//         return this.page.locator('//*[@id="signupName"]')
//     }

//     get lastNameField() {
//         return this.page.locator('//* [@id="signupLastName"]')
//     }

//     get emailField() {
//         return this.page.locator('//* [@id="signupEmail"]')
//     }

//     get passwordField() {
//         return this.page.locator('//*[@id="signupPassword"]')
//     }

//     get repeatPassword() {
//         return this.page.locator('//*[@id="signupRepeatPassword"]')
//     }

//     get registerButton() {
//         return this.page.locator('//*[@class="btn btn-primary"]')
//     }

//     async fillSignupForm(formData) {
//         await this.nameField.fill(formData.name)
//         await this.lastNameField.fill(formData.lastName)
//         await this.emailField.fill(formData.email)
//         await this.passwordField.fill(formData.password)
//         await this.repeatPassword.fill(formData.repassword)
//         await this.registerButton.click()
//     }
// }