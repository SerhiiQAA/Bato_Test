describe('Landing Page Test with Authorization', () => {
  it('should log in and visit the landing page', () => {
    cy.visit('http://test.bato-webdesign.net', {
      auth: {
        username: Cypress.env('USERNAME'),
        password: Cypress.env('PASSWORD'),
      }
    });
    
    cy.contains('Your timeless treasure'); 
    cy.get('.hero__icon > img').click();
    cy.get('#popup-video > .popup__inner').should('be.visible');   
    cy.get('#popup-video video').should('have.prop', 'paused', false);
    cy.get('#popup-video .popup__close').click();
    cy.get('#popup-video > .popup__inner').should('not.be.visible');
  });
});


