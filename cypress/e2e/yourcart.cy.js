import your_cartPage from "../support/page_objects/your_cart.page"
import produtosPage from "../support/page_objects/produtos.page"
import checkout_your_informationPage from "../support/page_objects/checkout_your_information.page"

describe('Testar feature Your Cart', () => {

    beforeEach(() => {
        cy.setCart()
        your_cartPage.lblTitle.should('contain', 'Your Cart')
        your_cartPage.Url.should('equal', 'https://www.saucedemo.com/cart.html')
    })

    it('Validar botão continuar comprando', () => {
        your_cartPage.clickBtnContinueShopping()
        produtosPage.lblTitle.should('contain', 'Products')
    })

    it('Validar botão remover produto', () => {
        your_cartPage.clickBtnRemoveFromCart()
        your_cartPage.lblItemName.should('not.exist')
    })

    it('Validar botão checkout', () => {
        your_cartPage.clickBtnCheckout()
        checkout_your_informationPage.lblTile.should('contain', 'Checkout: Your Information')
    })
})