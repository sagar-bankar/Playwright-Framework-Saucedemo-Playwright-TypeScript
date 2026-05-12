import { Page } from "@playwright/test";
import { productPageLocators } from "../locators/productPageLocators";

export class ProductPage
{
    constructor(private page:Page)
    {

    }

    async logout()
    {
        await this.page.click(productPageLocators.settingIcon);
        await this.page.click(productPageLocators.logoutLink);

    }

    async openAboutPage()
    {
        await this.page.click(productPageLocators.settingIcon);
        await this.page.click(productPageLocators.aboutLink);
    }

}