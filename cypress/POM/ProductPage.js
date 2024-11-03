class ProductPage{
    visitProductPage(){
        cy.visit('https://automationteststore.com/');
    }
    selectProduct(locator){
        cy.get(locator).click()
    }
    selectColor(colorindex){
        cy.get('[style="width: 45px; height: 45px;"]').eq(colorindex).click();
    }
    enterQuantity(quantity){
        cy.get('#product_quantity').clear().type(quantity); 

    }
    clickOnAddToCart(){
        cy.get('[href="#"][class="cart"]').click();
    }
    verifyProductAdded(text){
        cy.get('.table.table-striped.table-bordered tbody tr').eq(1).find('[class="align_left"] a').should('contain',text);
    }
}
export default ProductPage;