# Automation Practice Site Project

This Project is QA automation framework which is implemented with Cypress with JavaScript. Cucumber-BDD is applying in
this project to achieve structured approach, ensuring efficient test case management and easier collaboration between QA
engineers and stakeholders.

### Steps to Build The Project

#### Set up the project and download requeired dependencies into the project

> ##### `npm init `
> Initialize a new Node.js project.
---
> ##### `npm install cypress`
> Install Cypress, a fast and reliable end-to-end testing framework.
---
> ##### `npm install @badeball/cypress-cucumber-preprocessor`
> Incorporate Cucumber preprocessor to enable writing tests using Gherkin syntax.
---
> #### `npm install @cypress/browserify-preprocessor`
> Integrate Browserify preprocessor to bundle files for Cypress.
---
> #### `npm install -D cypress-iframe`
> This package provides functionality for working with iframes in Cypress tests
---
> #### `npm install multiple-cucumber-html-reporter --save-dev`
> This package enables the generation of detailed and visually appealing HTML reports for your **Cucumber** test runs.
---
> #### `npm install mochawesome --save-dev`
> We add this package to enable the generation of detailed, visually appealing HTML test reports.
---
> we install from this [link](https://github.com/cucumber/json-formatter/releases) and rename this file
> to `cucumber-json-formatter.exe` and put the file to the project folder to generate cucumber report.
---

### In order to generate Html Report we need to run this code:

We create a new JS file named cucumber-html-report.js and put inside it following code.

```
const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/cucumberReport/",
    reportPath: "./cypress/cucumberReport/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "115",
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
            { label: "Project", value: "Cypress Automation project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "B11221.34321" },
        ],
    },
});
```

We can run following command to generate our test report.
> ``node cucumber-html-report.js``

## Apply some congfiguration to implement Cucumber-Processor in the project

### In [cypress.config.js ](C:\Users\ismail\WebstormProjects\AutomationPracticeSiteProject\cypress.config.js) we add following parts

``` 
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
async function setupNodeEvents(on, config) {
// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);

on("file:preprocessor", browserify.default(config));

// Make sure to return the config object as it might have been modified by the plugin.
return config;
}
```
We add following part inside e2e
```
e2e: {
        setupNodeEvents,
        specPattern: 'cypress/e2e/features/*.feature'
    }
```
Under defineConfig() we add this part to specify our url and something needed then we can call them using Cypress.env()
method

```
env: {
    url: "https://rahulshettyacademy.com",
    email : "ismailozkanlaw@gmail.com",
    password: "password"
},
```

### Under [package.json](C:\Users\ismail\WebstormProjects\AutomationPracticeSiteProject\package.json) file, we add this part

```
"cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true,
      "output": "cypress/cucumberReport/results.json"
    }
  },
```

And we add this part to use scripts easily.

```
"scripts": {
    "test": "npx cypress run",
    "open": "npx cypress open",
    "headTest": "npx cypress run --headed",
    "headTestNotClose": "npx cypress run --headed --no-exit",
    "chromeTest": "npx cypress run --browser chrome",
    "chromeTestParallel": "npx cypress run --browser chrome --parallel",
    "recordDashBoardTest": "npx cypress run --record --key {GeneratedInCypressDashboarKey}--reporter mochawesome",
    "specTest": "npx cypress run --spec cypress/e2e/aps/featueres/*.feature --headed --browser chrome",
    "regressionTest": "npx cypress run --env tags=\"@Regression\" --headed --browser chrome"
  }
```

## Implementation Of POM

> ### Under the e2e folder we create a new folder named [pages](C:\Users\ismail\WebstormProjects\AutomationPracticeSiteProject\cypress\support\pages) to implement POM (Page Object Model) which provides us to store web elements, variables and some reusable methods related each page so we can access them only import a object from related class.

## Using [command.js](C:\Users\ismail\WebstormProjects\AutomationPracticeSiteProject\cypress\support\commands.js) file

> ### We can create and store our custom methods that we use in our framework.

```
Cypress.Commands.add('methodNameToCall',function (parameter){
    // implementation of method
})
```

---

# Project Structure

## Main folders

1. **e2e**: End-to-End Testing Setup
   1. **features**: Test Scenarios
   2. **pages**: Page Objects
2. **fixtures**: Test Data
3. **supports**: Helper Functions
4. **cucumberReport**: Test Reports
5. **videos**: Test Videos

## Other Files:
1. `cypress.config.js:` Configurations
2. `package.json:` Dependencies
3. `package-lock.json:` Dependency Details
4. `.gitignore:` Ignored Files/Folders
5. ``cypress-html-report.js:`` HTML Report Config
6. ``cucumber-json-formatter.exe:`` Cucumber Report Formatter
7. ``ReadMe.md:`` Documentation
---
## Share The Project in GitHub

1. git init
2. git add README.md
3. git commit -m "first commit"
4. git branch -M master
5. git remote add origin https://github.com/ismail-ozkan/CypressAutomationTemplateProject
6. git push -u origin master
