import { Builder, By, until } from 'selenium-webdriver';

/*m(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://example.com');
        console.log('Page title:', await driver.getTitle());
    } finally {
        await driver.quit();
    }
})(); */
import { Builder, By } from 'selenium-webdriver';

(async function formInteraction() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://test-login-app.vercel.app/');
        await driver.findElement(By.name('email')).sendKeys('test@gmail.com');
        await driver.findElement(By.name('password')).sendKeys('password123');
        await driver.findElement(By.name('login')).click();
    } finally {
        await driver.quit();
    }
})();

import { Builder, By, WebDriver } from 'selenium-webdriver';

class LoginPage {
    driver: WebDriver;
    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    async open() {
        await this.driver.get('https://test-login-app.vercel.app/');
    }
    async login(username: string, password: string) {
        await this.driver.findElement(By.name('email')).sendKeys(username);
        await this.driver.findElement(By.name('password')).sendKeys(password);
        await this.driver.findElement(By.name('login')).click();
     //   await driver.findElement(By.name('login')).click()
    }
}

(async function pageObjectExample() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        const loginPage = new LoginPage(driver);
        await loginPage.open();
        await loginPage.login('testuser', 'password123');
    } finally {
        await driver.quit();
    }
})();