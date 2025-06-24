//This file opens the browser and searches by element
import { Builder, By, Key, WebDriver } from 'selenium-webdriver';

async function searchInBrowser() {
    // Initialize the WebDriver
    const driver: WebDriver = await new Builder().forBrowser('chrome').build();

    try {
        // Open the browser and navigate to Google
        await driver.get('https://www.google.com');

        // Find the search box, type a query, and press Enter
        const searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('TypeScript Selenium example', Key.RETURN);

        // Wait for results to load (optional, based on your needs)
        await driver.sleep(3000); // Adjust the sleep time as necessary
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the browser
        await driver.quit();
    }
}

// Execute the function
searchInBrowser();