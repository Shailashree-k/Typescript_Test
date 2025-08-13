//This scripts opens browser and navigates to Google Chrome
import {Builder, WebDriver, By, until, Key } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
//import { Select } from 'selenium-webdriver/lib/webdriver';
import { Select } from 'selenium-webdriver/lib/select';
// Specify custom path to ChromeDriver
const chromeDriverPath = 'C:\\Users\\user\\chromedriver.exe';
const serviceBuilder = new chrome.ServiceBuilder(chromeDriverPath);



async function setupBrowser(): Promise<WebDriver> {
    const driver = new Builder()
        .forBrowser('chrome')
        .setChromeService(serviceBuilder)
        .build();
    return driver
}
async function navigateToUrl(driver: WebDriver, url: string): Promise<void> {
    await driver.get(url);
}

async function closeBrowser(driver: WebDriver): Promise<void> {
    await driver.quit();
}

// Example usage:
(async () => {
    const driver = await setupBrowser();
    try {
        await navigateToUrl(driver, 'https://www.google.com');
        console.log('Navigated to Google');
    } finally {
        await closeBrowser(driver);
    }
})();