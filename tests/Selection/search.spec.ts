import { test, expect } from '@playwright/test';
import { NPMainPage } from '../../pages/main.page';

test('sugegster check', async ({ page }) => {

  // Arrange
  const service = "невролог";
  const suuggesterGroups: string[] = ['Специальности врачей', 'Типы клиник', 'Статьи', 'Услуги', 'Акции', 'Клиники', 'Врачи'];
  const mainPage = new NPMainPage(page);

  // Act
  await mainPage.goto();
  await mainPage.searchIt(service);

  // Asserts  
  for (let i = 0; i <= 6; i++)
  {
    await expect(mainPage.suggesterGroups.nth(i)).toHaveText(suuggesterGroups[i]);
  }
  await expect(mainPage.firstSuggest).toHaveText('Невролог взрослый');
});


test('complete search', async ({ page }) => {

  // Arrange
  const service = "невролог";
  const targetUrl = "https://spb.napopravku.ru/doctors/nevrolog/";
  const mainPage = new NPMainPage(page);

  // Act
  await mainPage.goto();
  await mainPage.searchIt(service);
  await mainPage.firstSuggest.click();
  await mainPage.selectionInfo.waitFor();

  // Asserts  
  await expect.soft(page.url()).toBe(targetUrl);
  await expect(mainPage.selectionInput).toHaveValue("Невролог взрослый");
});