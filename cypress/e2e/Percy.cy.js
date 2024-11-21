describe('Landing Page Test with Authorization', () => {
  it('should log in and visit the landing page', () => {
    cy.visit('http://test.bato-webdesign.net', {
      auth: {
        username: Cypress.env('USERNAME'),
        password: Cypress.env('PASSWORD'),
      }
    });
    cy.contains('Your timeless treasure');
    cy.wait(5000);
    cy.percySnapshot('Homepage test');
  });
});
