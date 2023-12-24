class CheckoutComplete{

    get Url(){
        return cy.url()
    }

    get lblTile(){
        return cy.get('.title')
    }

    get btnBackHome(){
        return cy.get('[data-test="back-to-products"]')
    }

    get msgHeader(){
        return cy.get('.complete-header')
    }

    get msgOrder(){
        return cy.get('.complete-text')
    }

    clickBtnBackHome(){
        this.btnBackHome.click()
    }
   
}

export default new CheckoutComplete()