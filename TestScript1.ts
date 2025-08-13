import { Builder } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
// import { LoginPage } from "./LoginPage";
import { LoginPage } from './LoginPage';


// Specify custom path to ChromeDriver
const chromeDriverPath = 'C:\\Users\\user\\chromedriver.exe';
const serviceBuilder = new chrome.ServiceBuilder(chromeDriverPath);

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(serviceBuilder)
    .build();

(async function testLogin() {
 //   const driver: WebDriver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the login page
        await driver.get('https://test-login-app.vercel.app/');

        // Create an instance of the LoginPage
        const loginPage = new LoginPage(driver);

        // Perform login actions
        await loginPage.enterUsername('test@gmail.com');
        await loginPage.enterPassword('password12345');
        await loginPage.clickLogin();
        await driver.sleep(1000)

        // Add assertions or validations here
        console.log("Login test executed successfully!");
    } finally {
        await driver.quit();
    }
})();