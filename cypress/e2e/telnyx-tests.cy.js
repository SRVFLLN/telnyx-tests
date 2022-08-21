const {MainPage} = require("../support/pages/main-page");
const {SignUpPage} = require("../support/pages/sign-up-page");
const {NumLookPage} = require("../support/pages/number-lookup-page");
const {StoragePage} = require("../support/pages/storage-page");
const {UseCasesPage} = require("../support/pages/use-cases-page");
const {AboutUsPage} = require("../support/pages/about-us-page");
const {BlogPage} = require("../support/pages/blog-page");
const {ReleaseNotesPage} = require("../support/pages/release-notes-page");
const {NotePage} = require("../support/pages/note-page");
const registerData = require("../fixtures/register.json");
const checks = require("../fixtures/pages-cheks.json");

describe('Telnyx tests', () => {
  before(() => {
    cy.goToMainPage();
  });

  beforeEach(() => {
    const mainPage = new MainPage();
    mainPage.navigate();
  });

  it('Register with incorrect credentials', () => {
    const mainPage = new MainPage();
    mainPage.typeEmail();

    const signUpPage = new SignUpPage();
    signUpPage.getEmailValue().should('have.value', registerData.email);
    signUpPage.fillForm();
    signUpPage.getErrorMessage().should('be.visible');
  });

  it("Phone Slider and prices on main page", () => {
    const mainPage = new MainPage();
    mainPage.scrollToForm();
    mainPage.setVoiceForm();
    mainPage.FinalPrice.then((price)=>{
      price = price.replace('$', '');
      price = price.replace(',', '');
      price = parseFloat(price)
      expect(price).be.gte(checks.phoneSliderPrice)
    });
  });

  it("Message Slider and Prices on main page", () => {
    const mainPage = new MainPage();
    mainPage.scrollToForm();
    mainPage.setSMSForm();
    mainPage.FinalPrice.then((price) => {
      price = price.replace('$', '');
      price = price.replace(',', '');
      price = parseFloat(price)
      expect(price).be.gte(checks.messageSliderPrice);
    });
  });

  it("“Number Lookup” page", () => {
    const mainPage = new MainPage();
    mainPage.Header.hoverOnProductTab();
    mainPage.Header.getProductTabContent().should('be.visible');
    mainPage.Header.clickOnNumLook();

    const numLookPage = new NumLookPage();
    numLookPage.scrollToTableHeader();
    numLookPage.getTableColumns().should('have.length', 3);
  });

  it("“Cloud Storage” page", () => {
    const mainPage = new MainPage();
    mainPage.Header.hoverOnProductTab();
    mainPage.Header.getProductTabContent().should('be.visible');
    mainPage.Header.clickOnStorage();

    const storagePage = new StoragePage();
    storagePage.scrollToFAQ();
    storagePage.Questions.first().should('be.visible');
    storagePage.Questions.should('have.length', 8);
    storagePage.clickOnQuestionButton();
    storagePage.AnswerText.should('contain', checks.storageAnswer);
  });

  it("“Use cases” page", () => {
    const mainPage = new MainPage();
    mainPage.Header.hoverOnSolutionTab();
    mainPage.Header.getSolutionTabContent().should('be.visible');
    mainPage.Header.clickOnUseCases();

    const useCasesPage = new UseCasesPage();
    useCasesPage.getUseCasesBlocks().should('have.length', 20);
    useCasesPage.getILABlock().should('exist');
  });

  it("“About us” page and addresses.", () => {
    const mainPage = new MainPage();
    mainPage.Footer.clickOnAboutUs();

    const aboutUsPage = new AboutUsPage();
    aboutUsPage.scrollToChicagoCard();
    aboutUsPage.chicagoCardTitle.should('be.visible');
    aboutUsPage.chicagoAddressText.should('eq', checks.chicagoAddress);
    aboutUsPage.chicagoOfficeNumber.should('eq', checks.chicagoPhone);

    aboutUsPage.scrollToDublinCard();
    aboutUsPage.dublinCardTitle.should('be.visible');
    aboutUsPage.dublinAddressText.should('eq', checks.dublinAddress);
    aboutUsPage.dublinOfficeNumber.should('eq', checks.dublinPhone);
  });

  it("“Blog” page and filters", () => {
    const mainPage = new MainPage();
    mainPage.Footer.clickOnBlog();

    const blogPage = new BlogPage();
    blogPage.clickOnWirelessFilter();
    blogPage.clickOnNewPnFFilter();
    blogPage.meetPostPublishedTime.should('contain', checks.meetPostTime);
    blogPage.meetPostHeader.should('contain', checks.meetPostHeader);

    blogPage.clickOnInsightFilter();
    blogPage.clickOnVerifyAPIFilter();
    blogPage.voicePostPublishedTime.should('contain', checks.voicePostTime);
    blogPage.voicePostHeader.should('contain', checks.voicePostHeader);
  });

  it("“Blog” page and search", () => {
    const mainPage = new MainPage();
    mainPage.Footer.clickOnBlog();

    const blogPage = new BlogPage();
    let query = checks.searchQuery;
    blogPage.typeIntoSearchInput(query);
    cy.url().should('contain', 'search');
    blogPage.searchResults.should('contain', query)
    blogPage.commSIPPostPublishedTime.should('contain', checks.searchResultTime);
    blogPage.commSIPPostHeader.should('contain', query);
  });

  it("“Release notes” and matching information", () => {
    const mainPage = new MainPage();
    mainPage.Footer.clickOnReleaseNotes();

    const releaseNotesPage = new ReleaseNotesPage();
    releaseNotesPage.firstNoteHeader.then((noteHeader) => {
      releaseNotesPage.firstNotePublishedTime.then((noteTime) => {
        releaseNotesPage.clickOnFirstNoteLink();
    
        const notePage = new NotePage();
        notePage.noteHeader.should('contain', noteHeader);
        notePage.noteTime.should('eq', noteTime);
      });
    });
  });
});