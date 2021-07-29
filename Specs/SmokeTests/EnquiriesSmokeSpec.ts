import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module EnquiriesSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js'),
        page = workFlowHelper.enquiriesPage,
        testData = workFlowHelper.testData.enquiries,
        constants = workFlowHelper.testData.constants,
        using = workFlowHelper.using;

    using(workFlowHelper.loginData.user, function (data, description) {



        describe('The "Enquiries" page for the ' + description + ' user', function () {

            beforeAll(function () {
                workFlowHelper.goToApplication();  // should redirect to login page
                workFlowHelper.loginPage.login(
                    data.username,
                    data.password);
                workFlowHelper.waitForUrl(testData.url);
            });

            it('should display the "Enquiries" page when logging in as the ' + description + ' user', function () {
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

            describe('Enquiry table', function () {

                it('should display the "Ref" column', function () {
                    expect(page.refHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Enquirer" column', function () {
                    expect(page.enquirerNameHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Provider" column', function () {
                    expect(page.providerNameHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Enquiry type" column', function () {
                    expect(page.enquiryTypeHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Submitted" column', function () {
                    expect(page.submissionDateHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Status" column', function () {
                    expect(page.statusHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Case manager" column', function () {
                    expect(page.caseManagerHeader.isDisplayed()).toBeTruthy();
                });

                it('should display the "Linked cases" column', function () {
                    expect(page.linkedCasesHeader.isDisplayed()).toBeTruthy();
                });
            });

            if (data.canEdit) {
                describe('Input controls', function () {

                    it('should contain a text box to search the list of enquiries', function () {
                        expect(page.searchInput.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a button to clear the search text box', function () {
                        expect(page.clearSearchButton.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a drop down to filter the list of enquiries by status', function () {
                        expect(page.filterStatusDropdown.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a button to add a new enquiry', function () {
                        expect(page.addNewButton.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a button to export all enquiries', function () {
                        expect(page.exportEnquiriesButton.isDisplayed()).toBeTruthy();
                    });
                });

                describe('Data entry', function () {

                    it('should allow text to be entered into the search text box', function () {
                        page.search(testData.searchTerm);
                        expect(page.searchInput.getAttribute('value')).toEqual(testData.searchTerm);
                    });

                    it('should allow text to be cleared from the search text box', function () {
                        var empty = '';
                        expect(page.searchInput.getAttribute('value')).not.toEqual(empty);
                        page.clearSearch();
                        expect(page.searchInput.getAttribute('value')).toEqual(empty);
                    });

                    it('should default the status to "Open" in the status filter drop down', function () {
                        expect(page.filterStatusDropdown.$('option:checked').getText()).toEqual('Open');
                    });

                    workFlowHelper.using(testData.statuses, function (status) {

                        it('should allow the "' + status + '" status to be selected from the status filter drop down', function () {
                            page.filterStatus(status);
                            expect(page.filterStatusDropdown.$('option:checked').getText()).toEqual(status);
                        });
                    });
                });
            }
            // else readonly...
            // so only show text not inputs

            afterAll(function () {
                workFlowHelper.logout();
            });
        });
    });
}