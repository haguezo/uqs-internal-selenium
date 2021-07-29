import basePageModule = require('../Pages/BasePage');

export class StageOnePage extends basePageModule.BasePage {
    
    enquiryTypeDropdown = this.getElementByDataTestId('enquiryType');
    caseManagerDropdown = this.getElementByDataTestId('caseManager');
    withinScopeTrueRadio = this.getElementByDataTestId('withinScopeTrue');
    withinScopeFalseRadio = this.getElementByDataTestId('withinScopeFalse');
    reasonNotInScopeInput = this.getElementByDataTestId('reasonNotInScope');
    requiresProviderContactTrueRadio = this.getElementByDataTestId('requiresProviderContactTrue');
    requiresProviderContactFalseRadio = this.getElementByDataTestId('requiresProviderContactFalse');
    ProviderNameInput = this.getElementByDataTestId('providerContactName');
    ProviderRoleInput = this.getElementByDataTestId('providerRole');
    ProviderEmailInput = this.getElementByDataTestId('providerEmail');
    ProviderTelephoneInput = this.getElementByDataTestId('providerTelephone');
    ProviderNotesInput = this.getElementByDataTestId('providerNotes');
    requiresDocumentationTrueRadio = this.getElementByDataTestId('requiresDocumentationTrue');
    requiresDocumentationFalseRadio = this.getElementByDataTestId('requiresDocumentationFalse');
    enquirerNotesInput = this.getElementByDataTestId('enquirerNotes');
    saveButton = this.getElementByDataTestId('save');

}
module.exports = new StageOnePage;