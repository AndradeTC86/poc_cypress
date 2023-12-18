class ProdutosPage{


    get lblTitle(){
        return cy.get('.title')
    }

    get btnAddToCart(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    get btnRemoveFromCart(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    get btnCart(){
        return cy.get('.shopping_cart_link')
    }    

    get bdgShoppingCart(){
        return cy.get('.shopping_cart_badge')
    }

    clickBtnAddToCart(){
       this.btnAddToCart.click()
    }

    clickBtnRemoveFromCart(){
        this.btnRemoveFromCart.click()
    }

    clickBtnCart(){
        this.btnCart.click()
    }

}

export default new ProdutosPage()