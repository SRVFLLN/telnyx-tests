const {BasePage} = require("./base-page");

const registerData = require("../../fixtures/register.json");
const Header = require("./header");
const Footer = require("./footer");

const emailInput = "input[name='email']";
const tFFButton = "button[type='submit']";
const acceptCookieButtom = "button[aria-label^='close'] ~ div button";
const formHeader = "h2 a";
const voiceButton = "div[class*='Inline'] button:first-child";
const smsButton = "div[class*='Inline'] button:last-child";
const tollFNRadioButton = "#toll-free-numbers";
const locNRadioButton = "#local-numbers";
const outCallsSlider = "//div[contains(text(),'outbound')]/following-sibling::div//div[contains(@class,'ant-slider-handle')]";
const sendSlider = "//div[contains(text(),'Send')]/following-sibling::div//div[contains(@class,'ant-slider-handle')]";
const receiveSlider = "//div[contains(text(),'Receive')]/following-sibling::div//div[contains(@class,'ant-slider-handle')]";
const progVoiceRadioButon = "#no";
const finalPrice = "//div[contains(text(),'Telnyx')]/following-sibling::div//span[@class]";
const phoneUpSliderRail = "//div[contains(text(),'outbound')]/following-sibling::div//div[@class='ant-slider-step']";
const smsUpSliderBail = "//div[contains(text(),'Send')]/following-sibling::div//div[@class='ant-slider-step']";
const downSliderRail = "//div[contains(text(),'Receive')]/following-sibling::div//div[@class='ant-slider-step']";

exports.MainPage = class MainPage extends BasePage {
    navigate() {
        super.navigate();
    }

    acceptCookie() {
        this.clickOn(acceptCookieButtom);
    }

    typeEmail() {
        this.typeInto(emailInput,registerData.email);
        this.clickOn(tFFButton);
    }

    _moveSlider(targetValue, sliderLocator, rail) {
        this.getElement(rail, true).invoke('width').then((wd) => {
            this.getElementAttribute(sliderLocator, 'aria-valuemax', true).then((vmax) => {
                this.clickOnByCoord(rail, ((parseInt(wd)/parseInt(vmax))*targetValue), 2, true);
            });
        });
        this.getElementAttribute(sliderLocator, 'aria-valuenow', true).then((vnow) => {
            this.getElementAttribute(sliderLocator, 'aria-valuemin', true).then((vmin) => {
            let steps = (parseInt(vnow)-targetValue)/parseInt(vmin);
            let arrows;
            if(steps>0){
                arrows = '{leftarrow}'.repeat(steps);
            }
            else {
                arrows = 'rightarrow'.repeat(steps*(-1));
            }
            this.typeInto(sliderLocator, arrows, true);
            });
        });
    }

    scrollToForm() {
        this.scrollTo(formHeader);
    }

    get Header() {
        return Header.instance;
    }

    get Footer() {
        return Footer.instance;
    }

    setVoiceForm() {
        this.clickOn(voiceButton);
        this.check(tollFNRadioButton);
        this._moveSlider(291500,outCallsSlider,phoneUpSliderRail);
        this._moveSlider(181500,receiveSlider,downSliderRail);
        this.check(progVoiceRadioButon);
    }

    setSMSForm() {
        this.clickOn(smsButton);
        this.check(locNRadioButton);
        this._moveSlider(645000,sendSlider,smsUpSliderBail);
        this._moveSlider(520000,receiveSlider, downSliderRail);
    }

    get FinalPrice() {
        return this.getElementText(finalPrice, true);
    }
}