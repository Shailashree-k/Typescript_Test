import { By, WebDriver } from 'selenium-webdriver';

export class LoginPage {
    private driver: WebDriver;
    private usernameField: By = By.id('username');
    private passwordField: By = By.id('password');
    private loginButton: By = By.id('loginButton');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async enterUsername(username: string): Promise<void> {
        await this.driver.findElement(this.usernameField).sendKeys(username);
    }

    public async enterPassword(password: string): Promise<void> {
        await this.driver.findElement(this.passwordField).sendKeys(password);
    }

    public async clickLoginButton(): Promise<void> {
        await this.driver.findElement(this.loginButton).click();
    }

    public async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}