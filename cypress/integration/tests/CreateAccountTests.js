///<reference types="Cypress"/>
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CreateAccountPage from "../pages/CreateAccountPage";
import * as accountData from "../resources/createAccountData";

describe ('LoginPageTest', () => {
    beforeEach (() => {
        cy.visit("/tienda/home");
        HomePage.waitUntilLiverpoolLogiIsDisplayed();
    })

    it.only('Creating an account successfully', () => {
        LoginPage.clickOnStartSessionBtn();
        CreateAccountPage.createAccountFlow(accountData.email, accountData.password);
        CreateAccountPage.fillRequiredPersonalData(accountData.name, accountData.lastName, accountData.birthDay, 
            accountData.monthOfBirth, accountData.bornYear, accountData.phoneNumber);
        //To continue creating the account is necessary a code from mobile
    })
})