import CartPage from "../POM/CartPage";
import CheckOutPage from "../POM/CheckoutPage";
import LoginPage from "../POM/LoginPage";
import ProductPage from "../POM/ProductPage";

// import testdata from fixture folder
import data from "../fixtures/testdata.json"
describe('Automation Test Strore', () => {
  const login = new LoginPage();
  const product = new ProductPage();
  const cart = new CartPage();
  const checkout = new CheckOutPage();
  it('Verify complete purchase of a product', () => {
    // Logs in using login page
    login.visitLoginPage();
    login.fillLoginName(data.loginpage.name);
    login.fillPassword(data.loginpage.password);
    login.clickOnLogin();
    login.verifyLogin(data.loginpage.successmessage);

    // Add item to the cart using product page
    product.visitProductPage();
    product.selectProduct(data.productpage.searchproduct);
    product.selectColor(data.productpage.color);
    product.enterQuantity(data.productpage.quantity);
    product.clickOnAddToCart();
    product.verifyProductAdded(data.productpage.addedProductname);

    // Verify item in the cart using cartpage
    // cart.visitCartPage();
    cart.verifyProductcolor(data.cartpage.productcolor);
    cart.verifyProductName(data.cartpage.productname);
    cart.verifyModel(data.cartpage.productmodel);
    cart.verifyProductQuantity(data.cartpage.productquantity)

    // Complete the purchase on the checkout page
    // checkout.visitCheckoutPage();
    checkout.clickOnCheckOut();
    checkout.clickOnConfirmOrder();
    checkout.verifyOrderConfirm();
  });
});