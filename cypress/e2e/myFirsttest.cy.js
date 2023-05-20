describe('Test suite', () => {
  it('test1', () => {
    //steps
    cy.visit('http://www.openrangesoftware.com/');
    cy.title().should('eq', 'Open Range Software');
  });
});
