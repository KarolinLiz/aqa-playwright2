import {expect, test} from "@playwright/test";

test.describe("Auth1", ()=>{
    test("The user should be created with valid credentials", async ({page})=>{
        const name = 'Yilia'
        const lastName = 'Kondratenko'
        const email = 'aqa-kondratenko@icloud.com'
        const password = 'Likavlad2021'
        const repassword = 'Likavlad2021'


        await page.goto('/')
        
        const logInButton = page.locator('//div/button[2]')
        await expect(logInButton, "Sign in button should be visible").toBeVisible()
        await expect(logInButton, "Sign in button should be enabled").toBeEnabled()

        await logInButton.click()

        const popup = page.locator('//app-signin-modal')
        await expect(popup, "Popup should be visible").toBeVisible()

        const registrationButton = page.locator('//* [@class="btn btn-link"]', {hasText: 'Registration'})

        await registrationButton.click()

        const nameInput = page.locator('//* [@id="signupName"]')
        const lastNameInput = page.locator('//* [@id="signupLastName"]')
        const emailInput = page.locator('//* [@id="signupEmail"]')
        const passwordInput = page.locator('//* [@id="signupPassword"]')
        const repeatPassword = page.locator('//* [@id="signupRepeatPassword"]')
        const registerButton = page.locator('//* [@class="btn btn-primary"]')

        await nameInput.fill(name)
        await lastNameInput.fill(lastName)
        await emailInput.fill(email)
        await passwordInput.fill(password)
        await repeatPassword.fill(repassword)

        await registerButton.click()

        await expect(page).toHaveURL(/.*garage/);

    
    })
})



test.describe("Auth2", ()=>{
    test("The alert message should be visible if user enters invalid name, shorter than 2 simbols", async ({page})=>{
        const name = 'E'
        const lastName = 'Klyemenko'
        
        await page.goto('/')
        
        const logInButton = page.locator('//div/button[2]')
        await expect(logInButton, "Sign in button should be visible").toBeVisible()
        await expect(logInButton, "Sign in button should be enabled").toBeEnabled()

        await logInButton.click()

        const popup = page.locator('//app-signin-modal')
        await expect(popup, "Popup should be visible").toBeVisible()

        const registrationButton = page.locator('//* [@class="btn btn-link"]', {hasText: 'Registration'})

        await registrationButton.click()

        const nameInput = page.locator('//* [@id="signupName"]')
        const lastNameInput = page.locator('//* [@id="signupLastName"]')
        const registerButton = page.locator('//* [@class="btn btn-primary"]')
        
        await nameInput.fill(name)
        await lastNameInput.fill(lastName)
       
        const nameErrorMessage = page.locator('div.invalid-feedback')
        await expect(nameErrorMessage, "Error message should be displayed ig user enters name shorter than 2 symbols").toHaveText('Name has to be from 2 to 20 characters long')
        await expect(nameInput,"Name field should be red  if user enters wrong name").toHaveCSS('color','rgb(73, 80, 87)')
        
        await expect(registerButton, "Register button should be disabled when user enters to short name").toBeDisabled()

    
    })
})

test.describe("Auth3", ()=>{
    test("The alert message should be visible if user enters invalid last name, longer than 20 simbols", async ({page})=>{
        const name = 'Eelyzaveta'
        const lastName = 'klumynbhgtyuyujhgbnjh'
        const email = 'aqa-klyemenko987@icloud.com'

        await page.goto('/')
        
        const logInButton = page.locator('//div/button[2]')
        await expect(logInButton, "Sign in button should be visible").toBeVisible()
        await expect(logInButton, "Sign in button should be enabled").toBeEnabled()

        await logInButton.click()

        const popup = page.locator('//app-signin-modal')
        await expect(popup, "Popup should be visible").toBeVisible()

        const registrationButton = page.locator('//* [@class="btn btn-link"]', {hasText: 'Registration'})

        await registrationButton.click()

        const nameInput = page.locator('//* [@id="signupName"]')
        const lastNameInput = page.locator('//* [@id="signupLastName"]')
        const emailInput = page.locator('//* [@id="signupEmail"]')
        const registerButton = page.locator('//* [@class="btn btn-primary"]')

        await nameInput.fill(name)
        await lastNameInput.fill(lastName)
        await emailInput.fill(email)
       
        const lastNameErrorMessage = page.locator('div.invalid-feedback')
        await expect(lastNameErrorMessage, "Error message should be displayed if user enters last name longer than 20 symbols").toHaveText('Last name has to be from 2 to 20 characters long')
        await expect(lastNameInput,"Name field should be red  if user enters wrong name").toHaveCSS('color','rgb(73, 80, 87)')

        await expect(registerButton, "Register button should be disabled when user enters to short name").toBeDisabled()
    
    })
})

test.describe("Auth4", ()=>{
    test("The user couldn't be created if he enters invalid email address in the email field", async ({page})=>{
        const name = 'Eelyzaveta'
        const lastName = 'Klyemenko'
        const email = 'cat'
        const password = 'Lizavlad2021'
       

        await page.goto('/')
        
        const logInButton = page.locator('//div/button[2]')
        await expect(logInButton, "Sign in button should be visible").toBeVisible()
        await expect(logInButton, "Sign in button should be enabled").toBeEnabled()

        await logInButton.click()

        const popup = page.locator('//app-signin-modal')
        await expect(popup, "Popup should be visible").toBeVisible()

        const registrationButton = page.locator('//* [@class="btn btn-link"]', {hasText: 'Registration'})

        await registrationButton.click()

        const nameInput = page.locator('//* [@id="signupName"]')
        const lastNameInput = page.locator('//* [@id="signupLastName"]')
        const emailInput = page.locator('//* [@id="signupEmail"]')
        const passwordInput = page.locator('//* [@id="signupPassword"]')
        const registerButton = page.locator('//* [@class="btn btn-primary"]')
       
        await nameInput.fill(name)
        await lastNameInput.fill(lastName)
        await emailInput.fill(email)
        await passwordInput.fill(password)
       
        const emailMessage = page.locator('div.invalid-feedback')
        await expect(emailMessage, "Error message should be displayed if user enters invalid email").toHaveText('Email is incorrect')
        await expect(emailInput,"Email field should be red  if user enters invalid email").toHaveCSS('color','rgb(73, 80, 87)')

        await expect(registerButton, "Register button should be disabled when user enters to short name").toBeDisabled()
    
    
    })
})
test.describe("Auth5", ()=>{
    test("The user couldn't be created if he enters incorect password in the password field", async ({page})=>{
        const name = 'Katerina'
        const lastName = 'Tomenko'
        const email = 'kfkhljlymg@meta.ua'
        const password = 'lizavlad2021'
        const repassword = 'lizavlad2021'
       

        await page.goto('/')
        
        const logInButton = page.locator('//div/button[2]')
        await expect(logInButton, "Sign in button should be visible").toBeVisible()
        await expect(logInButton, "Sign in button should be enabled").toBeEnabled()

        await logInButton.click()

        const popup = page.locator('//app-signin-modal')
        await expect(popup, "Popup should be visible").toBeVisible()

        const registrationButton = page.locator('//* [@class="btn btn-link"]', {hasText: 'Registration'})

        await registrationButton.click()

        const nameInput = page.locator('//* [@id="signupName"]')
        const lastNameInput = page.locator('//* [@id="signupLastName"]')
        const emailInput = page.locator('//* [@id="signupEmail"]')
        const passwordInput = page.locator('//* [@id="signupPassword"]')
        const repeatPassword = page.locator('//* [@id="signupRepeatPassword"]')
        const registerButton = page.locator('//* [@class="btn btn-primary"]')
       
        await nameInput.fill(name)
        await lastNameInput.fill(lastName)
        await emailInput.fill(email)
        await passwordInput.fill(password)
        await repeatPassword.fill(repassword)
       
        const passwordErrorMessage = page.locator('div.invalid-feedback')
        await expect(passwordErrorMessage, "Error message should be displayed if user enters invalid password").toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        await expect(passwordInput,"Password field should be red  if user enters invalid email").toHaveCSS('color','rgb(73, 80, 87)')

        await expect(registerButton, "Register button should be disabled when user enters to short name").toBeDisabled()
    
    
    })
})

test.describe("Auth6", ()=>{
    test.only("The user couldn't be created if he enters incorect repassword in the re-enter password field", async ({page})=>{
        const name = 'Eleftina'
        const lastName = 'ochkasova'
        const email = 'aqa-klyemenko987@icloud.com'
        const password = 'Lizavlad2021'
        const repassword = 'lizavlad2021'


        await page.goto('/')
        
        const logInButton = page.locator('//div/button[2]')
        await expect(logInButton, "Sign in button should be visible").toBeVisible()
        await expect(logInButton, "Sign in button should be enabled").toBeEnabled()

        await logInButton.click()

        const popup = page.locator('//app-signin-modal')
        await expect(popup, "Popup should be visible").toBeVisible()

        const registrationButton = page.locator('//* [@class="btn btn-link"]', {hasText: 'Registration'})

        await registrationButton.click()

        const nameInput = page.locator('//* [@id="signupName"]')
        const lastNameInput = page.locator('//* [@id="signupLastName"]')
        const emailInput = page.locator('//* [@id="signupEmail"]')
        const passwordInput = page.locator('//* [@id="signupPassword"]')
        const repeatPassword = page.locator('//* [@id="signupRepeatPassword"]')
        const registerButton = page.locator('//* [@class="btn btn-primary"]')

        await nameInput.fill(name)
        await lastNameInput.fill(lastName)
        await emailInput.fill(email)
        await passwordInput.fill(password)
        await repeatPassword.fill(repassword)

        await passwordInput.click()
    
       
        const rePasswordErrorMessage = page.locator('div.invalid-feedback')
        await expect(rePasswordErrorMessage, "Error message should be displayed if user enters invalid password in re-enter password field").toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        await expect(repeatPassword,"Password field should be red  if user enters invalid email").toHaveCSS('color','rgb(73, 80, 87)')

        await expect(registerButton, "Register button should be disabled when user enters to short name").toBeDisabled()
    
        
    })
})