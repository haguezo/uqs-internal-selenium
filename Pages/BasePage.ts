export class BasePage {

    appTitle = this.getElementByDataTestId('appTitle');
    pageTitle = this.getElementByDataTestId('pageTitle');

    closeUnsavedChangesDialog() {
        browser.executeScript("window.onbeforeunload = function(){};");
    }

    getElementByDataTestId(id: string) {
        return element(by.css('[data-test-id="' + id + '"]'));
    }

    getAllElementsByModel(model: string) {
        return element.all(by.model(model));
    }
}