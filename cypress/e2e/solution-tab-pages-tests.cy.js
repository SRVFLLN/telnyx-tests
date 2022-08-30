const mainPage = require("../support/pages/main-page");
const useCasesPage = require("../support/pages/use-cases-page");

describe("Solution tab", () => {
    it("Should lead to 'Use Cases' page", () => {
        mainPage.Header.hoverOnSolutionTab();
        mainPage.Header.getSolutionTabContent().should('be.visible');
        mainPage.Header.clickOnUseCases();

        useCasesPage.getUseCasesBlocks().should('have.length', 20);
        useCasesPage.getILABlock().should('exist');
    })
})