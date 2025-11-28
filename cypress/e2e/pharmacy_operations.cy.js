describe('Pharmacy Operations Flow', () => {
    const mockFarmaciaId = 'farmacia-123';
    const mockToken = 'fake-loja-token';

    const mockProducts = [
        { _id: 'prod-1', nome: 'Paracetamol', preco: '10.00', quantidade: 100 },
        { _id: 'prod-2', nome: 'Dipirona', preco: '15.00', quantidade: 50 }
    ];

    const mockOrders = [
        { _id: 'order-1', status: 'Concluido' },
        { _id: 'order-2', status: 'Pendente' }
    ];

    beforeEach(() => {
        // Mock API responses
        cy.intercept('GET', `**/produtos/farmacia/${mockFarmaciaId}`, {
            statusCode: 200,
            body: mockProducts
        }).as('getProducts');

        cy.intercept('GET', `**/pedidos/farmacia/${mockFarmaciaId}`, {
            statusCode: 200,
            body: mockOrders
        }).as('getOrders');

        // Mock single product details for the Edit page
        cy.intercept('GET', `**/produtos/prod-1`, {
            statusCode: 200,
            body: {
                produto: {
                    _id: 'prod-1',
                    nome: 'Paracetamol',
                    nome_quimico: 'Acetaminofeno',
                    label: 'Genérico',
                    preco: 10.00,
                    quantidade: 100,
                    lote: 'L123',
                    validade: '2025-12-31',
                    imagem_url: ''
                }
            }
        }).as('getProductDetails');

        // Simulate logged-in pharmacy
        cy.window().then((window) => {
            window.localStorage.setItem('tokenLoja', mockToken);
            window.localStorage.setItem('id_farmacia', mockFarmaciaId);
        });
    });

    it('should load dashboard and navigate to edit product', () => {
        // 1. Visit Dashboard
        cy.visit('/home/lojas');

        // 2. Wait for data to load
        cy.wait(['@getProducts', '@getOrders']);

        // 3. Verify Dashboard Data
        cy.contains('Produtos em estoque').next().should('have.text', '2');
        cy.contains('Pedidos pendentes').next().should('have.text', '1');

        // 4. Navigate to Inventory (Estoque)
        cy.contains('Ver estoque').click();

        // Wait for products to load again in Estoque page
        cy.wait('@getProducts');
        cy.url().should('include', '/estoque');

        // 5. Perform Critical Action: Edit Product
        // Find the edit button for the first product and click it
        // The table renders an anchor with href='/editar-produto'
        cy.get('a[href="/editar-produto"]').first().click();

        // 6. Assert Redirection
        cy.url().should('include', '/editar-produto');

        // Verify localStorage was updated with the product ID
        cy.window().then((window) => {
            expect(window.localStorage.getItem('id_produto')).to.eq('prod-1');
        });
    });
});
