const mainPage = require("../support/pages/main-page");
const numLookPage = require("../support/pages/number-lookup-page");
const storagePage = require("../support/pages/storage-page");
const checks = require("../fixtures/pages-cheks.json");

describe("Product tab", () => {
    it("Should lead 'Number lookup' page", () => {
        mainPage.Header.hoverOnProductTab();
        mainPage.Header.getProductTabContent().should('be.visible');
        mainPage.Header.clickOnNumLook();

        numLookPage.scrollToTableHeader();
        numLookPage.getTableColumns().should('have.length', 3);
    });

    it("Should lead 'Cloud Storage' page", () => {
        mainPage.Header.hoverOnProductTab();
        mainPage.Header.getProductTabContent().should('be.visible');
        mainPage.Header.clickOnStorage();
    
        storagePage.scrollToFAQ();
        storagePage.Questions.first().should('be.visible');
        storagePage.Questions.should('have.length', 8);
        storagePage.clickOnQuestionButton();
        storagePage.AnswerText.should('contain', checks.storageAnswer);
    });
})