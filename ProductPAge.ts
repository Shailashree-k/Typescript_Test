import { By } from "selenium-webdriver";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
    private addToCartButton = By.id("add-to-cart-button");

    async addToCart(): Promise<void> {
        await this.clickElement(this.addToCartButton);
    }
}