const mainPage = require("../support/pages/main-page");
const checks = require("../fixtures/pages-cheks.json");

describe("Main page sliders", () => {
  it("Phone Slider should shows correct prices", () => {
    mainPage.scrollToForm();
    mainPage.setVoiceForm();
    mainPage.FinalPrice.then((price)=>{
      price = price.replace('$', '');
      price = price.replace(',', '');
      price = parseFloat(price)
      expect(price).be.gte(checks.phoneSliderPrice)
    });
  });
    
  it("Message Slider should shows correct prices", () => {
    mainPage.scrollToForm();
    mainPage.setSMSForm();
    mainPage.FinalPrice.then((price) => {
      price = price.replace('$', '');
      price = price.replace(',', '');
      price = parseFloat(price)
      expect(price).be.gte(checks.messageSliderPrice);
    });
  });
})