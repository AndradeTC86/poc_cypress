const produto = require("../../fixtures/produtos.json")


class ProdutosPage{

    get Url(){
        return cy.url()
    }

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

    get menuOrdenar(){
        return cy.get('[data-test="product-sort-container"]')
    }

    get btnAddToCart(){
        return cy.get('[data-test="add-to-cart"]')
    }

    get btnRemoveFromCart(){
        return cy.get('[data-test="remove"]')
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
       this.getBtnAddToCart(produto[0].produto).click()
    }

    clickbtnAddToCartFromProductPage(){
        this.btnAddToCart.click()
    }

    clickbtnRemoveFromCartFromProductPage(){
        this.btnRemoveFromCart.click()
    }

    clickBtnAddToCartAllProducts(){
        for (const produtos of produto){
            this.getBtnAddToCart(produtos.produto).click()
        }
    }    

    clickBtnRemoveFromCart(){
        this.getBtnRemoveFromCart(produto[0].produto).click()
    }

    clickBtnRemoveFromCartAllProducts(){
        for (const produtos of produto){
            this.getBtnRemoveFromCart(produtos.produto).click()
        }
    }

    clickImgProduto(){
        this.getImgProduto(4).click()
    }

    clickLnkBackToProducts(){
        this.lnkBackToProducts.click()
    }

    assertBtnAddToCartVisible(){
        this.getBtnAddToCart(produto[0].produto).should('be.visible')
    }

    assertBtnRemoveFromCartVisible(){
        this.getBtnRemoveFromCart(produto[0].produto).should('be.visible')
    }

    assertBtnAddToCartProductPageVisible(){
        this.btnAddToCart.should('be.visible')
    }

    assertBtnRemoveFromCartProductPageVisible(){
        this.btnRemoveFromCart.should('be.visible')
    }

    clickBtnCart(){
        this.btnCart.click()
    }

    assertImgErrada(){
        return this.getImgProduto(0)
        .invoke('attr', 'src').should('equal', '/static/media/sl-404.168b1cce.jpg')        
    }

    assertImgGrande(){
        return this.getImgProduto(4).then($img => {
            expect($img[0].width).to.equal(262)
            expect($img[0].height).to.equal(238)
          })
    }

    orderByNameZtoA(){
        this.menuOrdenar.select('Name (Z to A)')
    }

    orderByPriceLowtoHigh(){
        this.menuOrdenar.select('Price (low to high)')
    }

    orderByPriceHightoLow(){
        this.menuOrdenar.select('Price (high to low)')
    }

    validateSortedProductsAtoZ(){
        cy.get('.inventory_item_name')
        .then(items => {
            const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get()
            const sortedItems = unsortedItems.slice().sort()                
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }

    validateSortedProductsZtoA(){
        cy.get('.inventory_item_name')
        .then(items => {
            const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get()
            const sortedItems = unsortedItems.slice().sort().reverse()                
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }
    
    validateSortedProductsLowtoHigh(){
        cy.get('.inventory_item_price')
        .then(items => {
            const unsortedItems = items.map((index, html) => parseFloat(Cypress.$(html).text().replace('$', ''))).get()
            const sortedItems = [...unsortedItems].sort((a, b) => a - b)                
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }

    validateSortedProductsHightoLow(){
        cy.get('.inventory_item_price')
        .then(items => {
            const unsortedItems = items.map((index, html) => parseFloat(Cypress.$(html).text().replace('$', ''))).get()
            const sortedItems = [...unsortedItems].sort((a, b) => b - a)                
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }
      
}

export default new ProdutosPage()