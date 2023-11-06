 import BaseComponent from "../BaseComponent";
 import {expect} from "@playwright/test";

export default class SignUpPopup extends BaseComponent {
        constructor(page) {
        super(page, '/', page.locator('button', {hasText: 'Sign up'}));
        this.page = page
        this.container = page.locator('[class="modal-content"]')
        this.nameInput = this.container.locator('[id="signupName"]')
        this.lastNameInput = this.container.locator('[id="signupLastName"]')
        this.emailInput = this.container.locator('[id="signupEmail"]')
        this.passwordInput = this.container.locator('[id="signupPassword"]')
        this.repasswordInput = this.container.locator('[id="signupRepeatPassword"]')
        this.registerButton = this.container.locator('[class="btn btn-primary"]')
        this.nameErrorMessage = this.container.locator('div.invalid-feedback')
        }
    
    async waitLoaded(){
        await this.container.waitFor()
    }
    async fill(name, lastName, email, password, rePassword){
        await this.nameInput.fill(name)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.repasswordInput.fill(rePassword)

    }
    async clickRegisterButton(){
        await this.registerButton.click()
    }
   
    async checkNameAlertMessage(){
        await this.nameErrorMessage.toHaveText('Name has to be from 2 to 20 characters long')
    }
    
}
