const { BasePage } = require("./base-page");

const tableHeader = "//div/p/preceding-sibling::header/h2";
const columns = "//table//td[contains(text(),'Format')]/parent::tr/td//img";

class NumLookPage extends BasePage {
    scrollToTableHeader() {
        this.scrollTo(tableHeader, true);
    }
    
    getTableColumns() {
        return this.getElement(columns, true);
    }
}

module.exports =new NumLookPage();