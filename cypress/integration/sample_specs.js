describe('Check todo', function (){
	it('check blank input box', function(){
		cy.visit('http://localhost:3000/')
		cy.get('.submit-button').click()

		// cy.pause()		this is going to pause the test like debugger

		cy.get('.input-box')
			.type('bikes')
			.should('have.value', 'bikes')
	})
})