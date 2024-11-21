function checkFontSize(selector, expectedFontSize) {
    cy.get(selector).should('have.css', 'font-size').then((fontSize) => {
      expect(fontSize).to.equal(expectedFontSize);
    });
  }
  
  describe('Check font size for multiple elements', () => {
    before(() => {
      cy.visit('http://test.bato-webdesign.net', {
        auth: {
          username: Cypress.env('USERNAME'),
          password: Cypress.env('PASSWORD'),
        }
      });
    });
    
    // Font sizes are subject to change:
    it('Font size check', () => {
      const elementsToCheck = [
        { selector: '.hero__text', expectedFontSize: '16px' },
        { selector: '.hero__subtitle', expectedFontSize: '14px' },
        { selector: '.hero__author > span', expectedFontSize: '12px' },
        { selector: '.story__quote-author', expectedFontSize: '18px' },
        { selector: '.story__text > :nth-child(1)', expectedFontSize: '16px' },
        { selector: '.story__text > :nth-child(2)', expectedFontSize: '16px' },
        { selector: '.footer__copyright', expectedFontSize: '12px' }
      ];
  
      elementsToCheck.forEach(({ selector, expectedFontSize }) => {
        checkFontSize(selector, expectedFontSize);
      });
    });
  });
  