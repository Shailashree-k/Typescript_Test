import { Builder, WebDriver } from 'selenium-webdriver';
import { LoginPage } from './PageClass';


describe('Login Functionality', () => {
    let driver: WebDriver;
    let loginPage: LoginPage;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        loginPage = new LoginPage(driver);
        await driver.get('https://test-login-app.vercel.app/');}, 10000); // Increased timeout for setup

    afterAll(async () => {
        await driver.quit();
    });

    test('should successfully log in with valid credentials', async () => {
        await loginPage.login('testuser', 'password123');
        // Add assertions here, e.g., check for redirection or element presence
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).toContain('/dashboard'); // Example assertion
    });
});