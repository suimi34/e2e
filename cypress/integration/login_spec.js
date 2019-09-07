describe("Test login", function() {
  it("Visit login page", function() {
    cy.visit("localhost:3000/login");
    cy.contains("Login");
    cy.get(".email-form")
      .type("test@example.com")
      .should("have.value", "test@example.com");

    cy.get(".password-form")
      .type("password")
      .should("have.value", "password");

    cy.get(".login-submit").click();
    cy.url().should("include", "/top");
  });
});
