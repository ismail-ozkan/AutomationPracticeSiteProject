const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/cucumberReport",
    reportPath: "./cypress/cucumberReport/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: 'chrome',
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Run info",
        data: [
            { label: "Project", value: "Cypress project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
        ],
    },
});