import { expect, test } from "@playwright/test";
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";
import SignUpPopup from "../../src/pageObjects/SignUpPopup/SignUpPopup.js";


test.describe("Register popUp", () => {
    test("The user should be created with valid credentials", async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        const signUpPopup = new SignUpPopup(page)
        await welcomePage.open()
        await welcomePage.waitLoaded()

        await welcomePage.pressSignUpButton()
        

        await signUpPopup.fill("Laterina", "Kostenko", "aqa-khhповos@meta.ua", "Busia126", "Busia126")
        await signUpPopup.clickRegisterButton()
        await expect(page).toHaveURL(/.*garage/);
    })

})
test.describe("Register popUp", () => {
    test("The alert message should be visible if user enters invalid name, shorter than 2 symbols", async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        const signUpPopup = new SignUpPopup(page)
        await welcomePage.open()
        await welcomePage.waitLoaded()

        await welcomePage.pressSignUpButton()
        

        await signUpPopup.fill("L", "Kostenko", "aqa-khhповos@meta.ua", "Busia126", "Busia126")
        const nameErrorMessage = page.locator('div.invalid-feedback')
        await expect(nameErrorMessage, "Error message should be displayed ig user enters name shorter than 2 symbols").toHaveText('Name has to be from 2 to 20 characters long')
        await expect(signUpPopup.nameInput,"Name field should be red  if user enters wrong name").toHaveCSS('color','rgb(73, 80, 87)')
        
         await expect(signUpPopup.registerButton, "Register button should be disabled when user enters to short name").toBeDisabled()
      
    })

})
test.describe("Register popUp", () => {
    test("The alert message should be visible if user enters invalid last name, longer than 20 simbols", async ({ page }) => {
        const welcomePage = new WelcomePage(page)
        const signUpPopup = new SignUpPopup(page)
        await welcomePage.open()
        await welcomePage.waitLoaded()

        await welcomePage.pressSignUpButton()
        

        await signUpPopup.fill("Eelyzaveta", "klumynbhgtyuyujhgbnjh", "aqa-khhповos@meta.ua", "Busia126", "Busia126")
        const lastNameErrorMessage = page.locator('div.invalid-feedback')
        await expect(lastNameErrorMessage, "Error message should be displayed ig user enters the last name longer than 20 symbols").toHaveText('Last name has to be from 2 to 20 characters long')
        await expect(signUpPopup.lastNameInput,"The Last name field should be red  if user enters wrong last name").toHaveCSS('color','rgb(73, 80, 87)')
        
         await expect(signUpPopup.registerButton, "Register button should be disabled when user enters to long last name").toBeDisabled()
        })

    })
    test.describe("Register popUp", () => {
        test("The user couldn't be created if he enters invalid email address in the email field", async ({ page }) => {
            const welcomePage = new WelcomePage(page)
            const signUpPopup = new SignUpPopup(page)
            await welcomePage.open()
            await welcomePage.waitLoaded()
    
            await welcomePage.pressSignUpButton()
            
    
            await signUpPopup.fill("Eelyzaveta", "Skatchkova", "cat", "Busia126", "Busia126")
            const emailErrorMessage = page.locator('div.invalid-feedback')
            await expect(emailErrorMessage, "Error message should be displayed if user enters invalid email").toHaveText('Email is incorrect')
            await expect(signUpPopup.emailInput,"Email field should be red  if user enters wrong email").toHaveCSS('color','rgb(73, 80, 87)')
            
             await expect(signUpPopup.registerButton, "Register button should be disabled when user enters invalid email").toBeDisabled()
            })
    
        })
        test.describe("Register popUp", () => {
            test("The user couldn't be created if he enters incorect password in the password field", async ({ page }) => {
                const welcomePage = new WelcomePage(page)
                const signUpPopup = new SignUpPopup(page)
                await welcomePage.open()
                await welcomePage.waitLoaded()
        
                await welcomePage.pressSignUpButton()
                
        
                await signUpPopup.fill("Eelyzaveta", "Skatchkova", "aqa-catdog@meta.ua", "busia126", "Busia126")
                const passwordErrorMessage = page.locator('div.invalid-feedback')
                await expect(passwordErrorMessage, "Error message should be displayed if user enters invalid password").toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                await expect(signUpPopup.passwordInput,"Password field should be red  if user enters invalid password").toHaveCSS('color','rgb(73, 80, 87)')
                
                 await expect(signUpPopup.registerButton, "Register button should be disabled when user enters invalid password").toBeDisabled()
                })
        
            })
            test.describe("Register popUp", () => {
                test("The user couldn't be created if he enters incorect repassword in the re-enter password field", async ({ page }) => {
                    const welcomePage = new WelcomePage(page)
                    const signUpPopup = new SignUpPopup(page)
                    await welcomePage.open()
                    await welcomePage.waitLoaded()
            
                    await welcomePage.pressSignUpButton()
                    
            
                    await signUpPopup.fill("Eelyzaveta", "Skatchkova", "aqa-catdog@meta.ua", "Busia126", "busia126")
                    await signUpPopup.passwordInput.click()
                    const repasswordErrorMessage = page.locator('div.invalid-feedback')
                    await expect(repasswordErrorMessage, "Error message should be displayed if user enters invalid password in re-enter password field").toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                    await expect(signUpPopup.repasswordInput,"Repassword field should be red  if user enters invalid repassword").toHaveCSS('color','rgb(73, 80, 87)')
                    
                     await expect(signUpPopup.registerButton, "Register button should be disabled when user enters invalid repassword").toBeDisabled()
                    })
            
                })