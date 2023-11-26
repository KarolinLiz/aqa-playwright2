import BaseComponent from "../BaseComponent.js";
import {expect} from "@playwright/test";

export default class MyProfileDropdown extends BaseComponent {

    constructor(page) {
        super(page, page.locator('nav.user-nav_menu'));
        this.profileButton = this._page.locator('.dropdown-item', {hasText: 'Profile'})
    }
}