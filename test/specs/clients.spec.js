const loginPage = require("../pageobjects/LoginPage")
const clientPage = require("../pageobjects/ClientPage")
describe("Client page", () => {
    it("Success login", async () => {
        await loginPage.open()
        await loginPage.doLogin("Admin", "Admin@Navi")
    })

    xit("Create client", async () => {
            await clientPage.openForm()
            await clientPage.setSurname("newBaizak")
            await clientPage.setName("Test")
            await clientPage.setMiddleName("Testovich")
            await clientPage.setEmail("baizaknewemailalatoo@gmail.com")
            await clientPage.setPhone("996703781301")
            await browser.pause(2000)
            await clientPage.setGender()
            await clientPage.setBirthday("01.01.2001")
            await clientPage.save()
            await browser.pause(3000)
            await browser.pause(5000)

    })

    xit("Edit Client", async () => {
        await browser.pause(5000)
        await clientPage.openDetailedView()
        await browser.pause(2000)
        await clientPage.editPhysicalCard(93902393);
        await browser.pause(2000)
        await clientPage.dialogSave(true);
        await browser.pause(2000)
        await clientPage.editDiscountCard(93910393)
        await browser.pause(4000)
        await clientPage.dialogSave(true)
        await clientPage.editName("NewName")
        await browser.pause(2000)
        await clientPage.editSurname("NewSurname");
        await browser.pause(2000)
        await clientPage.editPatronymic("NewPatronymic")
        await browser.pause(2000)
        await clientPage.editBirthday("1/1/2002")
        await browser.pause(2000)
        await clientPage.editContacts("996567194125", "baizakEmailGmail@gmail.com")
        await browser.pause(3000)
        await clientPage.dialogSave(true)
        await browser.pause(2000)
        await clientPage.chooseJob()
        await clientPage.reviewOptions()
        await browser.pause(2000)
        await clientPage.save()
        await browser.pause(5000)
    })
    it("View Client", async () => {
        await browser.pause(5000)
        await clientPage.openDetailedView()
        await browser.pause(3000)

    })

    xit("Save filter", async () => {
        await clientPage.pressSearchFilter()
        await browser.pause(3000)
        await clientPage.openTemplateFilterToSave()
        await browser.pause(2000)
        await clientPage.setNameFilterTemplate("Template name")
        await clientPage.saveInsertedTemplate()
        await browser.pause(5000)
    })
    xit("Delete filter", async () => {
        await clientPage.moreInfoTemplate()
        await browser.pause(3000)
        await clientPage.deleteTemplate()
        await browser.pause(3000)
        await clientPage.pressYesToDelete();
        await browser.pause(4000)


    })

})
