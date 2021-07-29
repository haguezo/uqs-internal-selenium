import basePageModule = require('../Pages/BasePage');

export class DetailsPage extends basePageModule.BasePage {

    courseTitleText = this.getElementByDataTestId('courseTitleText');
    courseLevelText = this.getElementByDataTestId('courseLevelText');
    concernText = this.getElementByDataTestId('concernText');
    desiredResolutionInput = this.getElementByDataTestId('desiredResolution');
    linkedCaseInput = this.getElementByDataTestId('linkedCase');
    linkedCaseText = this.getElementByDataTestId('linkedCaseText');
    linkedNotesInput = this.getElementByDataTestId('linkNotes');
    linkedNotesText = this.getElementByDataTestId('linkNotesText');
    providerReviewInput = this.getElementByDataTestId('providerReview');
    providerReviewText = this.getElementByDataTestId('providerReviewText');
    internalComplaintInput = this.getElementByDataTestId('internalComplaint');
    internalComplaintText = this.getElementByDataTestId('internalComplaintComplete');
    oiaReviewInput = this.getElementByDataTestId('oiaReview');
    oiaReviewText = this.getElementByDataTestId('oiaReviewText');
    externalAgenyInformationInput = this.getElementByDataTestId('externalAgencyInformation');
    externalAgenyInformationText = this.getElementByDataTestId('externalAgencyInformationText');
    notesInput = this.getElementByDataTestId('notes');
    notesText = this.getElementByDataTestId('notesText');
    saveButton = this.getElementByDataTestId('save');

    enterDesiredResolution(resolution): void {
        this.desiredResolutionInput.sendKeys(resolution);
    }

    clickLinkedCase() {
        this.linkedCaseInput.click();
    }

    clickProviderReview() {
        this.providerReviewInput.click();
    }

    clickOiaReview() {
        this.oiaReviewInput.click();
    }

    enterExternalAgenyInformation(information): void {
        this.externalAgenyInformationInput.sendKeys(information);
    }

    enterLinkedCaseNotes(notes): void {
        this.linkedNotesInput.sendKeys(notes);
    }

    enterNotes(notes): void {
        this.notesInput.sendKeys(notes);
    }

    clearAll(): void {
        this.linkedCaseInput.clear();
        this.linkedNotesInput.clear();
        this.providerReviewInput.clear();
        this.oiaReviewInput.clear();
        this.notesInput.clear();
    }
}
module.exports = new DetailsPage;