const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(".", "config", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

// plugins file
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
    // accept a configFile value or use development by default
    const file = config.env.configFile || "qa";

    return getConfigurationByFile(file);
    }
  }
}
