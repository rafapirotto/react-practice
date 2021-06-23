/// <reference types="cypress" />

import { HOME_URL, TRAILERS_ROUTE } from '../../../constants';

context('RecommendedMovies', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    localStorage.setItem('token', Cypress.env('token'));
    'token', process.env.REACT_APP_TOKEN;
    cy.visit(HOME_URL);
  });

  describe('Clicking the first movie in the first recommended movies section', () => {
    it('Should redirect to the "trailers" url', () => {
      cy.get(':nth-child(5) > #recommended-movies > :nth-child(1)').click();
      cy.url().should('include', TRAILERS_ROUTE);
    });
  });

  describe('Clicking the first movie in the second recommended movies section', () => {
    it('Should redirect to the "trailers" url', () => {
      cy.get(':nth-child(6) > #recommended-movies > :nth-child(1)').click();
      cy.url().should('include', TRAILERS_ROUTE);
    });
  });

  describe('Clicking the first movie in the third recommended movies section', () => {
    it('Should redirect to the "trailers" url', () => {
      cy.get(':nth-child(7) > #recommended-movies > :nth-child(1)').click();
      cy.url().should('include', TRAILERS_ROUTE);
    });
  });
});
