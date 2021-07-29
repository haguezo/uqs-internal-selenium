import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module StageOneSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var header = workFlowHelper.mainPage;
    var page = workFlowHelper.stageOnePage;
    var testData = workFlowHelper.testData.stage1;
    var constants = workFlowHelper.testData.constants;

    workFlowHelper.using(workFlowHelper.enquirerTypes, function (type) {

        describe('The "Stage 1" tab for an enquirer of type "' + type + '"', function () {

            beforeAll(function () {
                workFlowHelper.enquiriesPage.open();

                var testName;
                if (type == "student") {
                    testName = workFlowHelper.testData.testStudent;
                }
                if (type == "staff") {
                    testName = workFlowHelper.testData.testStaff;
                }
                if (type == "other") {
                    testName = workFlowHelper.testData.testOther;
                }

                workFlowHelper.enquiriesPage.search(testName);
                workFlowHelper.enquiriesPage.selectEnquiryByRow(0);
                header.stage1Tab.click();
            });

            it('should display the "Stage 1" page', function () {
                expect(browser.getCurrentUrl()).toContain(testData.url);
            });

            it('should display the application title "' + constants.appTitle + '"', function () {
                expect(page.appTitle.isDisplayed()).toBeTruthy();
                expect(page.appTitle.getText()).toEqual(constants.appTitle);
            });

            it('should display the title "' + testData.pageTitle + '"', function () {
                expect(header.pageTitle.isDisplayed()).toBeTruthy();
                expect(header.pageTitle.getText()).toEqual(testData.pageTitle);
            });

            describe('Header controls', function () {

                it('should display an "Enquirer" tab', function () {
                    expect(header.enquirerTab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Enquirer" tab as inactive', function () {
                    expect(header.enquirerTab.getAttribute('class')).not.toMatch(constants.active);
                });

                it('should display a "Details" tab', function () {
                    expect(header.detailsTab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Details" tab as active', function () {
                    expect(header.detailsTab.getAttribute('class')).not.toMatch(constants.active);
                });

                it('should display a "Documents" tab', function () {
                    expect(header.documentsTab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Documents" tab as inactive', function () {
                    expect(header.documentsTab.getAttribute('class')).not.toMatch(constants.active);
                });

                it('should display a "Stage 1" tab', function () {
                    expect(header.stage1Tab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Stage 1" tab as inactive', function () {
                    expect(header.stage1Tab.getAttribute('class')).toMatch(constants.active);
                });

                it('should display a "Stage 2" tab', function () {
                    expect(header.stage2Tab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Stage 2" tab as inactive', function () {
                    expect(header.stage2Tab.getAttribute('class')).not.toMatch(constants.active);
                });

                it('should display an "Appeal" tab', function () {
                    expect(header.appealTab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Appeal" tab as inactive', function () {
                    expect(header.appealTab.getAttribute('class')).not.toMatch(constants.active);
                });

                it('should display the enquirer name', function () {
                    expect(header.enquirerNameText.isDisplayed()).toBeTruthy();
                });

                it('should display the enquirer name as text (read-only)', function () {
                    expect(header.enquirerNameText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should contain text for the enquirer name', function () {
                    expect(header.enquirerNameText.getText()).not.toBe('');
                });
            });

            describe('Stage 1 tab specific controls for an enquirer of type "' + type + '"', function () {

                it('should display the enquiry type dropdown', function () {
                    expect(page.enquiryTypeDropdown.isDisplayed()).toBeTruthy();
                });

                it('should display the enquiry type dropdown as enabled by default', function () {
                    expect(page.enquiryTypeDropdown.isEnabled()).toBeTruthy();
                });

                it('should display the case manager dropdown', function () {
                    expect(page.caseManagerDropdown.isDisplayed()).toBeTruthy();
                });

                it('should display the case manager dropdown as enabled by default', function () {
                    expect(page.caseManagerDropdown.isEnabled()).toBeTruthy();
                });

                it('should contain a radio button for "Yes" for "Within scope"', function () {
                    expect(page.withinScopeTrueRadio.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "False" for "Within scope"', function () {
                    expect(page.withinScopeFalseRadio.isDisplayed()).toBeTruthy();
                });

                it('should display the not in scope text area', function () {
                    expect(page.reasonNotInScopeInput.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "Yes" for "Requires provider contact"', function () {
                    expect(page.requiresProviderContactTrueRadio.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "False" for "Requires provider contact"', function () {
                    expect(page.requiresProviderContactFalseRadio.isDisplayed()).toBeTruthy();
                });

                it('should display the provider name text area', function () {
                    expect(page.ProviderNameInput.isDisplayed()).toBeTruthy();
                });

                it('should display the provider role text area', function () {
                    expect(page.ProviderRoleInput.isDisplayed()).toBeTruthy();
                });

                it('should display the provider email text area', function () {
                    expect(page.ProviderEmailInput.isDisplayed()).toBeTruthy();
                });

                it('should display the provider telephone text area', function () {
                    expect(page.ProviderTelephoneInput.isDisplayed()).toBeTruthy();
                });

                it('should display the provider notes text area', function () {
                    expect(page.ProviderNotesInput.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "Yes" for "Requires documentation from enquirer"', function () {
                    expect(page.requiresDocumentationTrueRadio.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "False" for "Requires documentation from enquirer"', function () {
                    expect(page.requiresDocumentationFalseRadio.isDisplayed()).toBeTruthy();
                });

                it('should display the enquirer notes text area', function () {
                    expect(page.enquirerNotesInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Save buttton as disaabled by default', function () {
                    expect(page.saveButton.isEnabled()).toBeFalsy();
                });
            });

            describe('Data entry on the Stage 1 tab for an enquirer of type "' + type + '"', function () {

                // THIS SECTION TO BE COMPLETED

                it('should contain options for enquiry type', function () {

                });

                it('should allow an enquiry type to be selected', function () {

                });

                it('should contain options for case manager', function () {

                });

                it('should allow a case manager to be selected', function () {

                });

                it('should allow "Yes" to be selected for "Within scope?"', function () {

                });

                it('should allow "No" to be selected for "Within scope?"', function () {

                });

                it('should allow text to be entered for "Reason not in scope"', function () {

                });

                //it('should display the Save button as enabled when changes made', function () {
                //    expect(page.saveButton.isEnabled()).toBeTruthy();
                //});

                afterAll(function () {
                    page.closeUnsavedChangesDialog();
                });
            });
        });
    });
}