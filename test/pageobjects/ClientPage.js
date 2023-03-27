class ClientPage {

    get userSurNameField() {
        return $('input[formcontrolname="userSurname"]');
    }

    get userNameField() {
        return $('input[formcontrolname="userName"]');
    }

    get userMiddleName() {
        return $('[formcontrolname="userMiddleName"]')
    }

    get profession() {
        return $('[class="mat-select-arrow"]')
    }

    get professionOption() {
        return $(`[id="mat-option-6"]`)
    }

    get genderField() {
        return $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');
    }

    get emailField() {
        return $('input[formcontrolname="email"]');
    }

    get phoneField() {
        return $('input[formcontrolname="phone"]');
    }

    get birthdayField() {
        return $('input[formcontrolname="birthday"]');
    }


    get saveButton() {
        return $('button[name="save"]');
    }

    get userForm() {
        return $('div.add-user-modal');
    }

    get dialogButtonSave() {
        return $('.mat-raised-button:nth-child(2)');
    }

    get dialogButtonBack() {
        return $('.mat-raised-button:nth-child(1)');
    }

    // getters for editing a client
    get detailedViewForm() {
        return $('div.modal-window user');
    }

    get firstItem() {
        return $('tr[class="crm-navigator-table__row ng-star-inserted"]');
    }

    get changeUserName() {
        return $('[id="mat-input-1"]')
    };

    get changeUserSurname() {
        return $('[id="mat-input-2"]')
    };

    get changeUserPatronymic() {
        return $('[id="mat-input-3"]')
    }

    get changeBirthdayField() {
        return $('[id="mat-input-4"]')
    }

    get physicalCardField() {
        return $('.client-data:nth-child(2) span[class="editIcon"]')
    };

    get discountCardField() {
        return $('.client-data:nth-child(3) span[class="editIcon"]')
    }


    get cardNo() {
        return $('[formcontrolname="cardNo"]')
    };

    get cardNo2() {
        return $('[formcontrolname="cardNo"]')
    }

    get contactIcon() {
        return $('div[class="col-item tel"] span[class="editIcon"]')
    }

    get selectJobIcon() {
        return $('[class="mat-select-arrow"]')
    }

    get selectJob() {
        return $(`[id="mat-option-15"]`)
    }

    get optionsForReview() {
        return $('[formcontrolname="doNotWriteForReviews"]')
    }



    // get selectors for filter functionalities
    get dropFilterButton() {
        return $('.actions button:nth-child(3)')
    }
    get saveFilterTemplate() {
        return $('.actions button:nth-child(2)')
    }
    get moreInfoFilter(){
        return $('div.header-category ul li:nth-child(3)')
    }

    get saveInsertedTemplateButton(){
        return $('[class="bold mat-button"]')
    }

    get filterTemplateField(){
        return $('[id="mat-input-1"]')
    }

    get deleteTemplateIcon(){
        return $('mat-icon.material-icons:nth-child(2)')
    }
    get yesToDeleteTemplate(){
        return $(`[class="mat-button modal-btn-ok"]`)
    }

    get searchField() {
        return $('[id="mat-input-0"]')
    }

    async openForm() {
        await $('button.clients-add-user-dialog').click();
        await expect(this.userForm).toExist();
    }

    async setSurname(surname) {
        await this.userSurNameField.setValue(surname)
    }

    async setName(name) {
        await this.userNameField.setValue(name);
    }

    async setMiddleName(middleName) {
        await this.userMiddleName.setValue(middleName)
    }

    async setGender() {
        await this.genderField.click();
    }

    async setProfession() {
        await this.profession.click()
        await this.professionOption.click()
    }

    async setEmail(email) {
        await this.emailField.setValue(email);
    }

    async setPhone(phone) {
        await this.phoneField.setValue(phone);
    }

    async setBirthday(birthday) {
        await this.birthdayField.setValue(birthday)
    }

    async save() {
        await this.saveButton.click()
    }

    async openDetailedView() {
        await this.firstItem.click()
        await expect(this.detailedViewForm.toExist());

    }

    async editName(newName) {
        if (await this.changeUserName.getValue() != null) {
            await this.changeUserName.clearValue()
            await this.changeUserName.setValue(newName)
        } else {
            await this.changeUserName.setValue(newName)
        }


    }

    async editPatronymic(newPatronymic) {
        await this.changeUserPatronymic.setValue(newPatronymic)
    }

    async editBirthday(newBirthday) {
        await this.changeBirthdayField.setValue(newBirthday)
    }


    async editSurname(newSurname) {
        if (await this.changeUserSurname.getValue() != null) {
            await this.changeUserSurname.clearValue()
            await this.changeUserSurname.setValue(newSurname)

        } else {
            await this.changeUserSurname.setValue(newSurname)
        }

    }

    async editPhysicalCard(number) {
        await this.physicalCardField.click();
        await this.cardNo.setValue(number)

    }

    async editDiscountCard(number) {
        await this.discountCardField.click();
        await this.cardNo2.setValue(number)

    }

    async dialogSave(boolean) {
        if (boolean) {
            await this.dialogButtonSave.click()
        } else {
            await this.dialogButtonBack.click()
        }

    }

    async editContacts(newContact, newEmail) {
        await this.contactIcon.click();
        await this.phoneField.setValue(newContact);
        await this.emailField.setValue(newEmail)
    }

    async chooseJob() {
        await this.selectJobIcon.click();
        await this.selectJob.click();
    }

    async reviewOptions() {
        await this.optionsForReview.click()
    }

    async deleteFilter() {
        await this.dropFilterButton.click();
    }

    async pressSearchFilter() {
        await this.searchField.click()
    }
    async setNameFilterTemplate(template){
        await this.filterTemplateField.setValue(template)
    }
    async openTemplateFilterToSave(){
        await this.saveFilterTemplate.click()
    }
    async saveInsertedTemplate(){
       await this.saveInsertedTemplateButton.click();
    }
    async moreInfoTemplate(){
        await this.moreInfoFilter.click();
    }
    async deleteTemplate(){
        await this.deleteTemplateIcon.click();
    }
    async pressYesToDelete(){
        await this.yesToDeleteTemplate.click();
    }


    async chooseJobFilter() {
        await this.jobFieldFilter.click()
        await this.jobOptionFilter.click();
    }

    async clickOnTotalCheck() {
        await this.totalCheck.click()
    }

    async blackListFieldClick() {
        await this.blackListField.click()
        await this.blackListOption.click()
    }


}


module.exports = new ClientPage()