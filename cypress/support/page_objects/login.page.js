class LoginPage{

    get txtUsername(){
        return cy.get('[data-test="username"]')
    }

    get txtPassword(){
        return cy.get('[data-test="password"]')
    }

    get btnLogin(){
        return cy.get('[data-test="login-button"]')
    }

    get msgLockedUser(){
        return cy.get('[data-test="error"]')
    }

}

export default new LoginPage()