const produto = require("../../fixtures/produtos.json")


class ProdutosPage{


    get lblTitle(){
        return cy.get('.title')
    }    

    get btnCart(){
        return cy.get('.shopping_cart_link')
    }    

    get bdgShoppingCart(){
        return cy.get('.shopping_cart_badge')
    }

    getBtnAddToCart(produto) {
        const seletor = `[data-test="add-to-cart-${produto}"]`;
        return cy.get(seletor);
    }

    getBtnRemoveFromCart(produto){
        const seletor = (`[data-test="remove-${produto}"]`)
        return cy.get(seletor);
    }

    clickBtnAddToCart(){
       this.getBtnAddToCart(produto.backpack).click()
    }

    clickBtnRemoveFromCart(){
        this.getBtnRemoveFromCart(produto.backpack).click()
    }

    assertBtnAddToCartVisible() {
        this.getBtnAddToCart(produto.backpack).should('be.visible');
    }

    assertBtnRemoveFromCartVisible() {
        this.getBtnRemoveFromCart(produto.backpack).should('be.visible');
    }

    clickBtnCart(){
        this.btnCart.click()
    }

}

export default new ProdutosPage()