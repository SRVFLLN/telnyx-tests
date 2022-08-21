const { BasePage } = require("./base-page");

const tableHeader = "//div/p/preceding-sibling::header/h2";
const columns = "//table//td[contains(text(),'Format')]/parent::tr/td//img";

exports.NumLookPage = class NumLookPage extends BasePage {
    scrollToTableHeader() {
        this.scrollTo(tableHeader, true);
    }
    
    getTableColumns() {
        return this.getElement(columns, true);
    }
}