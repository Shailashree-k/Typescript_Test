import { Builder, By, Key, WebDriver } from "selenium-webdriver";

async function runSeleniumExample() {
    // Initialize the WebDriver
    const driver: WebDriver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to a sample webpage
        await driver.get("https://www.google.com");
        // Locate the input field (replace with the actual selector of your target input field)
        const inputField = await driver.findElement(By.className('gLFyf'));
        // Send keyboard input to the input field
        await inputField.sendKeys("Hello, Selenium with TypeScript!", Key.RETURN);

        // Optional: Wait for a moment to observe the result
        await driver.sleep(2000);
    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Quit the WebDriver
        await driver.quit();
    }
}
runSeleniumExample();