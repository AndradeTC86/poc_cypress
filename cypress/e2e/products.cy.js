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

  it('Adicionar produto no carrinho pela página do produto', () => {
    cy.login(login.standard, login.password)
    produtosPage.clickImgProduto()
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.clickBtnCart()
    your_cartPage.lblItemName.should('contain', 'Sauce Labs Backpack')
  })

  it('Remover produto do carrinho pela página do produto e voltar a página de produtos', () => {
    cy.login(login.standard, login.password)    
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.clickImgProduto()
    produtosPage.assertBtnRemoveFromCartVisible()
    produtosPage.clickBtnRemoveFromCart()
    produtosPage.bdgShoppingCart.should('not.exist')    
    produtosPage.clickLnkBackToProducts()
    produtosPage.assertBtnAddToCartVisible()
    produtosPage.lblTitle.should('contain', 'Products')
  })

  it('Validar ordenação padrão em ordem alfabética crescente', () => {
    cy.login(login.standard, login.password)
    produtosPage.validateSortedProductsAtoZ()
  })
  
  it('Ordenar produtos em ordem alfabética decrescente', () => {
    cy.login(login.standard, login.password)
    produtosPage.orderByNameZtoA()
    produtosPage.validateSortedProductsZtoA()
  })

  it('Ordenar produtos em preço do menor para o maior', () => {
    cy.login(login.standard, login.password)
    produtosPage.orderByPriceLowtoHigh()
    produtosPage.validateSortedProductsLowtoHigh()
  })

  it('Ordenar produtos em preço do menor para o maior', () => {
    cy.login(login.standard, login.password)
    produtosPage.orderByPriceHightoLow()
    produtosPage.validateSortedProductsHightoLow()
  })
})