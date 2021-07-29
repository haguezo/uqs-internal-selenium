import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module DetailsSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var header = workFlowHelper.mainPage;
    var page = workFlowHelper.detailsPage;
    var testData = workFlowHelper.testData.details;
    var constants = workFlowHelper.testData.constants;

    workFlowHelper.using(workFlowHelper.enquirerTypes, function (type) {

        describe('The "Details" tab for an equirer of type "' + type + '"', function () {

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
                header.detailsTab.click();
            });

            it('should display the "Details" page', function () {
                expect(browser.getCurrentUrl()).toContain(testData.url);
            });

            it('should display the application title "' + constants.appTitle + '"', function () {
                expect(header.appTitle.isDisplayed()).toBeTruthy();
                expect(header.appTitle.getText()).toEqual(constants.appTitle);
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
                    expect(header.detailsTab.getAttribute('class')).toMatch(constants.active);
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
                    expect(header.stage1Tab.getAttribute('class')).not.toMatch(constants.active);
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

            describe('Details tab specific controls for an enquirer of type "' + type + '"', function () {

                if (type == "student") {

                    it('should display the course title as text (read-only)', function () {
                        expect(page.courseTitleText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the course title', function () {
                        expect(page.courseTitleText.getText()).not.toBe('');
                    });

                    it('should display the course level as text (read-only)', function () {
                        expect(page.courseLevelText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the course level', function () {
                        expect(page.courseLevelText.getText()).not.toBe('');
                    });
                }

                it('should display the Concern', function () {
                    expect(page.concernText.isDisplayed()).toBeTruthy();
                });

                it('should display the Concern as text (read-only)', function () {
                    expect(page.concernText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should display the desired resolution text area', function () {
                    expect(page.desiredResolutionInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Linked case checkbox', function () {
                    expect(page.linkedCaseInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Linked case checkbox as enabled by default', function () {
                    expect(page.linkedCaseInput.isEnabled()).toBeTruthy();
                });

                it('should display the Linked reference notes text area', function () {
                    expect(page.linkedNotesInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Linked reference notes text area as enabled by default', function () {
                    expect(page.linkedNotesInput.isEnabled()).toBeTruthy();
                });

                it('should display the Provider review checkbox', function () {
                    expect(page.providerReviewInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Provider review checkbox as enabled by default', function () {
                    expect(page.providerReviewInput.isEnabled()).toBeTruthy();
                });

                it('should display the OIA review checkbox', function () {
                    expect(page.oiaReviewInput.isDisplayed()).toBeTruthy();
                });

                it('should display the OIA review checkbox as enabled by default', function () {
                    expect(page.oiaReviewInput.isEnabled()).toBeTruthy();
                });

                it('should display the external agency information text area', function () {
                    expect(page.externalAgenyInformationInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Notes text area', function () {
                    expect(page.notesInput.isDisplayed()).toBeTruthy();
                });

                it('should display the Notes text area as enabled by default', function () {
                    expect(page.notesInput.isEnabled()).toBeTruthy();
                });

                it('should display the Save button', function () {
                    expect(page.saveButton.isDisplayed()).toBeTruthy();
                });

                it('should display the Save buttton as disaabled by default', function () {
                    expect(page.saveButton.isEnabled()).toBeFalsy();
                });
            });

            describe('Data entry on the Details tab for an enquirer of type "' + type + '"', function () {

                it('should allow the Linked case checkbox to be checked', function () {
                    page.linkedCaseInput.getAttribute('checked').then(function (isChecked) {
                        page.clickLinkedCase();

                        if (isChecked) {
                            expect(page.linkedCaseInput.getAttribute('checked')).toBeNull();
                        }
                        else {
                            expect(page.linkedCaseInput.getAttribute('checked')).toBeTruthy();
                        }
                    });
                });

                it('should allow text to be entered in the Linked reference notes text area', function () {
                    page.enterLinkedCaseNotes(testData.linkedNotes);
                    expect(page.linkedNotesInput.isEnabled()).toBeTruthy();
                });

                it('should allow the Provider review checkbox to be checked', function () {
                    page.providerReviewInput.getAttribute('checked').then(function (isChecked) {
                        page.clickProviderReview();

                        if (isChecked) {
                            expect(page.providerReviewInput.getAttribute('checked')).toBeNull();
                        }
                        else {
                            expect(page.providerReviewInput.getAttribute('checked')).toBeTruthy();
                        }
                    });
                });

                it('should allow the OIA review checkbox to be checked', function () {
                    //page.clickOiaReview();
                    //expect(page.oiaReviewInput.getAttribute('checked')).toBeTruthy();

                    page.oiaReviewInput.getAttribute('checked').then(function (isChecked) {
                        page.clickOiaReview();

                        if (isChecked) {
                            expect(page.oiaReviewInput.getAttribute('checked')).toBeNull();
                        }
                        else {
                            expect(page.oiaReviewInput.getAttribute('checked')).toBeTruthy();
                        }
                    });
                });

                it('should allow text to be entered in the External agency information text area', function () {
                    page.enterExternalAgenyInformation(testData.externalAgencyInformation);
                    expect(page.externalAgenyInformationInput.isEnabled()).toBeTruthy();
                });

                it('should allow text to be entered in the Notes text area', function () {
                    page.enterNotes(testData.linkedNotes);
                    expect(page.notesInput.isEnabled()).toBeTruthy();
                });

                it('should display the Save button as enabled when changes made', function () {
                    expect(page.saveButton.isEnabled()).toBeTruthy();
                });

                afterAll(function () {
                    page.closeUnsavedChangesDialog();
                });
            });
        });
    });
}