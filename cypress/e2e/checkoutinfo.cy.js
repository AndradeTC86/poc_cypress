import checkout_overviewPage from "../support/page_objects/checkout_overview.page"
import checkout_your_informationPage from "../support/page_objects/checkout_your_information.page"
import your_cartPage from "../support/page_objects/your_cart.page"

describe('Testar feature Checkout Your Info', () => {

    beforeEach(() => {
        cy.setCheckout()
        checkout_your_informationPage.lblTile.should('contain', 'Checkout: Your Information')
        checkout_your_informationPage.Url.should('equal', 'https://www.saucedemo.com/checkout-step-one.html')
    })

    it('Clicar botão cancelar deve retornar ao carrinho e não salva as informações', () => {
        checkout_your_informationPage.fillTxtFields('Cliente', 'Teste', '1234567')
        checkout_your_informationPage.clickBtnCancel()
        your_cartPage.lblTitle.should('contain', 'Your Cart')
        your_cartPage.Url.should('equal', 'https://www.saucedemo.com/cart.html')
        your_cartPage.clickBtnCheckout()
        checkout_your_informationPage.txtFirstName.should('have.value', '')
        checkout_your_informationPage.txtLastName.should('have.value', '')
        checkout_your_informationPage.txtZipCode.should('have.value', '')
    })

    it('Validar preencher os campos de texto e clicar em continuar', () => {
        checkout_your_informationPage.fillTxtFields('Cliente', 'Teste', '1234567')
        checkout_your_informationPage.clickBtnContinue()
        checkout_overviewPage.lblTile.should('contain', 'Checkout: Overview')
        checkout_overviewPage.Url.should('equal', 'https://www.saucedemo.com/checkout-step-two.html')
    })

    it('Validar obrigatoriedade dos campos de texto', () => {
        checkout_your_informationPage.clickBtnContinue()
        checkout_your_informationPage.msgError.should('contain', 'Error: First Name is required')
        checkout_your_informationPage.typeFirstName('Cliente')
        checkout_your_informationPage.clickBtnContinue()
        checkout_your_informationPage.msgError.should('contain', 'Error: Last Name is required')
        checkout_your_informationPage.typeLastName('Teste')
        checkout_your_informationPage.clickBtnContinue()
        checkout_your_informationPage.msgError.should('contain', 'Error: Postal Code is required')
    })

})