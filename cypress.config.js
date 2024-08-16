const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xsy89k",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://www.saucedemo.com',
    chromeWebSecurity: false
  },
});
