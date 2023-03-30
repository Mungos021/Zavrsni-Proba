/// <reference types="Cypress" />

const userData = require('../fixtures/user.json');
const { loginPage } = require('../page_objects/loginPagePOM');

describe('Login page', () => {
    it('Successfull login', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')

        cy.get("input[type='email']").type(userData.userEmail);
        cy.get("input[type='password']").type(userData.password);
        cy.get("button[type='submit']").click();
    });
    it('Create new organization', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        // izvucena login funkcija u POM-u
        loginPage.login(userData.userEmail, userData.password);
        // cy.get('.klasa1').contains('') /
        cy.contains('Add New').click()
    });

    it.only('Login via API', () => {
        cy.request({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
            body: {
                email: "markoqa13@gmail.com",
                password: "Marko123",
                "g- recaptcha - response": ""
            }
        }).its('body').then((resp) => {
            cy.log(resp);
            const token = resp.token;
            window.localStorage.setItem('token', token);
        })
        cy.visit('https://cypress.vivifyscrum-stage.com');
    })

});
