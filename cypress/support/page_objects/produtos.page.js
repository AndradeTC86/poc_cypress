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

    get menuOrdenar(){
        return cy.get('[data-test="product_sort_container"]')
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

    orderByNameZtoA(){
        this.menuOrdenar.select('Name (Z to A)')
    }

    orderByPriceLowtoHigh(){
        this.menuOrdenar.select('Price (low to high)')
    }

    orderByPriceHightoLow(){
        this.menuOrdenar.select('Price (high to low)')
    }

    validateSortedProductsAtoZ() {
        cy.get('.inventory_item_name')
        .then(items => {
            const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get()
            const sortedItems = unsortedItems.slice().sort()
                cy.log('Unsorted items:')
                    unsortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
                cy.log('Sorted items:')
                    sortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }

    validateSortedProductsZtoA() {
        cy.get('.inventory_item_name')
        .then(items => {
            const unsortedItems = items.map((index, html) => Cypress.$(html).text()).get()
            const sortedItems = unsortedItems.slice().sort().reverse()
                cy.log('Unsorted items:')
                    unsortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
                cy.log('Sorted items:')
                    sortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }
    
    validateSortedProductsLowtoHigh() {
        cy.get('.inventory_item_price')
        .then(items => {
            const unsortedItems = items.map((index, html) => parseFloat(Cypress.$(html).text().replace('$', ''))).get()
            const sortedItems = [...unsortedItems].sort((a, b) => a - b)
                cy.log('Unsorted items:')
                    unsortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
                cy.log('Sorted items:')
                    sortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }

    validateSortedProductsHightoLow() {
        cy.get('.inventory_item_price')
        .then(items => {
            const unsortedItems = items.map((index, html) => parseFloat(Cypress.$(html).text().replace('$', ''))).get()
            const sortedItems = [...unsortedItems].sort((a, b) => b - a)
                cy.log('Unsorted items:')
                    unsortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
                cy.log('Sorted items:')
                    sortedItems.forEach((item, index) => {
                cy.log(`Item ${index + 1}: ${item}`)
                })
            expect(unsortedItems, 'Items are sorted').to.deep.equal(sortedItems)
        })
    }
      
}

export default new ProdutosPage()