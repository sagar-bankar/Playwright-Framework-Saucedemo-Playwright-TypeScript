import{test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LoginLocators } from "../locators/LoginLocators";
import { ProductPage} from "../pages/ProductPage";
import { BASE_URL,USERNAME,PASSWORD } from '../utils/envConfig';
import { productPageLocators } from "../locators/productPageLocators";

test.describe("logout verification",()=>
   {
    let loginPage:LoginPage;
    let productPage:ProductPage;

    test.beforeEach("login",async({page})=>{
        
        loginPage=new LoginPage(page);
        productPage=new ProductPage(page);
    
        await page.goto(BASE_URL);
        await loginPage.login(USERNAME,PASSWORD);
        //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    })

    test("validate logout Functionality",async({page})=>{

        await productPage.logout();
        await expect(page.locator(LoginLocators.loginButton)).toBeVisible();
    })

    test("Validate about page and goback",async({page})=>{
      await productPage.openAboutPage();
      await page.goBack();
      await expect(page.locator(productPageLocators.productText)).toBeVisible();

    })



     
   })
