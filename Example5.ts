//This code opens the Chrome browser and opens clicks on Images link from it.
import { Builder, By, WebDriver } from "selenium-webdriver";

async function clickLinkExample() {
    // Initialize WebDriver
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the webpage
        await driver.get('https://www.google.com');

        // Method 1: Click using link text
        const linkByText = await driver.findElement(By.linkText('Images'));
        await driver.sleep(1000)
        await linkByText.click();
        await driver.sleep(1000)


    } catch (error) {
        console.error("Error occurred:", error);
    } finally {
        // Quit the driver
        await driver.quit();
    }
}

clickLinkExample();