const { BasePage } = require("./base-page");

const footerBlock = "main + footer";
const aboutUsLink = "footer a[href$='about']";
const blogLink = "footer a[href$='resources']";
const releaseNotesLink = "footer a[href$='notes']";

class Footer extends BasePage {
    static form = null;

    static get instance() {
        if(!Footer.form){
            Footer.form = new Footer();
        }
        return Footer.form;
    }

    scrollToFooter() {
        this.scrollTo(footerBlock);
    }

    clickOnAboutUs() {
        this.scrollToFooter();
        this.clickOn(aboutUsLink);
    }

    clickOnBlog() {
        this.scrollToFooter();
        this.clickOn(blogLink);
    }

    clickOnReleaseNotes() {
        this.scrollToFooter();
        this.clickOn(releaseNotesLink);
    }
}

module.exports = Footer;