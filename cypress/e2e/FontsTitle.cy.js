function checkFontFamily(selector, expectedFont) {
  cy.get(selector).should('have.css', 'font-family').then((fontFamily) => {
    expect(fontFamily).to.equal(expectedFont);
  });
}

describe('Check Didot font for multiple elements', () => {
  before(() => {
    cy.visit('http://test.bato-webdesign.net', {
      auth: {
        username: Cypress.env('USERNAME'),
        password: Cypress.env('PASSWORD'),
      }
    });
  });

  it('Didot', () => {
    const elementsToCheck = [
      '.hero__title',
      '.story__title',
      '.story__quote-text',
      '[data-section-bg="#1B1A1A"] > .collections__item-title',
      '[data-section-bg="#20182E"] > .collections__item-title',
      '[data-section-bg="#3C3D3D"] > .collections__item-title',
      '.categories__title',
      '.gallery__title' 
    ];

    elementsToCheck.forEach((selector) => {
      checkFontFamily(selector, 'Didot, serif');
    });
  });
});
