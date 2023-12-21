const login = require("../fixtures/login.json")
import loginPage from "../support/page_objects/login.page"
import produtosPage from "../support/page_objects/produtos.page"

describe('Testar feature login', () => {
  
  beforeEach(() => {
    cy.visit("/")
  })
    
  it('Realizar login com usuário standard', () => {
    cy.login(login.standard, login.password)
    produtosPage.lblTitle.should('contain', 'Products')
  })

  it('Realizar login com usuário bloqueado', () => {
    cy.login(login.locked, login. password)
    loginPage.msgLockedUser.should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Realizar login com usuário com problema', () => {
    cy.login(login.problem, login.password)
    produtosPage.assertImgErrada()
  })
})