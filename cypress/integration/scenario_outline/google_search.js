import {Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps';

Given("url git", () => {
  cy.visit("https://www.google.com/");
});
Given("Kullanici arama yapacak{string}", (capitals) => {
//cy.get('#L2AGLb > .QS5gu').click();
  cy.get(".gLFyf").type(capitals);
  cy.get('.FPdoLc > center > .gNO89b').click();
});
Given("Arama yapildigini kontrol edecek {string}", (capitals) => {
    cy.title().should('include',capitals)
});
