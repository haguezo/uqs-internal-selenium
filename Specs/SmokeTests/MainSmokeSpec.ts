import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module MainSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.mainPage;
    var testData = workFlowHelper.testData.enquirer;
    var constants = workFlowHelper.testData.constants;

    describe('The "Main" page', function () {

        beforeAll(function () {
            workFlowHelper.enquiriesPage.open();
            workFlowHelper.enquiriesPage.selectEnquiryByRow(0);
        });

        it('should display the "Enquirer" page', function () {
            expect(browser.getCurrentUrl()).toContain(testData.url);
        });

        it('should display the application title "' + constants.appTitle + '"', function () {
            expect(page.appTitle.isDisplayed()).toBeTruthy();
            expect(page.appTitle.getText()).toEqual(constants.appTitle);
        });

        it('should display the title "' + testData.pageTitle + '"', function () {
            expect(page.pageTitle.isDisplayed()).toBeTruthy();
            expect(page.pageTitle.getText()).toEqual(testData.pageTitle);
        });

        describe('Controls', function () {

            it('should display a link to return to the list of enquiries', function () {
                expect(page.returnToListLink.isDisplayed()).toBeTruthy();
            });

            it('should display the enquirer name', function () {
                expect(page.enquirerNameText.isDisplayed()).toBeTruthy();
            });

            it('should display the enquirer name as text (read-only)', function () {
                expect(page.enquirerNameText.getAttribute('class')).toMatch(constants.formControlStatic);
            });

            it('should display the provider name', function () {
                expect(page.providerNameText.isDisplayed()).toBeTruthy();
            });

            it('should display the provider name as text (read-only)', function () {
                expect(page.providerNameText.getAttribute('class')).toMatch(constants.formControlStatic);
            });

            it('should display the reference', function () {
                expect(page.referenceText.isDisplayed()).toBeTruthy();
            });

            it('should display the reference as text (read-only)', function () {
                expect(page.referenceText.getAttribute('class')).toMatch(constants.formControlStatic);
            });

            it('should display the submission date', function () {
                expect(page.submissionDateText.isDisplayed()).toBeTruthy();
            });

            it('should display the submission date as text (read-only)', function () {
                expect(page.submissionDateText.getAttribute('class')).toMatch(constants.formControlStatic);
            });

            it('should display the status dropdown', function () {
                expect(page.statusDropdown.isDisplayed()).toBeTruthy();
            });

            it('should display the status dropdown as enabled', function () {
                expect(page.statusDropdown.isEnabled()).toBeTruthy();
            });

            it('should display an "Enquirer" tab', function () {
                expect(page.enquirerTab.isDisplayed()).toBeTruthy();
            });

            it('should display the "Enquirer" tab as active on initial load', function () {
                expect(page.enquirerTab.getAttribute('class')).toMatch(constants.active);
            });

            it('should display a "Details" tab', function () {
                expect(page.detailsTab.isDisplayed()).toBeTruthy();
            });

            it('should display the "Details" tab as inactive on initial load', function () {
                expect(page.detailsTab.getAttribute('class')).not.toMatch(constants.active);
            });

            it('should display a "Documents" tab', function () {
                expect(page.documentsTab.isDisplayed()).toBeTruthy();
            });

            it('should display the "Documents" tab as inactive on initial load', function () {
                expect(page.documentsTab.getAttribute('class')).not.toMatch(constants.active);
            });

            it('should display a "Stage 1" tab', function () {
                expect(page.stage1Tab.isDisplayed()).toBeTruthy();
            });

            it('should display the "Stage 1" tab as inactive on initial load', function () {
                expect(page.stage1Tab.getAttribute('class')).not.toMatch(constants.active);
            });

            it('should display a "Stage 2" tab', function () {
                expect(page.stage2Tab.isDisplayed()).toBeTruthy();
            });

            it('should display the "Stage 2" tab as inactive on initial load', function () {
                expect(page.stage2Tab.getAttribute('class')).not.toMatch(constants.active);
            });

            it('should display an "Appeal" tab', function () {
                expect(page.appealTab.isDisplayed()).toBeTruthy();
            });

            it('should display the "Appeal" tab as inactive on initial load', function () {
                expect(page.appealTab.getAttribute('class')).not.toMatch(constants.active);
            });
        });

        describe('Navigation', function () {

            it('should display the "Enquirer" page on clicking the "Enquirer" tab', function () {
                page.enquirerTab.click();
                expect(browser.getCurrentUrl()).toContain(testData.url);
            });

            it('should display the "Details" page on clicking the "Details" tab', function () {
                page.detailsTab.click();
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.details.url);
            });

            it('should display the "Documents" page on clicking the "Documents" tab', function () {
                page.documentsTab.click();
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.documents.url);
            });

            it('should display the "Stage 1" page on clicking the "Stage 1" tab', function () {
                page.stage1Tab.click();
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.stage1.url);
            });

            it('should display the "Stage 2" page on clicking the "Stage 2" tab', function () {
                page.stage2Tab.click();
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.stage2.url);
            });

            it('should display the "Appeal" page on clicking the "Appeal" tab', function () {
                page.appealTab.click();
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.appeal.url);
            });

            it('should display the "Enquiries" page on clicking the "Return to list" link', function () {
                page.returnToListLink.click();
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.enquiries.url);
            });
        });
    });
}