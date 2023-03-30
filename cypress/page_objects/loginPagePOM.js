class LoginPage {

    get emailinputField() {
        return cy.get("input[type='email']")
    }
    get passwordinputField() {
        return cy.get("input[type='password']")
    }
    get sumbitBtn() {
        return cy.get("button[type='submit']")
    }

    login(email, pass) {
        this.emailinputField.type(email);
        this.passwordinputField.type(pass);
        this.sumbitBtn.click();
    }
}

export const loginPage = new LoginPage();