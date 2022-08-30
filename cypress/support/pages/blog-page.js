const { BasePage } = require("./base-page");

const searchInput = "input[type='search']";
const wirelessFilter = "//button[text()='Wireless']";
const newPnFFilter = "//button[contains(text(),'Products') and @role]";
const verAPIFilter = "//button[contains(text(),'API')]";
const insightFilter = "//button[contains(text(),'In')]";

const voicePostPubTime = "div[id='articles'] a[href*='center-ii'] time";
const voicePostHeader = "div[id='articles'] a[href*='center-ii'] h2";
const meetPostPubTime = "div[id='articles'] a[href*='wireless-iot-conn'] time";
const meetPostHeader = "div[id='articles'] a[href*='wireless-iot-conn'] h2";
const searchResults = "a + div div[class*='Text']";
const commSIPPostPubTime = "div[id='articles'] a[href*='sip-term'] time";
const commSIPPostHeader = "div[id='articles'] a[href*='sip-term'] h2"

class BlogPage extends BasePage {
    clickOnWirelessFilter() {
        this.clickOn(wirelessFilter, true);
    }

    clickOnNewPnFFilter() {
        this.clickOn(newPnFFilter, true);
    }

    clickOnVerifyAPIFilter() {
        this.clickOn(verAPIFilter, true);
    }

    clickOnInsightFilter() {
        this.clickOn(insightFilter, true);
    }

    typeIntoSearchInput(query) {
        this.typeInto(searchInput, query+'{Enter}');
    }

    get voicePostPublishedTime() {
        return this.getElementText(voicePostPubTime);
    }

    get voicePostHeader() {
        return this.getElementText(voicePostHeader);
    }

    get meetPostPublishedTime() {
        return this.getElementText(meetPostPubTime);
    }

    get meetPostHeader() {
        return this.getElementText(meetPostHeader);
    }

    get searchResults() {
        return this.getElementText(searchResults);
    }

    get commSIPPostPublishedTime() {
        return this.getElementText(commSIPPostPubTime);
    }

    get commSIPPostHeader() {
        return this.getElementText(commSIPPostHeader);
    }
}

module.exports = new BlogPage();