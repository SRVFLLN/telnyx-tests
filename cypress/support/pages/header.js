const { BasePage } = require("./base-page");
const productsTab = "//header//span/span[contains(text(),'Product')]";
const solutionTab = "//header//span/span[contains(text(),'Solution')]";
const lookupLinkInsideDd = "//header//span[contains(text(),'Lookup')]";
const storageLinkInsideDd = "//header//span[contains(text(),'Storage')]";
const useCasesLinkInsideDd = "//header//span[contains(text(),'Use Cases')]";

class Header extends BasePage{
    static form = null;

    static get instance() {
        if(!Header.form) {
            Header.form = new Header();
        }
        return Header.form;
    }

    hoverOnProductTab() {
        this.hoverOn(productsTab, true);
    }

    getProductTabContent() {
        return this.getElement(lookupLinkInsideDd, true);
    }

    hoverOnSolutionTab() {
        this.hoverOn(solutionTab, true);
    }

    getSolutionTabContent() {
        return this.getElement(useCasesLinkInsideDd, true);
    }

    clickOnNumLook() {
        this.clickOn(lookupLinkInsideDd, true);
    }

    clickOnStorage() {
        this.clickOn(storageLinkInsideDd, true);
    }

    clickOnUseCases() {
        this.clickOn(useCasesLinkInsideDd, true)
    }
}

module.exports = Header;