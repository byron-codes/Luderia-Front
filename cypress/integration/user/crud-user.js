describe("Usuário", () => {
    it("CREATE", () => {
        cy.visit("/register")
        cy.get('[data-cy=name]').type("Nome do usuário")
        cy.get('[data-cy=email]').type("user@gmail.com")
        cy.get('[data-cy=nickname]').type("nickNomin")
        cy.get('[data-cy=cpf]').type("11111111111")
        cy.get('[data-cy=password]').type("qwer1234")
        cy.get('[data-cy=confirmPassword]').type("qwer1234")
        cy.get('[data-cy=btn-save]').click()
        cy.get('.swal-button').click()
    })
    // it("UPDATE", () => {
    //     cy.visit("/register")
    //     cy.get('[data-cy=name]').type("Nome do usuário")
    //     cy.get('[data-cy=email]').type("user@gmail.com")
    //     cy.get('[data-cy=cpf]').type("11111111111")
    //     cy.get('[data-cy=password]').type("qwer1234")
    //     cy.get('[data-cy=confirmPassword]').type("qwer1234")
    //     cy.get('[data-cy=btn-update]').click()
    //     cy.get('.swal-button').click()
    // })
});
