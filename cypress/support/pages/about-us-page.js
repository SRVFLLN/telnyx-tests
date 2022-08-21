const { BasePage } = require("./base-page");

const chicagoCardTitle = "//span[text()='Chicago']";
const chicagoAddressTextBox = "//span[text()='Chicago']/ancestor::h4/parent::div//br/parent::p";
const chicagoOfficeNumber = "//span[text()='Chicago']/ancestor::h4/parent::div//p[contains(text(),'+')]";
const dublinCardTitle = "//span[text()='Dublin']";
const dublinAddressTextBox = "//span[text()='Dublin']/ancestor::h4/parent::div//br/parent::p";
const dublinOfficeNumber = "//span[text()='Dublin']/ancestor::h4/parent::div//p[contains(text(),'+')]";

exports.AboutUsPage = class AboutUsPage extends BasePage {
    get chicagoCardTitle() {
        return this.getElement(chicagoCardTitle, true);
    }

    scrollToChicagoCard() {
        this.scrollTo(chicagoCardTitle, true);
    }

    get chicagoAddressText() {
        return this.getElementText(chicagoAddressTextBox, true);
    }

    get chicagoOfficeNumber() {
        return this.getElementText(chicagoOfficeNumber, true);
    }

    get dublinCardTitle() {
        return this.getElement(dublinCardTitle, true);
    }

    scrollToDublinCard() {
        this.scrollTo(dublinCardTitle, true);
    }

    get dublinAddressText() {
        return this.getElementText(dublinAddressTextBox, true);
    }

    get dublinOfficeNumber() {
        return this.getElementText(dublinOfficeNumber, true);
    }
}