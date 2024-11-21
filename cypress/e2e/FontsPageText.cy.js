function checkFontFamily(selector, expectedFont) {
  cy.get(selector).should('have.css', 'font-family').then((fontFamily) => {
    expect(fontFamily).to.contain(expectedFont);
    expect(fontFamily).to.not.equal('Heebo');
  });
}

describe('Check Helvetica Neue font for multiple elements', () => {
  before(() => {
    cy.visit('http://test.bato-webdesign.net', {
      auth: {
        username: Cypress.env('USERNAME'),
        password: Cypress.env('PASSWORD'),
      }
    });
  });

  it('Helvetica Neue', () => {
    const elementsToCheck = [
      '.hero__text',
      '.hero__subtitle',
      '.hero__author > span',
      '.story__quote-author',
      '.story__text > :nth-child(1)',
      '.story__text > :nth-child(2)',
      '.footer__copyright'
    ];

    elementsToCheck.forEach((selector) => {
      checkFontFamily(selector, 'Helvetica Neue');
    });
  });
});
