import {Builder, By, until, Key } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
//import { Select } from 'selenium-webdriver/lib/webdriver';
import { Select } from 'selenium-webdriver/lib/select';

// Specify custom path to ChromeDriver
const chromeDriverPath = 'C:\\Users\\user\\chromedriver.exe';
const serviceBuilder = new chrome.ServiceBuilder(chromeDriverPath);

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(serviceBuilder)
    .build();
async function AddToCart() {
    try {
        await driver.get('https://www.amazon.com');
        const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
        await searchBox.sendKeys('Laptop', Key.RETURN);
        await driver.wait(until.titleContains('Laptop'), 5000);
        const element = await driver.findElement(By.css('[aria-label="Apply 128 GB filter to narrow results"]'));
        await element.click()
        await driver.sleep(1000)
        const productLink = await driver.findElement(By.linkText('Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6" Full HD | AMD Ryzen 3 7320U Quad-Core | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home'));
        await productLink.click()
        await driver.manage().window().maximize();
        const dropdown = await driver.findElement(By.name('quantity'));
        //   console.log(dropdown);
        const select = new Select(dropdown);

        // Select by visible text
        await select.selectByValue('2');
        await driver.sleep(1000)
        const Cart = await driver.findElement(By.id('submit.add-to-cart'));
        await Cart.click()
        await driver.sleep(2000)
    //    const Home = await driver.findElement(By.css('[aria-label="Amazon"]'));
     //  await Home.click()

      //  const link = await driver.findElement(By.css('a[href="https://www.amazon.com/gp/cart/view.html?ref_=nav_cart"]'));

     //  const CheckCart = await driver.findElement(By.id('nav-cart-count-container'));
      //  await CheckCart.click()
       // await driver.sleep(1000) */


        // Check if the button is displayed
     /*   if (await button.isDisplayed()) {
        console.log("Item is Present.");
         } else {
              console.log("Cart is Empty");
         } */

       // const cartElement = await driver.findElement(By.id("cart"));

        // Check if the cart is empty

        /* const button = await driver.findElement(By.id('proceedToRetailCheckout'));
        const isDisplayed = await button.isDisplayed();

        if (isDisplayed)
        {
            console.log('Item is Present in the Cart!');
           // await button.click(); // Perform an action if needed
        } else {
            console.log('Cart is Empy');
        }  */
    }
    catch (error) {
        console.log("Error.");
    }
    finally {

        await driver.quit();

    }
}
AddToCart()



