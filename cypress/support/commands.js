const mainPage = require("../support/pages/main-page");

Cypress.Commands.add("goToMainPage",() => 
{
    mainPage.navigate();
    mainPage.acceptCookie();
})