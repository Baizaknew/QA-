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
    
    (async function editClient() {
      let driver = await new Builder().forBrowser('chrome').build();
    
      // Navigate to the Edit Client page
      await driver.get('http://167.114.201.175:5000/clients/edit/1234');
    
      // Wait for the form to appear
      await driver.wait(until.elementLocated(By.id('editClientForm')), 5000);
    
      // Enter the updated client information
      const surnameField = await driver.findElement(By.id('surnameField'));
      await surnameField.clear();
      await surnameField.sendKeys('Lalaev');

      const firstnameField = await driver.findElement(By.id('firstnameField'));
      await firstnameField.clear();
      await firstnameField.sendKeys('Lalan');
    
      const emailField = await driver.findElement(By.id('emailField'));
      await emailField.clear();
      await emailField.sendKeys('janedoe@example.com');

      const phoneNumberField = await driver.findElement(By.id('phoneNumberField'));
      await phoneNumberField.clear();
      await phoneNumberField.sendKeys('996766567878');
    
      const datebirthField = await driver.findElement(By.id('datebirthField'));
      await datebirthField.clear();
      await datebirthField.sendKeys('02.18.2020');
    
      // Submit the form
      const saveButton = await driver.findElement(By.id('saveButton'));
      await saveButton.click();
    
      // Wait for the success message to appear
      await driver.wait(until.elementLocated(By.id('successMessage')), 5000);
    
      // Verify that the client information was updated successfully
      const successMessage = await driver.findElement(By.id('successMessage'));
      const messageText = await successMessage.getText();
      assert.equal(messageText, 'Client information updated successfully.');
    
      // Navigate to the View Client page to verify the updated information
      await driver.get('http://167.114.201.175:5000/clients');
    
 
    
      if (!foundClient) {
        assert.fail('Client with ID 1234 not found');
      }
    
      
      await driver.quit();
    })()
})