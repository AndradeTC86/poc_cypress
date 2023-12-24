import checkout_completePage from "../support/page_objects/checkout_complete.page"
import produtosPage from "../support/page_objects/produtos.page"

describe('Testar feature Checkout Complete', () => {

    beforeEach(() => {
        cy.setCheckoutComplete()
        checkout_completePage.lblTile.should('contain', 'Checkout: Complete!')
        checkout_completePage.Url.should('equal', 'https://www.saucedemo.com/checkout-complete.html')
    })

    it('Clicar no botão voltar para home deve voltar a página de produtos', () => {
        checkout_completePage.clickBtnBackHome()
        produtosPage.lblTitle.should('contain', 'Products')
        produtosPage.Url.should('equal', 'https://www.saucedemo.com/inventory.html')
    })
    
})