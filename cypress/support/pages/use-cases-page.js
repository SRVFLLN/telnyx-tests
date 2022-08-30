const { BasePage } = require("./base-page");

const useCasesBlocks = "main ul li a";
const instantLABlock = "//main//ul/li/a//h3[text()='Instant Lead Alerts']";

class UseCasesPage extends BasePage {
    getUseCasesBlocks() {
        return this.getElement(useCasesBlocks);
    }

    getILABlock() {
        return this.getElement(instantLABlock, true);
    }
}

module.exports = new UseCasesPage();