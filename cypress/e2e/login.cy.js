describe('Alterar dados de assinantes', () => {
  it('Alterar dados de assinantes', () => {
    cy.visit('https://magical-licorice-a74288.netlify.app/#/home')

    cy.get('.login-text').click()
    cy.get('[name="email"]').type('shirleyvaltolti@gmail.com')
    cy.get('[name="password"]').type('a1s2d3f4')
    cy.get('.mat-button-content').click()

    cy.get('.edit-button').click()
    cy.get('a').click()
    cy.get('[formcontrolname="password"]').type('a1s2d3f4')
    cy.get('[formcontrolname="newPassword"]').type('202122')
    cy.get('[formcontrolname="confirmPassword"]').type('202122')
    cy.get('.save-button').click()
  
  
  })
})