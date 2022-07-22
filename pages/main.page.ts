//home.page.ts
import { expect, Locator, Page } from '@playwright/test';
export class NPMainPage {
readonly url ="https://spb.napopravku.ru/";
readonly page: Page;
readonly inputField: Locator;
readonly suggester: Locator;
readonly suggesterGroups: Locator;
readonly firstSuggest: Locator;
readonly selectionInput: Locator;
readonly selectionInfo: Locator;

constructor(page: Page) {
this.page = page;
this.inputField = page.locator('.n-selection__input');
this.suggester = page.locator('.n-dropdown__suggests');
this.suggesterGroups = page.locator('.search-form__group-title');
this.firstSuggest = page.locator('.suggest__lbl').nth(0);
this.selectionInput = page.locator('//div[contains(@class, "item--object")]//label/input');
this.selectionInfo = page.locator('.selection-info__object');
}

async goto(){
await this.page.goto(this.url);
}

async searchIt(value: string){
await expect(this.inputField).toBeVisible;
await this.inputField.click();
await this.inputField.type(value);
// await this.suggesterGroups.waitFor();
}

}