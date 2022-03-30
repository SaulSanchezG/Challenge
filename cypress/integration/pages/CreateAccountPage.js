import { gender } from "../resources/createAccountData"
import LoginPage from "../pages/LoginPage"
class CreateAccountPage {
     
    elements = {
        createAccountLink: () => cy.get('[href *= "signup"]'),
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        createAccountBtn: () => cy.get('button:nth-child(1)'),
        name: () => cy.get('#input-user__name'),
        lastName: () => cy.get('#input-user__apaterno'),
        birthDay: () => cy.get('#daySelectorLabel'),
        birthMonth: () => cy.get('#monthSelectorLabel'),
        bornYear: () => cy.get('#yearSelectorLabel'),
        gender: () => cy.get(`#${gender}`),
        phoneNumber: () => cy.get('#phone'),
        continueBtn: () => cy.get('button:nth-child(1)'),
        enterTheFollowingDataTitle: () => cy.get('#formCreateAccount > div.m-title'),
        phoneVerificationTitle: () => cy.get('h1').contains('Verificación de celular')
    }

    createAccountFlow (email, password) {
        this.waitUntilCreateAccountLinkIsDisplayed();
        this.clickOnCreateAccountLink();
        this.waitUntilCreateAccountButtonIsDisplayed();
        this.typeEmail(email);
        this.typePassword(password);
        this.clickOnCreateAccountBtn();
    }

    fillRequiredPersonalData ( name, lastName, birthDay, birthMonth, bornYear, phone) {
        this.waitUntilEnterTheFollowingDataTitleIsDisplayed();
        this.typeName(name);
        this.typeLastName(lastName);
        this.selectBirthDay(birthDay);
        this.selectMonth(birthMonth);
        this.selectBornYear(bornYear);
        this.clickOnGender();
        this.clickOnCreateAccountBtn();
        this.waitUntilPhoneVerificationTitleIsDisplayed();
        this.typePhoneNumber(phone);
        this.clickOnContinueBtn();
        LoginPage.waitUntilVerificationCodeTitleIsDisplayed();
    }

    clickOnCreateAccountLink () {
        this.elements.createAccountLink().click();
    }

    clickOnCreateAccountBtn () {
        this.elements.createAccountBtn().click();
    }

    clickOnGender () {
        this.elements.gender().click();
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

    typeName (name) {
        this.elements.name().type(name);
    }

    typeLastName (lastName) {
        this.elements.lastName().type(lastName);
    }

    typePhoneNumber (phone) {
        this.elements.phoneNumber().type(phone);
    }

    selectBirthDay (day) {
        this.elements.birthDay().select(day);
    }

    selectMonth (month) {
        this.elements.birthMonth().select(month);
    }

    selectBornYear (year) {
        this.elements.bornYear().select(year);
    }

    waitUntilCreateAccountLinkIsDisplayed () {
        this.elements.createAccountLink().should('be.visible');
    }

    waitUntilCreateAccountButtonIsDisplayed () {
        this.elements.createAccountBtn().should('be.visible');
    }

    waitUntilEnterTheFollowingDataTitleIsDisplayed () {
        this.elements.enterTheFollowingDataTitle().should('be.visible');
    }

    waitUntilPhoneVerificationTitleIsDisplayed () {
        this.elements.phoneVerificationTitle().should('be.visible');
    }
}

export default new CreateAccountPage();