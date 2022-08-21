const { BasePage } = require("./base-page");

const noteHeader = "main article > h1";
const noteTime = "time";

exports.NotePage = class NotePage extends BasePage {
    get noteHeader() {
        return this.getElementText(noteHeader);
    }

    get noteTime() {
        return this.getElementText(noteTime);
    }
}