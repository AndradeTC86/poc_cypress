class ProdutosPage{

    get lblTitle(){
        return cy.get('.title')
    }

}

export default new ProdutosPage()