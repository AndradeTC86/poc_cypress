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
    
    get lnkBackToProducts(){
        return cy.get('[data-test="back-to-products"]')
    }

    getBtnAddToCart(produto) {
        const seletor = `[data-test="add-to-cart-${produto}"]`
        return cy.get(seletor)
    }

    getBtnRemoveFromCart(produto){
        const seletor = (`[data-test="remove-${produto}"]`)
        return cy.get(seletor)
    }

    getImgProduto(produto){
        const seletor = (`#item_${produto}_img_link > .inventory_item_img`)
        return cy.get(seletor)
    }

    clickBtnAddToCart(){
       this.getBtnAddToCart(produto.backpack).click()
    }

    clickBtnRemoveFromCart(){
        this.getBtnRemoveFromCart(produto.backpack).click()
    }

    clickImgProduto(){
        this.getImgProduto(4).click()
    }

    clickLnkBackToProducts(){
        this.lnkBackToProducts.click()
    }

    assertBtnAddToCartVisible() {
        this.getBtnAddToCart(produto.backpack).should('be.visible')
    }

    assertBtnRemoveFromCartVisible() {
        this.getBtnRemoveFromCart(produto.backpack).should('be.visible')
    }

    clickBtnCart(){
        this.btnCart.click()
    }

    assertImgErrada(){
        return cy.get('#item_0_img_link > .inventory_item_img')
        .invoke('attr', 'src').should('equal', '/static/media/sl-404.168b1cce.jpg')
    }

    assertImgGrande(){
        return cy.get('#item_4_img_link > .inventory_item_img').then($img => {
            expect($img[0].width).to.equal(262)
            expect($img[0].height).to.equal(238)
          })
    }
}

export default new ProdutosPage()