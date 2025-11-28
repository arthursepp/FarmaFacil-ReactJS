import React from 'react'

const SimpleButton = () => <button>Hello</button>

describe('<SimpleButton />', () => {
    it('renders', () => {
        cy.mount(<SimpleButton />)
        cy.get('button').should('have.text', 'Hello')
    })
})
