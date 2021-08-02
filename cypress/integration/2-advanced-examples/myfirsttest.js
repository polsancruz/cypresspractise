/// <reference types="cypress" />
describe("Facebook test cases", function () {

    // before(() => {
    //     cy.viewport('iphone-6') // Set viewport to 375px x 667px 



    //   })

    before(() => {
        cy.viewport('iphone-6') // Set viewport to 375px x 667px 

    })

    beforeEach(() => {
        cy.visit('https://www.facebook.com/')



    })


    it("Login test invalid email and password", function () {

        cy.get('[data-testid=royal_email]').clear();
        cy.get('[data-testid=royal_email]').type('anis@abc.com');
        cy.get('[data-testid=royal_pass]').clear();
        cy.get('[data-testid=royal_pass]').type('sadkhfk2342');
        cy.get('[data-testid=royal_login_button]').click();
        cy.get('.phl > :nth-child(1)').should('have.text', 'There was a problem with this request. We\'re working on getting it fixed as soon as we can.');
    })

    it("Login test valid email and valid password", function () {
        cy.get('[data-testid=royal_email]').clear();
        cy.get('[data-testid=royal_email]').type('validemail@gmail.com');
        cy.get('[data-testid=royal_pass]').clear();
        cy.get('[data-testid=royal_pass]').type('validpassword');
        cy.get('[data-testid=royal_login_button]').click();
    })

})