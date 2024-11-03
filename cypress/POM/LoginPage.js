class LoginPage{
    visitLoginPage(){
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }
    fillLoginName(name){
        cy.get('#loginFrm_loginname').type(name);
    }
    fillPassword(pass){
        cy.get('#loginFrm_password').type(pass);
    }
    clickOnLogin(){
        cy.get('[title="Login"]').click()
    }
    verifyLogin(successmsg){
        cy.contains(successmsg).should('be.visible');
    }
}
export default LoginPage;