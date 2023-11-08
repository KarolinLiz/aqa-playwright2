 import BaseComponent from "../BaseComponent";
 import {expect} from "@playwright/test";

export default class SignUpPopup extends BaseComponent {
        constructor(page) {
        super(page,page.locator('div.modal-content'));
        this.page = page
        this.nameInput = this._container.locator('input#signupName')
        this.lastNameInput = this._container.locator('[id="signupLastName"]')
        this.emailInput = this._container.locator('[id="signupEmail"]')
        this.passwordInput = this._container.locator('[id="signupPassword"]')
        this.repasswordInput = this._container.locator('[id="signupRepeatPassword"]')
        this.registerButton = this._container.locator('[class="btn btn-primary"]')
        this.nameErrorMessage = this._container.locator('div.invalid-feedback')
        }
    async fill(name, lastName, email, password, rePassword){
        await this.nameInput.fill(name)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.repasswordInput.fill(rePassword) 
        return new SignUpPopup(this._page)

    }
    async clickRegisterButton(){
        await this.registerButton.click()
    }
   
    async checkNameAlertMessage(){
        await this._nameErrorMessage.toHaveText('Name has to be from 2 to 20 characters long')
    }
    
}
