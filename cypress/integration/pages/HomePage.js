class HomePage {
   
    elements = {
        logo: () => cy.get('img[title="Liverpool Logo"]'),
        searchBar: () => cy.get('#mainSearchbar'),
        productsList: () => cy.get('article'),
        buyNowBtn: () => cy.get('#opc_pdp_buyNowButton'),
        addToCartBtn: () => cy.get('#opc_pdp_addCartButton'),
        youAddedAproductToTheCartMessage: () => cy.get('div[role="status"]').contains('Agregaste un producto a tu bolsa')
    }

    addToCartFlow (searchedProduct, selectProduct) {
        this.typeProduct(searchedProduct);
        this.selectProduct(selectProduct);
        this.clickOnAddToCartBtn();
        this.waitUntilYouAddedAproductToTheCartMessageIsDisplayed();
    }

    clickOnBuyNowBtn () {
        this.elements.buyNowBtn().click();
    }

    clickOnAddToCartBtn () {
        this.elements.addToCartBtn().click();
    }

    typeProduct (product) {
        this.elements.searchBar().type(product).type('{enter}');
    }

    selectProduct (product) {
        this.elements.productsList()
        .each(($el, index, $list) => {
            console.log($el.text());
            if($el.text() == product) {
                $el.click();
            }
        })
    }
    
    waitUntilLiverpoolLogiIsDisplayed () {
        this.elements.logo().should('be.visible');
    }

    waitUntilYouAddedAproductToTheCartMessageIsDisplayed () {
        this.elements.youAddedAproductToTheCartMessage().should('be.visible');
    }
    
}

export default new HomePage();