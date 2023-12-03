import { test } from "../../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import MyProfileDropdown from "../../../src/pageObjects/components/MyProfileDropdown.js";
import { INVALID_USER_RESPONCE_BODY } from "./fixtures/userData.js";
import ProfilePage from "../../../src/pageObjects/profilePage/ProfilePage.js";

test.use({
    storageState: './state/user-state.json'
})
test.describe('Profile page', () => {
   
    test.only('Frontend should use data of user from responce', async ({ userGaragePage, page }) => {


        await userGaragePage.myProfileButton.click()
        const myProfileDropdown = new MyProfileDropdown(page)

        await page.route('/api/users/profile', route => {
            route.fulfill({ body: JSON.stringify(INVALID_USER_RESPONCE_BODY) })
        })

        await myProfileDropdown.profileButton.click()
        const profilePage = new ProfilePage(page)
        await expect(profilePage.profileName).toHaveText('Katerina Diachenko')

    })
})
