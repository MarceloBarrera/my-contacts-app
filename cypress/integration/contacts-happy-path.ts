/// <reference types="Cypress" />

describe("render contacts happy path", () => {
  const id = "101";
  const contact = {
    createdAt: "2022-02-21T23:00:05.414Z",
    name: "foo3",
    avatar: "https://i.pravatar.cc/300",
    email: "foo3@gmail.com",
    phone: "999-784-2087 x469",
    birthday: "2000-01-01T00:00:00.000Z",
    id,
  };
  it("open app", () => {
    cy.intercept("GET", "api/v1/contacts", {
      statusCode: 200,
      body: [
        {
          createdAt: "2022-02-21T23:00:05.414Z",
          name: "bar",
          avatar: "https://i.pravatar.cc/300",
          email: "Chadrick40@gmail.com",
          phone: "862-784-2087 x469",
          birthday: "2021-11-25T05:29:06.599Z",
          id: "35",
        },
      ],
    });
    cy.visit("/");
  });

  it("add contact", () => {
    cy.get("button").contains("Add Contact").click();
  });

  it("fill contact details", () => {
    cy.get("#name").type(contact.name);
    cy.get("#email").type(contact.email);
    cy.get("#telephone").type(contact.phone);
    cy.get("#birthday").type("2000-01-01");
  });

  it("click YES, contact is added", () => {
    cy.intercept("POST", "api/v1/contacts", {
      statusCode: 201,
      body: { ...contact },
    });

    cy.get('[data-test="add-contact-modal"]').click();
    cy.contains(contact.name);
  });

  it("expand details for new contact", () => {
    cy.contains(contact.name).click();
  });

  it("edit new contact, name to be updated", () => {
    cy.intercept("PUT", "api/v1/contacts/*", {
      statusCode: 200,
      body: { ...contact, name: "foo4" },
    });

    cy.get(`[data-test="edit-icon-contact-name-id-${id}"]`).click();
    cy.get(`[data-test="input-contact-name-id-${id}"]`).clear().type("foo4");
    cy.get('[aria-label="Submit"]').click();
  });

  it("delete new contact just added", () => {
    cy.intercept("DELETE", "api/v1/contacts/*", {
      statusCode: 200,
      body: { ...contact },
    });

    cy.get(`[data-test="delete-btn-contact-${id}"]`).click();
    cy.get("button").contains("Yes").click();
  });

  it("contact does not exists", () => {
    cy.contains(contact.name).should("not.exist");
  });
});
