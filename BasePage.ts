import { WebDriver, By, until } from "selenium-webdriver";

export class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async navigateTo(url: string): Promise<void> {
        await this.driver.get(url);
    }

    async findElement(locator: By) {
        await this.driver.wait(until.elementLocated(locator), 5000);
        return this.driver.findElement(locator);
    }

    async clickElement(locator: By): Promise<void> {
        const element = await this.findElement(locator);
        await element.click();
    }

    async enterText(locator: By, text: string): Promise<void> {
        const element = await this.findElement(locator);
        await element.sendKeys(text);
    }
}