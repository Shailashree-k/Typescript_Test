import { By, WebDriver, WebElement } from "selenium-webdriver";

export class LoginPage {
    private driver: WebDriver;
    private usernameField: By = By.id('email');
    private passwordField: By = By.id('password');
    private loginButton: By = By.name('login');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async enterUsername(username: string): Promise<void> {
        const usernameInput: WebElement = await this.driver.findElement(this.usernameField);
        await usernameInput.sendKeys(username);
    }

    async enterPassword(password: string): Promise<void> {
        const passwordInput: WebElement = await this.driver.findElement(this.passwordField);
        await passwordInput.sendKeys(password);
    }

    async clickLogin(): Promise<void> {
        const loginBtn: WebElement = await this.driver.findElement(this.loginButton);
        await loginBtn.click();
    }
}