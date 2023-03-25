const LoginPage = require( "../pageobjects/LoginPage");

describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })



const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');

(async function checkGenderFilter() {
  let driver = await new Builder().forBrowser('chrome').build();

  // Navigate to the View Clients page
  await driver.get('http://167.114.201.175:5000/clients');

  // Wait for the page to load
  await driver.wait(until.elementLocated(By.id('searchButton')), 5000);

  // Select the "Female" gender filter
  const genderSelect = await driver.findElement(By.id('genderSelect'));
  await genderSelect.click();
  const femaleOption = await driver.findElement(By.xpath("//option[@value='Female']"));
  await femaleOption.click();

  // Click the "Search" button
  const searchButton = await driver.findElement(By.id('searchButton'));
  await searchButton.click();

  // Wait for the search results to appear
  await driver.wait(until.elementLocated(By.id('resultsTable')), 5000);

  // Verify that all clients in the search results are female
  const resultsTable = await driver.findElement(By.id('resultsTable'));
  const rows = await resultsTable.findElements(By.tagName('tr'));

  for (const row of rows) {
    const columns = await row.findElements(By.tagName('td'));
    const genderColumn = await columns[4].getText();
    assert.equal(genderColumn, 'Female');
  }

  // Select the "Male" gender filter
  await genderSelect.click();
  const maleOption = await driver.findElement(By.xpath("//option[@value='Male']"));
  await maleOption.click();

  // Click the "Search" button
  await searchButton.click();

  // Wait for the search results to appear
  await driver.wait(until.elementLocated(By.id('resultsTable')), 5000);

  // Verify that all clients in the search results are male
  for (const row of rows) {
    const columns = await row.findElements(By.tagName('td'));
    const genderColumn = await columns[4].getText();
    assert.equal(genderColumn, 'Male');
  }

  // Close the browser
  await driver.quit();
})();

})