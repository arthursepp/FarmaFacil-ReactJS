import React from 'react'
import { ProductCard } from '../../src/Components/Containers'

describe('<ProductCard />', () => {
    it('renders with correct props and handles click', () => {
        const props = {
            nomeProduto: 'Medicine X',
            descricaoProduto: 'Pain reliever',
            precoProduto: '50.00',
            onClick: cy.spy().as('onClickSpy')
        }

        cy.mount(<ProductCard {...props} />)

        // Assertions
        cy.contains('Medicine X').should('be.visible')
        cy.contains('Pain reliever').should('be.visible')
        cy.contains('R$ 50.00').should('be.visible')

        // Click interaction
        cy.contains('button', 'Comprar').click()
        cy.get('@onClickSpy').should('have.been.called')
    })
})
