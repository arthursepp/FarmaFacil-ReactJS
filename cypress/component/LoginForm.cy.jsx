import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import LoginClientes from '../../src/Pages/auth/Clientes/LoginClientes'

describe('<LoginClientes /> (LoginForm)', () => {
    it('handles input typing and validation', () => {
        cy.mount(
            <MemoryRouter>
                <LoginClientes />
            </MemoryRouter>
        )

        // Test typing using robust selectors
        cy.get('input[type="email"]').type('test@example.com')
        cy.get('input[type="email"]').should('have.value', 'test@example.com')

        cy.get('input[type="password"]').type('password123')
        cy.get('input[type="password"]').should('have.value', 'password123')
    })

    it('prevents submission with empty fields', () => {
        // Stub window.alert
        const alertStub = cy.stub().as('alertStub')
        cy.on('window:alert', alertStub)

        cy.mount(
            <MemoryRouter>
                <LoginClientes />
            </MemoryRouter>
        )

        // Submit the form
        cy.get('form').submit()

        // Assert validation alert
        cy.get('@alertStub').should('have.been.calledWith', 'Email e senha são obrigatórios!')
    })
})
