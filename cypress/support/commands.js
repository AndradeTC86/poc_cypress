import loginpage from "../support/page_objects/login.page"
import checkout_overviewPage from "./page_objects/checkout_overview.page"
import checkout_your_informationPage from "./page_objects/checkout_your_information.page"
import produtosPage from "./page_objects/produtos.page"
import your_cartPage from "./page_objects/your_cart.page"
const login = require("../fixtures/login.json")
const cliente = require("../fixtures/clientes.json")

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

Cypress.Commands.add('setCheckoutOverview', () => {
    cy.setCheckout()
    checkout_your_informationPage.fillTxtFields(cliente.firstName, cliente.lastName, cliente.zipCode)
    checkout_your_informationPage.clickBtnContinue()
})

Cypress.Commands.add('setCheckoutComplete', () => {
    cy.setCheckoutOverview()
    checkout_overviewPage.clickBtnContinue()
})