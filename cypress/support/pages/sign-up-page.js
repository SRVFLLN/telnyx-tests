const {BasePage} = require("./base-page");
const registerData = require("../../fixtures/register.json");
const emailInput = "input[name='email']";
const fullNameInput = "#full_name";
const passwordInput = "#password";
const termsCheckbox = "#terms_and_conditions";
const submitButton = "button[type='submit']";
const loaderInsideButton = "button[type='submit']>div"
const errorMessage = "#signup-form_error";

class SignUpPage extends BasePage {
    getEmailValue() {
        return this.getElement(emailInput);
    }

    fillForm() {
        this.typeInto(fullNameInput,registerData.fullname);
        this.typeInto(passwordInput,registerData.password);
        this.checkWithOption(termsCheckbox, { force: true });
        this.scrollTo(submitButton);
        this.clickOn(submitButton);
        if(this.getElement(loaderInsideButton).should('not.exist')) // On this page sometimes we need to click twice, cause first click
        {                                                           // on the button just set vewport onto email Input
            this.clickOn(submitButton);
        }
    }

    isErrorMesageVisible() {
        return this.isVisible(errorMessage);
    }

    getErrorMessage() {
        return this.getElement(errorMessage);
    }
}

module.exports = new SignUpPage();