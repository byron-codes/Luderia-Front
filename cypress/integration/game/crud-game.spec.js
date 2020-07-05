describe("Jogo", () => {
  let gameId;
  it("CREATE", () => {
    cy.visit("/admin/game");
    cy.wait(2000);
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get("[data-cy=name]").type("Nome do jogo");
    cy.get("[data-cy=originalName]").type("Nome sem tradução");
    cy.get("[data-cy=description]").type("Jogo de teste para cadastro");
    cy.get("[data-cy=releaseDate]").click();
    cy.get("[data-cy=releaseDate]").type("2020-03-01");
    cy.get("[data-cy=minPlayers]").type("2");
    cy.get("[data-cy=maxPlayers]").type("10");
    cy.get("[data-cy=minMinutes]").type("25");
    cy.get("[data-cy=maxMinutes]").type("50");
    cy.get("[data-cy=minAge]").type("12");
    cy.get("[data-cy=value]").type("12570");
    cy.get("[data-cy=languageDependence]").type(
      "{downarrow}{downarrow}{downarrow}{enter}"
    );
    cy.get("[data-cy=style]").type("{downarrow}{downarrow}{enter}");
    cy.get("[data-cy=level]").type("{downarrow}{downarrow}{downarrow}{enter}");
    cy.get("input[type=file]").uploadFile("logo.png", "image/png");
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get('input[id="gameId"]')
      .invoke("val")
      .then(sometext => (gameId = sometext));
    cy.wait(5000);
    cy.get(".swal-button").click();
  });
  it("SELECT", () => {
    cy.visit("/admin/games");
    cy.wait(5000);
  });
  it("UPDATE", () => {
    cy.visit(`/admin/game/${gameId}`);
    cy.get("[data-cy=name]").clear();
    cy.get("[data-cy=name]").type("Nome do alterado");
    cy.get("[data-cy=value]").clear();
    cy.get("[data-cy=value]").type("12345");
    cy.get("[data-cy=btn-save]").click();
    cy.wait(5000);
    cy.get(".swal-button").click();
    cy.wait(5000);
  });
  it("ADD STOCK", () => {
    cy.visit("/admin/games");
    cy.get(`[data-cy=${gameId}] > .d-flex > .btn-outline-success`).click();
    cy.get(".swal-content__input").type("50");
    cy.wait(2000);
    cy.get(".swal-button").click();
    cy.wait(500);
    cy.get(".swal-button").click();
    cy.wait(5000);
  });
  it("DELETE", () => {
    cy.visit("/admin/games");
    cy.get(`[data-cy=${gameId}] > .d-flex > .btn-outline-danger`).click();
    cy.wait(2000);
    cy.get(".swal-button").click();
    cy.wait(5000);
  });
});
