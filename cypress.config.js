const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    baseUrl: "https://telnyx.com", 
    video: false,
    viewportHeight: 1280,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
    scrollBehavior: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    }
  }
}
