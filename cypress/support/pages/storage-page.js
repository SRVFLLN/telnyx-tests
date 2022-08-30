const { BasePage } = require("./base-page");

const sectionFAQHeader = "div script + h2";
const questionButton = "//button[contains(text(),'What is')]";
const answerTextBox = "//button[contains(text(),'What is')]/parent::dt/following-sibling::dd//p";
const questionSections = "script + h2 + dl > div";

class StoragePage extends BasePage {
    scrollToFAQ() {
        this.scrollTo(sectionFAQHeader);
        this.unfocus();
    }

    clickOnQuestionButton() {
        this.clickOn(questionButton, true);
    }

    get AnswerText() {
        return this.getElementText(answerTextBox, true);
    }

    get Questions() {
        return this.getElement(questionSections);
    }
}

module.exports = new StoragePage();