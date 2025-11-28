const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vps-3696213-x.dattaweb.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    responseTimeout: 15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  downloadsFolder: 'cypress/downloads' // Necesario para el flujo de estadisticas del (Organizador)
});
