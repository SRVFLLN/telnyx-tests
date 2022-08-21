const fs = require("fs-extra");
const path = require("path");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(".", "config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

// plugins file
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      const file = config.env.configFile || "qa";

      return getConfigurationByFile(file);
    }
  }
}
