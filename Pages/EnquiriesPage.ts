import basePageModule = require('../Pages/BasePage');

export class EnquiriesPage extends basePageModule.BasePage {

    searchInput = this.getElementByDataTestId('search');
    clearSearchButton = this.getElementByDataTestId('clearSearch');
    addNewButton = this.getElementByDataTestId('addNew');
    exportEnquiriesButton = this.getElementByDataTestId('exportEnquiries');
    filterStatusDropdown = this.getElementByDataTestId('filterStatus');
    noEnquiriesMessage = this.getElementByDataTestId('noEnquiriesMessage');
    enquiriesTable = this.getElementByDataTestId('enquiriesTable');
    refHeader = this.getElementByDataTestId('acknowledgementRef');
    enquirerNameHeader = this.getElementByDataTestId('enquirerName');
    providerNameHeader = this.getElementByDataTestId('providerName');
    enquiryTypeHeader = this.getElementByDataTestId('enquiryType');
    submissionDateHeader = this.getElementByDataTestId('submissionDate');
    statusHeader = this.getElementByDataTestId('status');
    caseManagerHeader = this.getElementByDataTestId('caseManager');
    linkedCasesHeader = this.getElementByDataTestId('linkedCases');

    open(url = null): void {
        browser.driver.get(url || browser.baseUrl);
    };

    search(searchTerm): void {
        this.searchInput.sendKeys(searchTerm);
    }

    clearSearch(): void {
        this.clearSearchButton.click();
    }

    addNew(): void {
        this.addNewButton.click();
    }

    exportEnquiries(): void {
        this.exportEnquiriesButton.click();
    }

    filterStatus(status): void {
        this.filterStatusDropdown
            .element(by.cssContainingText('option', status))
            .click();
    }

    getReferenceByRow(rowNumber: number) {
        this.getElementByDataTestId('row' + rowNumber)
            .getText().then(function (text) {
                return text;
            });
    }

    selectEnquiryByRow(rowNumber: number): void {
        this.getElementByDataTestId('row' + rowNumber)
            .click();
    }
   

}
module.exports = new EnquiriesPage;