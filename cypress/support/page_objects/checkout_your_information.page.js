class CheckoutYourInformation{

    get Url(){
        return cy.url()
    }

    get lblTile(){
        return cy.get('.title')
    }

    get btnCancel(){
        return cy.get('[data-test="cancel"]')
    }

    get btnContinue(){
        return cy.get('[data-test="continue"]')
    }

    get txtFirstName(){
        return cy.get('[data-test="firstName"]')
    }

    get txtLastName(){
        return cy.get('[data-test="lastName"]')
    }

    get txtZipCode(){
        return cy.get('[data-test="postalCode"]')
    }

    get msgError(){
        return cy.get('.error-message-container')
    }

    clickBtnCancel(){
        this.btnCancel.click()
    }

    clickBtnContinue(){
        this.btnContinue.click()
    }

    typeFirstName(firstName){
        this.txtFirstName.type(firstName)
    }

    typeLastName(lastName){
        this.txtLastName.type(lastName)
    }

    typeZipCode(zipCode){
        this.txtZipCode.type(zipCode)
    }

    fillTxtFields(firstName, lastName, zipCode){
        this.typeFirstName(firstName)
        this.typeLastName(lastName)
        this.typeZipCode(zipCode)
    }
}

export default new CheckoutYourInformation()