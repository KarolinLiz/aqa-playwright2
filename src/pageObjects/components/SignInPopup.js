import BaseComponent from "../BaseComponent.js";
import {expect} from "@playwright/test";

export default class SignInPopup extends BaseComponent {
       constructor(page) {
       super(page,page.locator('app-signin-modal'));
       this.emailInput = this._container.locator('#signinEmail')
       this.passwordInput = this._container.locator('#signinPassword')
       this.signInButton = this._container.locator('.btn-primary')
      
       }
   async fill(signInData){
       await this.emailInput.fill(signInData.email)
       await this.passwordInput.fill(signInData.password)
   }
   async signIn(signInData){
    await this.fill(signInData)
    await this.signInButton.click()
    await expect(this._page).toHaveURL("/panel\/garage")

   }
   
}
