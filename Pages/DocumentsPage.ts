import basePageModule = require('../Pages/BasePage');

export class DocumentsPage extends basePageModule.BasePage {

    showDeletedLink = this.getElementByDataTestId('showDeleted');
    hideDeletedLink = this.getElementByDataTestId('hideDeleted');
    addDocumentButton = this.getElementByDataTestId('addDocument');
    uploadDialog = this.getElementByDataTestId('uploadDialog');
    chooseFileButton = this.getElementByDataTestId('chooseFile');
    descriptionInput = this.getElementByDataTestId('description');
    sourceDropdown = this.getElementByDataTestId('source');
    saveButton = this.getElementByDataTestId('save');
    cancelButton = this.getElementByDataTestId('cancel');

}
module.exports = new DocumentsPage;