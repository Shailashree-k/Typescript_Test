import { Builder, By, until, Key} from 'selenium-webdriver';

const driver = new Builder().forBrowser("chrome").build();

(async function amazonSearchExample() {

    try {
        await driver.get('https://www.amazon.com');

        const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));

        await driver.sleep(1000)

        await searchBox.sendKeys('Laptop', Key.RETURN);

        await driver.wait(until.titleContains('Laptop'), 5000);

     //const select = await driver.findElement(By.linktext('Apple 2025 MacBook Air'));
     //   await select.click();

      const element = await driver.findElement(By.css('[aria-label="Apply 128 GB filter to narrow results"]'));
        await driver.sleep(1000)
       await element.click();

    } finally {

        await driver.quit();

    }
})();