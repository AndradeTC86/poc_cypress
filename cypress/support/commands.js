import loginpage from "../support/page_objects/login.page"

Cypress.Commands.add('login', (usuario, senha) => {
    loginpage.txtUsername.type(usuario)
    loginpage.txtPassword.type(senha, {log:false})
    loginpage.btnLogin.click()    
});