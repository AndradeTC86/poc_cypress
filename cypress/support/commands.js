import loginpage from "../support/page_objects/login.page"
import produtosPage from "./page_objects/produtos.page"
import your_cartPage from "./page_objects/your_cart.page"
const login = require("../fixtures/login.json")

Cypress.Commands.add('login', (usuario, senha) => {
    loginpage.txtUsername.type(usuario)
    loginpage.txtPassword.type(senha, {log:false})
    loginpage.btnLogin.click()    
})

Cypress.Commands.add('autoLogin', () => {
    cy.setCookie('session-username', login.standard, login.password)
    cy.visit('/inventory.html', {failOnStatusCode: false})   
})

Cypress.Commands.add('setCart', () => {
    cy.autoLogin()
    produtosPage.clickBtnAddToCart()
    produtosPage.clickBtnCart()
})

Cypress.Commands.add('setCheckout', () => {
    cy.setCart()
    your_cartPage.clickBtnCheckout()
})