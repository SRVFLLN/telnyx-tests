/// <reference types="Cypress" />
require('cypress-xpath');
require("cypress-real-events/support");

exports.BasePage = class BasePage {
    navigate() {
        cy.visit("");
    }

    // This strange move for unfocus elements, 'cause when i trigger drop-donw menu, 
    // and then go to different page, DD menu don't close
    constructor() {
        cy.get('html').realMouseMove(0,0); 
    }

    clickOn(elLocator, xpath = false) {
        this.getElement(elLocator, xpath).click();
    }

    clickOnByCoord(elLocator, x, y, xpath = false) {
        this.getElement(elLocator,xpath).click(x, y);
    }

    hoverOn(elLocator, xpath = false) {
        this.getElement(elLocator, xpath).parent().realHover();
        this.getElement(elLocator, xpath).realHover();
    }

    typeInto(elLocator, textToType, xpath = false) {
        this.getElement(elLocator, xpath).type(textToType);
    }

    check(elLocator, value = null, xpath = false) {
        if(value){
            this.getElement(elLocator, xpath).check(value);
            return;
        }
        this.getElement(elLocator, xpath).check();
    }

    checkWithOption(elLocator, option, xpath = false) {
        this.getElement(elLocator, xpath).check(option);
    }

    /**
     * Returns DOM element
     * 
     * @param {string} elLocator Locator of element in XPath or CSS format.
     * @param {boolean} xpath Is locator in XPath format. (Default = false)
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} DOM element.
     */
    getElement(elLocator, xpath = false) {
        if(xpath) {
            return cy.xpath(elLocator)
        }
        return cy.get(elLocator);
    }

    getElementText(elLocator, xpath = false) {
        return this.getElement(elLocator, xpath).invoke('text');
    }

    getElementAttribute(elLocator, attributeName, xpath = false) {
        return this.getElement(elLocator, xpath).invoke('attr', attributeName);
    }

    scrollTo(elLocator, xpath = false){
        this.getElement(elLocator, xpath).scrollIntoView();
    }
}