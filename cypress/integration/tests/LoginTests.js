///<reference types="Cypress"/>
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import * as loginData from "../resources/loginData";

describe ('LoginPageTest', () => {
    beforeEach (() => {
        cy.visit("/tienda/home");
        HomePage.waitUntilLiverpoolLogiIsDisplayed();
    })

    it.only('Happy Path', () => {
        LoginPage.loginFlow(loginData.email, loginData.password);
    })
})
