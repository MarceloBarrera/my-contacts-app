/// <reference types="Cypress" />

describe("render contacts no happy path", () => {
  it("something went wrong", () => {
    cy.intercept("GET", "api/v1/contacts", {
      statusCode: 500,
    });
    cy.visit("/");
    cy.contains("Loading...");
    cy.contains("Something went wrong, try again later");
  });
});
