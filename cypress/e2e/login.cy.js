const login = require("../fixtures/login.json")
import produtosPage from "../support/page_objects/produtos.page"

describe('Testar feature login', () => {
  
  beforeEach(() => {
    cy.visit("/")
  })
    
  it('Realizar login com usuário standard', () => {
    cy.login(login.standard, login.password)
    produtosPage.lblTitle.should('contain', 'Products')
  })
})