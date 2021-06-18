/// <reference types="cypress" />

import { HOME_URL, TRAILERS_ROUTE } from '../../../constants';

context('ContinueWatching', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    window.localStorage.setItem('token', process.env.REACT_APP_TOKEN);
    cy.visit(HOME_URL);
  });

  describe('Clicking the first movie in the continue watching section', () => {
    it('Should redirect to the "trailers" url', () => {
      cy.get('#continue-watching > :first-child').click();
      cy.url().should('include', TRAILERS_ROUTE);
    });
  });
});
