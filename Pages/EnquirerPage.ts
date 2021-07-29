import basePageModule = require('../Pages/BasePage');
import mainPageModule = require('../Pages/MainPage');

export class EnquirerPage extends basePageModule.BasePage {

    editButton = this.getElementByDataTestId('edit');

    // enquirer
    nameText = this.getElementByDataTestId('enquirerName');
    addressText = this.getElementByDataTestId('address');
    phoneText = this.getElementByDataTestId('telephone');
    emailText = this.getElementByDataTestId('email');
    over18Text = this.getElementByDataTestId('eighteenOrOverTextOver');
    under18Text = this.getElementByDataTestId('eighteenOrOverTextUnder');
    hasRepresentativeText = this.getElementByDataTestId('hasRepresentativeText');
    contactTypeText = this.getElementByDataTestId('contactType');
    tribunalText = this.getElementByDataTestId('tribunal');

    // student
    studentTypeText = this.getElementByDataTestId('studentType');
    attendanceText = this.getElementByDataTestId('attendance');
    courseTitleText = this.getElementByDataTestId('courseTitle');
    levelText = this.getElementByDataTestId('level');
    courseStartDateText = this.getElementByDataTestId('courseStartDate');
    courseEndDateText = this.getElementByDataTestId('courseEndDate');
    withdrawDateText = this.getElementByDataTestId('withdrawDate');

    // staff
    jobTitleText = this.getElementByDataTestId('jobTitle');
    employmentStartDateText = this.getElementByDataTestId('employmentStartDate');
    employmentEndDateText = this.getElementByDataTestId('employmentEndDate');

    // other
    otherRelationshipText = this.getElementByDataTestId('otherRelationship');

    // edit enquirer modal
    editModal = this.getElementByDataTestId('editModal');
    nameInput = this.getElementByDataTestId('nameInput');
    nameRequired = this.getElementByDataTestId('nameRequired');
    addressLine1Input = this.getElementByDataTestId('addressLine1Input');
    addressLine2Input = this.getElementByDataTestId('addressLine2Input');
    addressLine3Input = this.getElementByDataTestId('addressLine3Input');
    postcodeInput = this.getElementByDataTestId('postcodeInput');
    phoneInput = this.getElementByDataTestId('phoneInput');
    emailInput = this.getElementByDataTestId('emailInput');
    emailRequired = this.getElementByDataTestId('emailRequired');
    emailInvalid = this.getElementByDataTestId('emailInvalid');
    saveButton = this.getElementByDataTestId('save');
    cancelButton = this.getElementByDataTestId('cancel');

    enterName(text, clear = false): void {
        if (clear) {
            this.nameInput.clear().then(function () {
                this.nameInput.sendKeys(text);
            });
        }
        else
        {
            this.nameInput.sendKeys(text);
        }
    }

    enterAddressLine1(text, clear = false): void {
        if (clear) {
            this.addressLine1Input.clear().then(function () {
                this.addressLine1Input.sendKeys(text);
            });
        }
        else {
            this.addressLine1Input.sendKeys(text);
        }
    }

    enterAddressLine2(text, clear = false): void {
        if (clear) {
            this.addressLine2Input.clear().then(function () {
                this.addressLine2Input.sendKeys(text);
            });
        }
        else {
            this.addressLine2Input.sendKeys(text);
        }
    }

    enterAddressLine3(text, clear = false): void {
        if (clear) {
            this.addressLine3Input.clear().then(function () {
                this.addressLine3Input.sendKeys(text);
            });
        }
        else {
            this.addressLine3Input.sendKeys(text);
        }
    }

    enterPostcode(text, clear = false): void {
        if (clear) {
            this.postcodeInput.clear().then(function () {
                this.postcodeInput.sendKeys(text);
            });
        }
        else {
            this.postcodeInput.sendKeys(text);
        }
    }

    enterPhone(text, clear = false): void {
        if (clear) {
            this.phoneInput.clear().then(function () {
                this.phoneInput.sendKeys(text);
            });
        }
        else {
            this.phoneInput.sendKeys(text);
        }
    }

    enterEmail(text, clear = false): void {
        if (clear) {
            this.emailInput.clear().then(function () {
                this.emailInput.sendKeys(text);
            });
        }
        else {
            this.emailInput.sendKeys(text);
        }
    }

    contactType(): string {
        var contactType = '';
        this.contactTypeText.getText().then(function (text) {
            contactType = text;
        });
        return contactType;
    }

    tribunal(): string {
        var tribunal = '';
        this.tribunalText.getText().then(function (text) {
            tribunal = text;
        });
        return tribunal;
    }
}
module.exports = new EnquirerPage;