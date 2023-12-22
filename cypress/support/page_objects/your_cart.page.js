const produto = require("../../fixtures/produtos.json")

class YourCartPage{

    get Url(){
        return cy.url()
    }

    get lblTitle(){
        return cy.get('.title')
    }

    get lblItemName(){
        return cy.get('.inventory_item_name')
    }

    get btnContinueShopping(){
        return cy.get('[data-test="continue-shopping"]')
    }

    get btnCheckout(){
        return cy.get('[data-test="checkout"]')
    }

    clickBtnContinueShopping(){
        this.btnContinueShopping.click()
    }

    clickBtnCheckout(){
        this.btnCheckout.click()
    }

    getBtnRemoveFromCart(produto){
        const seletor = (`[data-test="remove-${produto}"]`)
        return cy.get(seletor)
    }

    clickBtnRemoveFromCart(){
        this.getBtnRemoveFromCart(produto[0].produto).click()
    }

}

export default new YourCartPage()