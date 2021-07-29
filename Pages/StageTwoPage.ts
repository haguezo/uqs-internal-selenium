import basePageModule = require('../Pages/BasePage');

export class StageTwoPage extends basePageModule.BasePage {

    referredDate = this.getElementByDataTestId('referredDate');
    meetingDate = this.getElementByDataTestId('meetingDate');
    planAgreed = this.getElementByDataTestId('planAgreed');
    summaryInput = this.getElementByDataTestId('summary');
    outcomeDropdown = this.getElementByDataTestId('outcomeDropdown');
    panelDate = this.getElementByDataTestId('panelDate');
    outcomeInput = this.getElementByDataTestId('outcomeInput');
    saveButton = this.getElementByDataTestId('save');
}
module.exports = new StageTwoPage;