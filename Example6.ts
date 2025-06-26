//This code opens the Chrome browser and opens clicks on Images link from it using xpath
import { Builder, By, WebDriver } from "selenium-webdriver";

async function clickLinkExample() {
    // Initialize WebDriver
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the webpage
        await driver.get('https://www.google.com');
        const linkByXPath = await driver.findElement(By.xpath("//a[contains(text(), 'Images')]"));
        await driver.sleep(1000)
        await linkByXPath.click()
        await driver.sleep(1000)

    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        // Quit the driver
        await driver.quit();
    }
}
clickLinkExample();