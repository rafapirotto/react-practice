/// <reference types="cypress" />

import { HOME_URL, TRAILERS_ROUTE } from '../../../constants';

context('MostViewed', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    localStorage.setItem('token', Cypress.env('token'));
    cy.visit(HOME_URL);
  });

  describe('Clicking the first movie in the most viewed section', () => {
    it('Should redirect to the "trailers" url', () => {
      cy.get('#most-viewed > :first-child').click(10, 10);
      cy.url().should('include', TRAILERS_ROUTE);
    });
  });
});
