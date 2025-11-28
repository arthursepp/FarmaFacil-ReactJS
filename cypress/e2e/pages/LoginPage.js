class LoginPage {
    visit() {
        cy.visit('/login/clientes');
    }

    fillEmail(email) {
        cy.get('input[type="email"]').type(email);
    }

    fillPassword(password) {
        cy.get('input[type="password"]').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default new LoginPage();
