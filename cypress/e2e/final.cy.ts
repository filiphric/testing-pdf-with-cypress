
it('downloads a simple PDF file', () => {

  cy.visit('/')

  cy.contains('simple.pdf')
    .click()

  cy.readFile('cypress/downloads/simple.pdf', 'utf8')
  cy.task('readPdf', 'cypress/downloads/simple.pdf')

});

it('downloads a complex PDF file', () => {

  cy.visit('/')

  cy.contains('complex.pdf')
    .click()

  cy.readFile('cypress/downloads/complex.pdf')
  cy.task('readPdf', 'cypress/downloads/complex.pdf')

});
