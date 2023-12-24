import checkout_completePage from "../support/page_objects/checkout_complete.page"
import checkout_overviewPage from "../support/page_objects/checkout_overview.page"
import produtosPage from "../support/page_objects/produtos.page"

describe('Testar feature Checkout Overview', () => {
    
    beforeEach(() => {
        cy.setCheckoutOverview()
        checkout_overviewPage.lblTile.should('contain', 'Checkout: Overview')
        checkout_overviewPage.Url.should('equal', 'https://www.saucedemo.com/checkout-step-two.html')
    })

    it('Botão cancelar deve voltar para a página de produtos', () => {
        checkout_overviewPage.clickBtnCancel()
        produtosPage.lblTitle.should('contain', 'Products')
        produtosPage.Url.should('equal', 'https://www.saucedemo.com/inventory.html')       
    })

    it('Botão continuar deve finalizar o pedido', () => {
        checkout_overviewPage.clickBtnContinue()
        checkout_completePage.lblTile.should('contain', 'Checkout: Complete!')
        checkout_completePage.Url.should('equal', 'https://www.saucedemo.com/checkout-complete.html')
        checkout_completePage.msgHeader.should('contain', 'Thank you for your order!')
        checkout_completePage.msgOrder.should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    });

})