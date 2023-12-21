import loginpage from "../support/page_objects/login.page"
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