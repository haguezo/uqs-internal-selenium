import workFlowHelperModule = require("../Helpers/WorkFlowHelper");

module LoginSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require("../Helpers/WorkFlowHelper.js"),
        invalidUsernameOrPassword = 'Error: Invalid username or password',
        loginData = workFlowHelper.loginData,
        testData = workFlowHelper.testData,
        using = workFlowHelper.using;

    using(loginData.user, function (data, description) {

        var startUrl = testData.enquiries.url;
        var startPage = workFlowHelper.enquiriesPage;

        describe('Login', function () {

            beforeEach(function () {

                workFlowHelper.goToApplication();  // should redirect to login page
                workFlowHelper.loginPage.login(
                    data.username,
                    data.password);
                workFlowHelper.waitForUrl(startUrl);
            });

            it('should allow the ' + description + ' user to login and navigate to the start url of ' + startUrl, function () {
                expect(browser.getCurrentUrl()).toContain(startUrl);
            });

            afterEach(function () {
                workFlowHelper.logout(); // need logout functionality to facilitate e2e testing
            });
        });

        describe('Login with invalid username and/or password', function () {

            beforeEach(function () {
                workFlowHelper.goToApplication();
            });

            it('should display an error message to the ' + description + ' when the username is invalid', function () {
                workFlowHelper.loginPage.login(
                    'wrongusername',
                    data.password, false);
                expect(workFlowHelper.loginPage.errorMessage.getText()).toEqual(invalidUsernameOrPassword);
            });

            it('should display an error message to the ' + description + ' when password is invalid', function () {
                workFlowHelper.loginPage.login(
                    data.username,
                    'wrongpassword', false);
                expect(workFlowHelper.loginPage.errorMessage.getText()).toEqual(invalidUsernameOrPassword);
            });

            it('should display an error message to the ' + description + ' when username and password is invalid', function () {
                workFlowHelper.loginPage.login(
                    'wrongusername',
                    'wrongpassword', false);
                expect(workFlowHelper.loginPage.errorMessage.getText()).toEqual(invalidUsernameOrPassword);
            });
        });
    });
}