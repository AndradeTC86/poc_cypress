class YourCartPage{

    get lblItemName(){
        return cy.get('.inventory_item_name')
    }

}

export default new YourCartPage()