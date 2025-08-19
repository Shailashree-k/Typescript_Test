import { By } from "selenium-webdriver";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    private searchBox = By.id("twotabsearchtextbox");
    private searchButton = By.id("nav-search-submit-button");

    async searchProduct(productName: string): Promise<void> {
        await this.enterText(this.searchBox, productName);
        await this.clickElement(this.searchButton);
    }

    async selectFirstProduct(): Promise<void> {
        const firstProduct = By.css(".s-main-slot .s-result-item h2 a");
        await this.clickElement(firstProduct);
    }
}