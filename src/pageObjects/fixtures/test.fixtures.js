import {test as base} from "@playwright/test";
import GaragePage from "../garagePage/GaragePage.js"
import WelcomePage from "../welcomePage/WelcomePage.js";
import {USERS} from "../data/dict/users.js"

export const test = base.extend(({
    userGaragePage: async({page}, use)=>{
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        const popup = await welcomePage.pressSignInButton()
        await popup.signIn({
            email: USERS.JOE_DOU.email,
            password: USERS.JOE_DOU.password
        })
        

        const garagePage = new GaragePage(page)
        await garagePage.navigate()
        await use(garagePage)
    }
}))