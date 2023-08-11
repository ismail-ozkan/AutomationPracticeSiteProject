import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";

When('User goes to google', () => {
    cy.visit(Cypress.env('url'));
})
When('User search website', function () {
    cy.get('[name="q"]').type('cypress automation practice website').type('{enter}');
});
When('User clicks on the website link', function () {
    cy.contains('Practice Website').click();
});
Then('User should see url of website homepage', function () {
    let currentUrl;
    cy.url().then(function (url) {
        currentUrl = url;
    }).then(function (){
        cy.log(currentUrl)
    })
});