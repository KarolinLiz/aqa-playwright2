import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js"
import {test, expect} from "@playwright/test";
import { USERS } from "../../src/pageObjects/data/dict/users.js";

test.skip("Login as user and save storage state", async ({page, context})=>{
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