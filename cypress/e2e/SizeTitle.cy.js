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
        { selector: '.hero__title', expectedFontSize: '24px' },
        { selector: '.story__title', expectedFontSize: '20px' },
        { selector: '.story__quote-text', expectedFontSize: '18px' },
        { selector: '[data-section-bg="#1B1A1A"] > .collections__item-title', expectedFontSize: '16px' },
        { selector: '[data-section-bg="#20182E"] > .collections__item-title', expectedFontSize: '16px' },
        { selector: '[data-section-bg="#3C3D3D"] > .collections__item-title', expectedFontSize: '16px' },
        { selector: '.categories__title', expectedFontSize: '22px' },
        { selector: '.gallery__title', expectedFontSize: '22px' }
      ];
  
      elementsToCheck.forEach(({ selector, expectedFontSize }) => {
        checkFontSize(selector, expectedFontSize);
      });
    });
  });
  