const registerData = require("../fixtures/register.json");
const mainPage = require("../support/pages/main-page");
const signUpPage = require("../support/pages/sign-up-page");

describe("Registration", () => {
      it('Should shows error message, when credentials is invalid', () => {
        mainPage.typeEmail();
    
        signUpPage.getEmailValue().should('have.value', registerData.email);
        signUpPage.fillForm();
        signUpPage.getErrorMessage().should('be.visible');
      });
})