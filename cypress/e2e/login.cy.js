import LoginPage from './pages/LoginPage';

describe('Login Spec', () => {
    beforeEach(() => {
        // Mock the login API call
        cy.intercept('POST', '**/usuarios/auth/login', {
            statusCode: 200,
            body: {
                token: 'fake-jwt-token',
                userId: '12345',
                msg: 'Login realizado com sucesso!'
            },
        }).as('loginRequest');
    });

    it('should login successfully with valid credentials', () => {
        LoginPage.visit();
        LoginPage.fillEmail('teste@example.com');
        LoginPage.fillPassword('password123');
        LoginPage.submit();

        cy.wait('@loginRequest');

        // Assert redirection to home page
        cy.url().should('include', '/home/clientes');

        // Assert token is saved in localStorage
        cy.window().then((window) => {
            expect(window.localStorage.getItem('tokenCliente')).to.eq('fake-jwt-token');
            expect(window.localStorage.getItem('id_cliente')).to.eq('12345');
        });
    });
});
