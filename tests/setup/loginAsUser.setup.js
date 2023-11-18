import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js"
import {test, expect} from "@playwright/test";

test("Login as user and save storage state", async ({page, context})=>{
    const welcomPage = new WelcomePage(page)
    await welcomPage.navigate()
        const popup = await welcomPage.pressSignInButton()
        await popup.signIn({
            email: USERS.JOE_DOU.email,
            password: USERS.JOE_DOU.password
        })
        await context.storageState({
            path:'./state/user-state.json'
        })
    })