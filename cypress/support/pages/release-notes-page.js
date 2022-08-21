const { BasePage } = require("./base-page");

const firstNoteHeader = "div section:first-child h3";
const firstNoteTime = "div section:first-child time";
const firstNoteLink = "div section:first-child a";

exports.ReleaseNotesPage = class ReleaseNotesPage extends BasePage {
    get firstNoteHeader() {
        return this.getElementText(firstNoteHeader);
    }

    get firstNotePublishedTime() {
        return this.getElementText(firstNoteTime);
    }

    clickOnFirstNoteLink() {
        this.clickOn(firstNoteLink);
    }
}