import {test} from "../../../src/pageObjects/fixtures/test.fixtures.js";
import {expect} from "@playwright/test";
import WelcomePage from "../../../src/pageObjects/welcomePage/WelcomePage.js"
import GaragePage from "../../../src/pageObjects/garagePage/GaragePage.js"
import {USERS} from "../../../src/pageObjects/data/dict/users.js"


test.use({
    storageState: './state/user-state.json'
})

test.describe('Garage page', ()=>{
    test.skip('The user could be loged in',async ({userGaragePage})=>{
       await expect(userGaragePage.emptyPanel,"The empty page should have correct text").toHaveText("You don’t have any cars in your garage")
    })



test.skip('should use storage state', async({page})=>{
    const garagePage = new GaragePage(page)
    await garagePage.navigate()
    await expect(garagePage.emptyPanel,"The empty page should have correct text").toHaveText("You don’t have any cars in your garage")
})
    test.skip('Should save storage state',async ({page, context})=>{
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        const popup = await welcomePage.pressSignInButton()
        await popup.signIn({
            email: USERS.JOE_DOU.email,
            password: USERS.JOE_DOU.password
        })
        await context.storageState({
            path:'./state/user-state.json'
        })
     })
    })