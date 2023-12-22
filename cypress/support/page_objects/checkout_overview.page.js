class CheckoutOverview{

    get Url(){
        return cy.url()
    }

    get lblTile(){
        return cy.get('.title')
    }

   
}

export default new CheckoutOverview()