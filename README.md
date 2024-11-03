# Automation-Test-Store-Page-object-model

# Cypress E2E Purchase Flow Automation

This project demonstrates an end-to-end (E2E) purchase workflow automation using Cypress and the Page Object Model (POM) pattern. It simulates a user logging in, adding products to the cart, verifying the cart, and completing a checkout.

## Project Structure

cypress-e2e-purchase-flow                                                                                                                                                                                                                                                    
├── cypress                                                                                                                                                                                                                                                                  
│   ├── e2e                                                                                                                                                                                                                                                                  
│   │   └── PurchaseTest.js       # Main test file for purchase flow                                                                                                                                                                                                         
│   ├── POM                                                                                                                                                                                                                                                          
│   │   ├── LoginPage.js          # Handles login actions                                                                                                                                                                                                                    
│   │   ├── ProductPage.js        # Handles product interactions                                                                                                                                                                                                             
│   │   ├── CartPage.js           # Manages cart actions                                                                                                                                                                                                                     
│   │   └── CheckoutPage.js       # Manages checkout process                                                                                                                                                                                                                 └── README.md                     # Project documentation                                                                                                                                                                                                                      


## Test Flow

1. Login: Navigates to login and signs in.
2. Add Products to Cart: Adds items to the cart.
3. Verify Cart Contents: Checks correct items in the cart.
4. Checkout: Completes purchase and verifies success.

## Page Objects

Each page is represented by a class with methods for actions on that page:
- LoginPage.js   : Login actions.
- ProductPage.js : Product interactions.
- CartPage.js    : Cart verification and checkout initiation.
- CheckoutPage.js: Finalizes purchase and verifies completion.

## License

Licensed under the MIT License.

