class LoginPage {

    usernameInput = element(by.id('username'));
    passwordInput = element(by.id('password'));
    loginButton = element(by.xpath("//button[text()='Login']"));
    errorMessage = element(by.binding('model.errorMessage'));

    // Note: the successfulLoginExpected can be set to false in Login tests when the login is expected to fail  
    login(username: string, password: string, successfulLoginExpected: boolean = true): void {

        this.usernameInput.clear();
        this.passwordInput.clear();
        this.usernameInput.sendKeys(username);
        this.passwordInput.sendKeys(password);
        this.loginButton.click();

        if (successfulLoginExpected) {
            var logoutLink = by.css('[data-test-id="logoutMenuItem"]');
            expect(element(logoutLink).isPresent()).toBe(true);
        }
    }
}

module.exports = new LoginPage;