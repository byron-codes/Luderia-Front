describe("Coupon", () => {
    it("CREATE", () => {
        cy.visit("/admin/coupon")
        cy.get('[data-cy=name]').type("Nome do cupom")
        cy.get('[data-cy=expirationDate]').type("2020-01-01")
        cy.get('[data-cy=quantity]').type("10")
        cy.get('[data-cy=value]').type("25")
        cy.get('[data-cy=description]').type("25")
        cy.get('[data-cy=code]').type("TES25T")
        cy.get('[data-cy=btn-save]').click()
        cy.get('.swal-button').click()
    })
    it("READ", () => {
        cy.visit("/admin/coupons")
    })
    it("UPDATE", () => {
        cy.visit("/admin/coupons")
    })
    it("DELETE", () => {
        cy.visit("/admin/coupons")
    })
});
