class CartPage {
    visitCartPage() {
        cy.visit('https://automationteststore.com/index.php?rt=checkout/cart');
    }

    verifyProductcolor(altVal) {
        cy.get('.table.table-striped.table-bordered tbody tr').eq(1).find('[class="align_center"] img').should('have.attr','alt',altVal)
    }
    verifyProductName(nameText){
        cy.get('.table.table-striped.table-bordered tbody tr').eq(1).find('[class="align_left"] a').should('contain',nameText);
    }
    // Additional Assertion: Verify cart contents if needed (e.g., product price)
    verifyModel(modelName) {
        cy.get('.table.table-striped.table-bordered tbody tr').eq(1).find('td[class="align_left"]').eq(1).should('contain',modelName)
    }
    verifyProductQuantity(Quantity){    
        cy.get('#cart_quantity123d4ba17727b9155709742d2033b6e8e11')
          .then(($input) => {
              const actualValue = $input.attr('value');
              if (actualValue == Quantity) {
                  cy.log(`Quantity verified successfully (Expected quantity: ${Quantity},Actual quantity: ${actualValue} Matched)`);
              } else {
                  cy.log(`Failed: Expected quantity: ${Quantity}, but found: ${actualValue}`);
              }
          });
    }
    
    
}

export default CartPage;
