const mainPage = require("../support/pages/main-page");
const aboutUsPage = require("../support/pages/about-us-page");
const blogPage = require("../support/pages/blog-page");
const releaseNotesPage = require("../support/pages/release-notes-page");
const notePage = require("../support/pages/note-page");
const checks = require("../fixtures/pages-cheks.json");

describe("Footer", () => {
    it("Should open “About us” page which containing correct addresses", () => {
        mainPage.Footer.clickOnAboutUs();
    
        aboutUsPage.scrollToChicagoCard();
        aboutUsPage.chicagoCardTitle.should('be.visible');
        aboutUsPage.chicagoAddressText.should('eq', checks.chicagoAddress);
        aboutUsPage.chicagoOfficeNumber.should('eq', checks.chicagoPhone);
    
        aboutUsPage.scrollToDublinCard();
        aboutUsPage.dublinCardTitle.should('be.visible');
        aboutUsPage.dublinAddressText.should('eq', checks.dublinAddress);
        aboutUsPage.dublinOfficeNumber.should('eq', checks.dublinPhone);
      });
    
    it("Should open “Blog” page which containing working filters", () => {
        mainPage.Footer.clickOnBlog();
    
        blogPage.clickOnWirelessFilter();
        blogPage.clickOnNewPnFFilter();
        blogPage.meetPostPublishedTime.should('contain', checks.meetPostTime);
        blogPage.meetPostHeader.should('contain', checks.meetPostHeader);
    
        blogPage.clickOnInsightFilter();
        blogPage.clickOnVerifyAPIFilter();
        blogPage.voicePostPublishedTime.should('contain', checks.voicePostTime);
        blogPage.voicePostHeader.should('contain', checks.voicePostHeader);
    });
    
    it("Should open “Blog” page which containing working search input", () => {
        mainPage.Footer.clickOnBlog();
    
        let query = checks.searchQuery;
        blogPage.typeIntoSearchInput(query);
        cy.url().should('contain', 'search');
        blogPage.searchResults.should('contain', query)
        blogPage.commSIPPostPublishedTime.should('contain', checks.searchResultTime);
        blogPage.commSIPPostHeader.should('contain', query);
    });
    
    it("Should open “Release notes” page with working links", () => {
        mainPage.Footer.clickOnReleaseNotes();
    
        releaseNotesPage.firstNoteHeader.then((noteHeader) => {
          releaseNotesPage.firstNotePublishedTime.then((noteTime) => {
            releaseNotesPage.clickOnFirstNoteLink();
        
            notePage.noteHeader.should('contain', noteHeader);
            notePage.noteTime.should('eq', noteTime);
          });
        });
    });
})