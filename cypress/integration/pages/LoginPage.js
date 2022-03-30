class LoginPage {

    elements = {
        startSessionBtn: () => cy.get('div > span.a-header__topLink'),
        emailInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('button:nth-child(1)'),
        continueBtn: () => cy.get('div.c56665bee').contains('Continuar'),
        logInTitle: () => cy.get('h1').contains('Inicia sesión'),
        verificationCodeTitle: () => cy.get('h1').contains('Código de verificación')
    }

    loginFlow (email, password) {
        this.clickOnStartSessionBtn();
        this.waitUntilLogInTitleIsDisplayed();
        this.typeEmail(email);
        this.typePassword(password);
        this.clickOnloginBtn();
        this.waitUntilVerificationCodeTitleIsDisplayed();
        this.waitUntilVerificationCodeIsReceived();
        this.clickOnContinueBtn();
    }

    clickOnStartSessionBtn () {
        this.elements.startSessionBtn().click();
    }

    clickOnloginBtn () {
        this.elements.loginBtn().click();
    }

    clickOnContinueBtn () {
        this.elements.continueBtn().click();
    }

    typeEmail (email) {
        this.elements.emailInput().type(email);
    }

    typePassword (password) {
        this.elements.passwordInput().type(password);
    }

    waitUntilLogInTitleIsDisplayed () {
        this.elements.logInTitle().should('be.visible');
    }

    waitUntilVerificationCodeTitleIsDisplayed () {
        this.elements.verificationCodeTitle().should('be.visible');
    }

    waitUntilVerificationCodeIsReceived () {
        cy.wait(20000);
    }
}

export default new LoginPage();