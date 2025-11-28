describe('User Profile Flow', () => {
    const mockUser = {
        id: '12345',
        nome: 'João da Silva',
        email: 'joao@example.com',
        telefone: '11999999999',
        senha: 'encrypted_password'
    };

    beforeEach(() => {
        // Mock the API response for fetching user data
        cy.intercept('GET', '**/usuarios/*', {
            statusCode: 200,
            body: {
                user: mockUser
            }
        }).as('getUser');

        // Simulate a logged-in user by setting localStorage
        cy.window().then((window) => {
            window.localStorage.setItem('tokenCliente', 'fake-jwt-token');
            window.localStorage.setItem('id_cliente', mockUser.id);
        });
    });

    it('should display user profile information correctly', () => {
        // Visit the profile page directly
        cy.visit('/configuracoes/clientes');

        // Wait for the user data to be fetched
        cy.wait('@getUser');

        // Assert that the page title is visible
        cy.contains('h1', 'Minhas Configurações').should('be.visible');

        // Assert User Name
        // Finding the label "Nome Completo" and asserting the value in the same container
        cy.contains('p', 'Nome Completo')
            .parent()
            .find('p.text-gray-800')
            .should('contain.text', mockUser.nome)
            .and('be.visible');

        // Assert User Email
        cy.contains('p', 'E-mail')
            .parent()
            .find('p.text-gray-800')
            .should('contain.text', mockUser.email)
            .and('be.visible');
    });
});
