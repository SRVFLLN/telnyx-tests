require('./commands');
require('@shelex/cypress-allure-plugin');
const mainPage = require("../support/pages/main-page");

before(() => {
    cy.goToMainPage();
});
    
beforeEach(() => {
    mainPage.navigate();
});