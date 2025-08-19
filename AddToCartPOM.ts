import { Builder } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
// import { By, WebDriver, WebElement } from "selenium-webdriver";
import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';


// Specify custom path to ChromeDriver
const chromeDriverPath = 'C:\\Users\\user\\chromedriver.exe';
const serviceBuilder = new chrome.ServiceBuilder(chromeDriverPath);

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(serviceBuilder)
    .build();

(async function addToCartTest() {

    try {
        const homePage = new HomePage(driver);
        const productPage = new ProductPage(driver);

        // Navigate to Amazon
        await homePage.navigateTo("https://www.amazon.in");

        // Search for a product
        await homePage.searchProduct("laptop");

        // Select the first product
        await homePage.selectFirstProduct();

        // Switch to the new tab (Amazon opens product in a new tab)
        const tabs = await driver.getAllWindowHandles();
        await driver.switchTo().window(tabs[1]);

        // Add the product to the cart
        await productPage.addToCart();

        console.log("Product successfully added to the cart!");
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await driver.quit();
    }
})();