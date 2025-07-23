import { Builder, By, until, Key} from 'selenium-webdriver';
import { Select } from 'selenium-webdriver/lib/select';
const driver = new Builder().forBrowser("chrome").build();
async function amazonSearchExample() {
    try {
        await driver.get('https://www.amazon.com');
        const searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
        await driver.sleep(1000)
        await searchBox.sendKeys('Laptop', Key.RETURN);
        await driver.wait(until.titleContains('Laptop'), 5000);
        const element = await driver.findElement(By.css('[aria-label="Apply 128 GB filter to narrow results"]'));
        await element.click()
        await driver.sleep(1000)
        const productLink = await driver.findElement(By.linkText('Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6" Full HD | AMD Ryzen 3 7320U Quad-Core | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home'));
        await productLink.click()
        await driver.manage().window().maximize();
        const dropdown = await driver.findElement(By.name('quantity'));
     //   console.log(dropdown);
        const select = new Select(dropdown);

        // Select by visible text
        await select.selectByValue('2');
        const AddtoCart = await driver.findElement(By.id('add-to-cart-button'));
        await AddtoCart.click()

    } finally {

        await driver.quit();

    }
}

amazonSearchExample()

