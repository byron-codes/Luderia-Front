describe("Report", () => {
    it("Report", () => {
      cy.visit("/admin/reports");
      cy.wait(2000);
      cy.get("[data-cy=startDate]").type("2020-07-01");
      cy.get("[data-cy=endDate]").type("2020-07-31");
      cy.get("[data-cy=btn-report]").click();
      cy.wait(3000);
      cy.scrollTo('bottom');
      cy.wait(3000);
      cy.scrollTo('top');
      cy.wait(1000);
      cy.get("[data-cy=startDate]").type("2020-01-01");
      cy.get("[data-cy=endDate]").type("2020-12-31");
      cy.get("[data-cy=reportType]").click();
      cy.get("[data-cy=reportType]").type(
        "{downarrow}{downarrow}{enter}"
      );
      cy.get("[data-cy=btn-report]").click();
      cy.wait(3000);
      cy.scrollTo('bottom');
      cy.wait(3000);
      cy.scrollTo('top');
      cy.wait(1000);
      cy.get("[data-cy=startDate]").type("2019-01-01");
      cy.get("[data-cy=endDate]").type("2021-12-31");
      cy.get("[data-cy=reportType]").click();
      cy.get("[data-cy=reportType]").type(
        "{downarrow}{downarrow}{downarrow}{enter}"
      );
      cy.get("[data-cy=btn-report]").click();
      cy.wait(3000);
      cy.scrollTo('bottom');
    });
  });
  