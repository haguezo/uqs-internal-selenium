import basePageModule = require('../Pages/BasePage');

export class MainPage extends basePageModule.BasePage {

    returnToListLink = this.getElementByDataTestId('returnToList');
    enquirerNameText = this.getElementByDataTestId('enquirer');
    under18Flag = this.getElementByDataTestId('under18Flag');
    hasRepresentativeFlag = this.getElementByDataTestId('hasRepresentativeFlag');
    referenceText = this.getElementByDataTestId('reference');
    providerNameText = this.getElementByDataTestId('providerName');
    submissionDateText = this.getElementByDataTestId('submissionDate');
    createdInternally = this.getElementByDataTestId('createdInternally');
    statusDropdown = this.getElementByDataTestId('status');
    statusText = this.getElementByDataTestId('statusText');  // should be visible if R/O instead of dropdown
    selectedStatus = this.getElementByDataTestId('selectedStatus');
    tabs = this.getElementByDataTestId('tabs');
    enquirerTab = this.getElementByDataTestId('enquirerTab');
    detailsTab = this.getElementByDataTestId('detailsTab');
    documentsTab = this.getElementByDataTestId('documentsTab');
    stage1Tab = this.getElementByDataTestId('stage1Tab');
    stage2Tab = this.getElementByDataTestId('stage2Tab');
    appealTab = this.getElementByDataTestId('appealTab');
    detailsUnsavedGlyphicon = this.getElementByDataTestId('detailsUnsaved');
    stage1UnsavedGlyphicon = this.getElementByDataTestId('stage1Unsaved');
    stage2UnsavedGlyphicon = this.getElementByDataTestId('stage2Unsaved');
    appealUnsavedGlyphicon = this.getElementByDataTestId('appealUnsaved');
    discardChangesButton = this.getElementByDataTestId('discard');
    cancelChangesButton = this.getElementByDataTestId('cancel');

    selectStatus(statusLongName): void {
        var statusToSelect = this.getElementByDataTestId('status' + statusLongName);
        statusToSelect.isDisplayed().then(function (isDisplayed) {
            statusToSelect.click();
        });
    }
}
module.exports = new MainPage;