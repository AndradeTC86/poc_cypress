class CheckoutOverview{

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
        return cy.get('[data-test="finish"]')
    }

    clickBtnCancel(){
        this.btnCancel.click()
    }

    clickBtnContinue(){
        this.btnContinue.click()
    }
   
}

export default new CheckoutOverview()