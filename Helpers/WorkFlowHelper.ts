import base = require('./BaseWorkFlowHelper');
import enquiriesModule = require('../Pages/EnquiriesPage');
import mainModule = require('../Pages/MainPage');
import enquirerModule = require('../Pages/EnquirerPage');
import detailsModule = require('../Pages/DetailsPage');
import documentsModule = require('../Pages/DocumentsPage');
import stageOneModule = require('../Pages/StageOnePage');
import stageTwoModule = require('../Pages/StageTwoPage');

export class WorkFlowHelper extends base.BaseWorkFlowHelper {

    enquirerTypes = this.testData.enquirerTypes;

    // pages to automate
    loginPage: LoginPage = require('../Pages/LoginPage.js');
    enquiriesPage: enquiriesModule.EnquiriesPage = require('../Pages/EnquiriesPage.js');
    mainPage: mainModule.MainPage = require('../Pages/MainPage.js');
    enquirerPage: enquirerModule.EnquirerPage = require('../Pages/EnquirerPage.js');
    detailsPage: detailsModule.DetailsPage = require('../Pages/DetailsPage.js');
    documentsPage: documentsModule.DocumentsPage = require('../Pages/DocumentsPage.js');
    stageOnePage: stageOneModule.StageOnePage = require('../Pages/StageOnePage.js');
    stageTwoPage: stageTwoModule.StageTwoPage = require('../Pages/StageTwoPage.js');

    goToApplication() {
        browser.driver.get(browser.baseUrl);  // will redirect to the Login page which is non-Angular so use browser.driver instead of browser
    }

    logout() {
        var logoutLink = element(by.css("[data-test-id='logoutMenuItem']"));
        logoutLink.isDisplayed().then(function (isVisible) {
            if (isVisible) {
                logoutLink.click();
            }
        });
    }
}

module.exports = new WorkFlowHelper;