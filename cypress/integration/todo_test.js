describe('Check todo', function (){
	it('check blank input box', function(){
		cy.visit('http://localhost:3000/')
		cy.get('.input-box')
			.type('bikes')
			.should('have.value', 'bikes')
		
		cy.get('.submit-button').click()

		// cy.pause()		this is going to pause the test like debugger

		

		cy.get('.list-item')
			.should('have.text', 'bikesX')

		cy.get('.input-box')
			.type('cycle')
			.should('have.value', 'cycle')
		
		cy.get('.submit-button').click()

		cy.get('#close').click()

		cy.get('.list-item')
			.should('have.text', '')
	})
})