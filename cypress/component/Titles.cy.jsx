import React from 'react'
import { PrimaryText } from '../../src/Components/Titles'

describe('<PrimaryText />', () => {
    it('renders with correct text and styling', () => {
        const testText = 'Smoke Test Title'
        const testClass = 'text-red-500'

        cy.mount(<PrimaryText text={testText} className={testClass} />)

        cy.get('h1')
            .should('have.text', testText)
            .and('have.class', testClass)
            .and('be.visible')
    })
})
