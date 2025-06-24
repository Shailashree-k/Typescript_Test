
import * as webdriver from 'selenium-webdriver';

const driver = await new webdriver.Builder().forBrowser('chrome').build();

await driver.get('https://www.google.com');