import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module EnquirerSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var header = workFlowHelper.mainPage;
    var page = workFlowHelper.enquirerPage;
    var testData = workFlowHelper.testData.enquirer;
    var constants = workFlowHelper.testData.constants;

    workFlowHelper.using(workFlowHelper.enquirerTypes, function (type) {

        describe('The "Enquirer" tab for an equirer of type "' + type + '"', function () {

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
            });

            it('should display the "Enquirer" page', function () {
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

                it('should display the "Enquirer" tab as active', function () {
                    expect(header.enquirerTab.getAttribute('class')).toMatch(constants.active);
                });

                it('should display a "Details" tab', function () {
                    expect(header.detailsTab.isDisplayed()).toBeTruthy();
                });

                it('should display the "Details" tab as inactive', function () {
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

            describe('Enquirer tab specific controls for an enquirer of type "'+ type +'"', function () {

                it('should display the Edit link', function () {
                    expect(page.editButton.isDisplayed()).toBeTruthy();
                });

                it('should display the Edit link as enabled', function () {
                    expect(page.editButton.isEnabled()).toBeTruthy();
                });

                it('should display the address', function () {
                    expect(page.addressText.isDisplayed()).toBeTruthy();
                });

                it('should display the address as text (read-only)', function () {
                    expect(page.addressText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should display the phone number', function () {
                    expect(page.phoneText.isDisplayed()).toBeTruthy();
                });

                it('should display the phone number as text (read-only)', function () {
                    expect(page.phoneText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should display the email address', function () {
                    expect(page.emailText.isDisplayed()).toBeTruthy();
                });

                it('should display the email address as text (read-only)', function () {
                    expect(page.emailText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should contain text for the email address', function () {
                    expect(page.emailText.getText()).not.toBe('');
                });

                it('should display the contact type', function () {
                    expect(page.contactTypeText.isDisplayed()).toBeTruthy();
                });

                it('should display the contact type as text (read-only)', function () {
                    expect(page.contactTypeText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should contain text for the contact type', function () {
                    expect(page.contactTypeText.getText()).not.toBe('');
                });

                it('should display the tribunal proceedings', function () {
                    expect(page.tribunalText.isDisplayed()).toBeTruthy();
                });

                it('should display the tribunal proceedings as text (read-only)', function () {
                    expect(page.tribunalText.getAttribute('class')).toMatch(constants.formControlStatic);
                });

                it('should contain text for the tribunal proceedings', function () {
                    expect(page.tribunalText.getText()).not.toBe('');
                });

                if (type == "student") {
                    it('should display the student type as text (read-only)', function () {
                        expect(page.studentTypeText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the student type', function () {
                        expect(page.studentTypeText.getText()).not.toBe('');
                    });

                    it('should display the attendance type as text (read-only)', function () {
                        expect(page.attendanceText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the attendance type', function () {
                        expect(page.attendanceText.getText()).not.toBe('');
                    });

                    it('should display the course title as text (read-only)', function () {
                        expect(page.courseTitleText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the course title', function () {
                        expect(page.courseTitleText.getText()).not.toBe('');
                    });

                    it('should display the course level as text (read-only)', function () {
                        expect(page.levelText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the course level', function () {
                        expect(page.levelText.getText()).not.toBe('');
                    });

                    it('should display the course start date as text (read-only)', function () {
                        expect(page.courseStartDateText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the course start date', function () {
                        expect(page.courseStartDateText.getText()).not.toBe('');
                    });

                    it('should display the course end date as text (read-only)', function () {
                        expect(page.courseEndDateText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the course end date', function () {
                        expect(page.courseEndDateText.getText()).not.toBe('');
                    });

                    it('should display the course withdrawal date as text (read-only)', function () {
                        expect(page.withdrawDateText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });
                }

                if (type == "staff") {

                    it('should display the job title as text (read-only)', function () {
                        expect(page.jobTitleText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the job title', function () {
                        expect(page.jobTitleText.getText()).not.toBe('');
                    });

                    it('should display the employment start date as text (read-only)', function () {
                        expect(page.employmentStartDateText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the employment start date', function () {
                        expect(page.employmentStartDateText.getText()).not.toBe('');
                    });

                    it('should display the employment end date as text (read-only)', function () {
                        expect(page.employmentEndDateText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });
                }

                if (type == "other") {

                    it('should display the other relationship as text (read-only)', function () {
                        expect(page.otherRelationshipText.getAttribute('class')).toMatch(constants.formControlStatic);
                    });

                    it('should contain text for the other relationship', function () {
                        expect(page.otherRelationshipText.getText()).not.toBe('');
                    });
                }
            });
        });
    });
}