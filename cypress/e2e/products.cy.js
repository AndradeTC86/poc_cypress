const login = require("../fixtures/login.json")
import produtosPage from "../support/page_objects/produtos.page"
import your_cartPage from "../support/page_objects/your_cart.page"

describe('Testar feature Produtos', () => {
  
  beforeEach(() => {
    cy.visit("/")
  })
    
  it('Inserir produto no carrinho', () => {
    cy.login(login.standard, login.password)
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.clickBtnCart()
    your_cartPage.lblItemName.should('contain', 'Sauce Labs Backpack')
  })

  it('Remover produto do carrinho', () => {
    cy.login(login.standard, login.password)
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.assertBtnRemoveFromCartVisible()
    produtosPage.clickBtnRemoveFromCart()
    produtosPage.bdgShoppingCart.should('not.exist')
    produtosPage.assertBtnAddToCartVisible()
  })
})