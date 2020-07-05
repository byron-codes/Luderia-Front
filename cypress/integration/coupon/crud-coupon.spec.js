describe("Coupon", () => {
  let couponId;
  it("CREATE", () => {
    cy.visit("/admin/coupon");
    cy.wait(3000);
    cy.get("[data-cy=name]").type("Nome do cupom");
    cy.get("[data-cy=expirationDate]").type("2020-12-31");
    cy.get("[data-cy=quantity]").type("10");
    cy.get("[data-cy=value]").type("25");
    cy.get("[data-cy=description]").type("Descrição do cupom");
    cy.get("[data-cy=code]").type("TES25T");
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get('input[id="couponId"]')
      .invoke("val")
      .then((sometext) => (couponId = sometext));
    cy.wait(5000);
    cy.get(".swal-button").click();
  });
  it("READ", () => {
    cy.visit("/admin/coupons");
    cy.wait(5000);
  });
  it("UPDATE", () => {
    cy.visit(`/admin/coupons/${couponId}`);
    cy.wait(10000);
  });
  it("DELETE", () => {
    cy.visit("/admin/coupons");
  });
});
