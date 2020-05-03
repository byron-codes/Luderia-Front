describe("Venda", () => {
  function generateString(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  function generateNumber(length) {
    var result = "";
    var characters = "0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  it("CART", () => {
    cy.visit("/");
    cy.wait(3000);
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=login]").type("yunikon");
    cy.get("[data-cy=password]").type("qwer1234");
    cy.get("[data-cy=btn-login]").click();
    cy.wait(3000);
    cy.visit(`/itens`);
    cy.wait(3000);
    cy.get("[data-cy=item-62]").click();
    cy.wait(3000);
    cy.get("[data-cy=cep]").type("08552400");
    cy.get("[data-cy=calculate]").click();
    cy.wait(3000);
    cy.get("[data-cy=quantity-cart]").type("200");
    cy.get("[data-cy=btn-addCart]").click();
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.get("[data-cy=quantity-cart]").clear();
    cy.get("[data-cy=quantity-cart]").type("5");
    cy.get("[data-cy=btn-addCart]").click();
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.visit(`/itens`);
    cy.wait(3000);
    cy.get("[data-cy=item-63]").click();
    cy.wait(3000);
    cy.get("[data-cy=quantity-cart]").clear();
    cy.get("[data-cy=quantity-cart]").type("3");
    cy.get("[data-cy=btn-addCart]").click();
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.get("[data-cy=go-cart]").click();
    cy.wait(5000);
    cy.get("[data-cy=coupon]").type("10CONTO");
    cy.get("[data-cy=add-coupon]").click();
    cy.wait(2000);
    cy.get("[data-cy=change-address]").click();
    cy.wait(2000);
    cy.get("[data-cy=address-select]").click();
    cy.wait(2000);
    cy.get(".card-body > .text-center").click();
    cy.wait(2000);
    cy.get("[data-cy=card-number]").type(generateNumber(16));
    cy.get("[data-cy=card-name]").type(
      `${generateString(4)} ${generateString(5)}`
    );
    cy.get("[data-cy=card-valid]").type(generateNumber(4));
    cy.get("[data-cy=card-cvv]").type(generateNumber(3));
    cy.get("[data-cy=btn-save]").click();
    cy.wait(3000);
    cy.get(".swal-button").click();
    cy.wait(3000);
    cy.get(":nth-child(1) > .small-box > [data-cy=card-select]").click();
    cy.wait(1000);
    cy.get(".card-body > .text-center").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .small-box > [data-cy=card-select]").click();
    cy.wait(1000);
    cy.get("[data-cy=btn-save]").scrollIntoView();
    cy.get("[data-cy=btn-save]").scrollIntoView();
    cy.wait(1000);
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get(".swal-button").click();
    cy.visit(`/sales`);
    cy.wait(3000);
    cy.get(".odd > [data-cy=item-row] > .link-table").click();
    cy.wait(5000);
    cy.visit(`/admin/shipping`);
    cy.wait(3000);
    cy.get(
      ":nth-child(1) > [style='width: 150px;'] > [data-cy=btn-status]"
    ).click();
    cy.wait(1000);
    cy.get(".swal-button").click();
    cy.wait(1000);
    cy.get(
      ":nth-child(1) > [style='width: 150px;'] > [data-cy=btn-status]"
    ).click();
    cy.wait(1000);
    cy.get(".swal-button").click();
    cy.wait(5000);
  });
  it("CHANGE", () => {
    cy.visit("/");
    cy.wait(3000);
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=login]").type("yunikon");
    cy.get("[data-cy=password]").type("qwer1234");
    cy.get("[data-cy=btn-login]").click();
    cy.wait(3000);
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=my-sales]").click();
    cy.wait(3000);
    cy.get(':nth-child(1) > [data-cy=item-row] > .link-table').click();
    cy.wait(5000);
    cy.get("[data-cy=btn-change]").click();
    cy.wait(3000);
    cy.get("[data-cy=item-change]").type("{downarrow}{downarrow}{enter}");
    cy.get("[data-cy=quantity]").clear();
    cy.get("[data-cy=quantity]").type("2");
    cy.get("[data-cy=reason]").type("{downarrow}{downarrow}{downarrow}{enter}");
    cy.get("[data-cy=description]").type("2");
    cy.get("[data-cy=btn-add]").click();
    cy.wait(3000);
    cy.get("[data-cy=btn-save-change]").click();
    cy.wait(5000);
    cy.get(".swal-button").click();
    cy.visit("/sales");
    cy.wait(3000);
    cy.visit("/admin/devolutions");
    cy.wait(3000);
    cy.get(':nth-child(1) > [style="width: 150px;"] > .btn').click();
    cy.wait(3000);
    cy.get("[data-cy=btn-deny]").click();;
    cy.wait(1000);
    cy.get("[data-cy=btn-allow]").click();
    cy.wait(2000);
    cy.get("[data-cy=btn-change-finish]").click();
    cy.wait(5000);
    cy.get(".swal-button").click();
    cy.wait(3000);
    cy.get(':nth-child(1) > [style="width: 150px;"] > .btn').click();
    cy.wait(5000);
    cy.get(".swal-button").click();
    cy.visit("/");
    cy.wait(3000);
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=my-sales]").click();
    cy.wait(3000);
    cy.get("[data-cy=user-picture]").click();
    cy.get("[data-cy=my-account]").click();
  });
});
