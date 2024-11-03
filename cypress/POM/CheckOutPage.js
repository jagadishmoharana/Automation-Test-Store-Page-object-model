import data from "../fixtures/testdata.json"
class CheckOutPage{
    visitCheckoutPage(){
        cy.visit('https://automationteststore.com/index.php?rt=checkout/cart');
    }
    clickOnCheckOut(){
        cy.get('#cart_checkout1').click();
    }
    clickOnConfirmOrder(){
        cy.get('#checkout_btn').click();
        
    }
    verifyOrderConfirm(){
        cy.url().should('include',data.checkoutpage.urlinclude);
        cy.contains(data.checkoutpage.successmessage).should('be.visible');
    }
}
export default CheckOutPage;