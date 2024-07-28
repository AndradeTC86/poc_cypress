import produtosPage from "../support/page_objects/produtos.page"
import your_cartPage from "../support/page_objects/your_cart.page"
const produto = require("../fixtures/produtos.json")

describe('Testar feature Produtos', () => {
  
  beforeEach(() => {
    cy.autoLogin()
    produtosPage.lblTitle.should('contain', 'Products')
    produtosPage.Url.should('equal', 'https://www.saucedemo.com/inventory.html')
  })
    
  it('Inserir produto no carrinho e validar que foi gravado corretamente no carrinho', () => {
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.clickBtnCart()
    your_cartPage.lblItemName.should('contain', produto[0].name)
  })

  it('Remover produto do carrinho pela página de produto', () => {
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.assertBtnRemoveFromCartVisible()
    produtosPage.clickBtnRemoveFromCart()
    produtosPage.bdgShoppingCart.should('not.exist')
    produtosPage.assertBtnAddToCartVisible()
  })

  it('Adicionar produto no carrinho pela página do produto e verificar que gravou corretamente no carrinho', () => {
    produtosPage.clickImgProduto()
    produtosPage.clickbtnAddToCartFromProductPage()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.clickBtnCart()
    your_cartPage.lblItemName.should('contain', produto[0].name)
  })

  it('Remover produto do carrinho pela página do produto e voltar a página de produtos', () => {
    produtosPage.clickBtnAddToCart()
    produtosPage.bdgShoppingCart.should('contain', '1')
    produtosPage.clickImgProduto()
    produtosPage.assertBtnRemoveFromCartProductPageVisible()
    produtosPage.clickbtnRemoveFromCartFromProductPage()
    produtosPage.bdgShoppingCart.should('not.exist')
    produtosPage.assertBtnAddToCartProductPageVisible()    
    produtosPage.clickLnkBackToProducts()
    produtosPage.lblTitle.should('contain', 'Products')
  })

  it('Validar adicionar e remover todos os produtos no carrinho', () => {
    produtosPage.clickBtnAddToCartAllProducts()
    produtosPage.bdgShoppingCart.should('contain', '6')
    produtosPage.clickBtnRemoveFromCartAllProducts()
    produtosPage.bdgShoppingCart.should('not.exist')
  })

  it('Validar ordenação padrão em ordem alfabética crescente', () => {
    produtosPage.validateSortedProductsAtoZ()
  })
  
  it('Ordenar produtos em ordem alfabética decrescente', () => {
    produtosPage.orderByNameZtoA()
    produtosPage.validateSortedProductsZtoA()
  })

  it('Ordenar produtos em preço do menor para o maior', () => {
    produtosPage.orderByPriceLowtoHigh()
    produtosPage.validateSortedProductsLowtoHigh()
  })

  it('Ordenar produtos em preço do menor para o maior', () => {
    produtosPage.orderByPriceHightoLow()
    produtosPage.validateSortedProductsHightoLow()
  })
})