import { Builder, By, WebDriver } from "selenium-webdriver";
import * as assert from "assert";

(async function example() {
    let driver: WebDriver;

    try {
        // Initialize WebDriver
        driver = await new Builder().forBrowser("chrome").build();

        // Navigate to a website
        await driver.get('https://www.google.com/');

        // Get the page title
        const title = await driver.getTitle();

        // Assert the title is as expected
        assert.strictEqual(title, "Example Domain", "Page title does not match!");

        console.log("Assertion passed: Page title is correct.");
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        // Quit the driver
        if (driver) {
            await driver.quit();
        }
    }
})();