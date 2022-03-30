///<reference types="Cypress"/>
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import * as loginData from "../resources/loginData";
import * as productData from "../resources/productData";

describe ('LoginPageTest', () => {
    beforeEach (() => {
        cy.visit("/tienda/home");
        HomePage.waitUntilLiverpoolLogiIsDisplayed();
    })
    
    it.only('Add a product to the cart with login', () => {
        LoginPage.loginFlow(loginData.email, loginData.password);
        HomePage.addToCartFlow(productData.productSearch, productData.selectedProduct);
    })

    it('Add a product to the cart without login', () => {
        HomePage.addToCartFlow(productData.productSearch, productData.selectedProduct);
    })
})