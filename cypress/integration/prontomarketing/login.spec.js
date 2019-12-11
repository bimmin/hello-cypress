describe('Login',() => {
  it('should redirect to google', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').as('searchInput')
    cy.get('@searchInput').type('HelloWorld')
    cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click()
  })
})
