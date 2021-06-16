/// <reference types="cypress" />

import { HOME_URL, TRAILERS_ROUTE } from '../../../constants';

context('RecommendedMovies', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit(HOME_URL);
  });

  it('Should redirect to the "trailers" url', () => {
    cy.get(':nth-child(5) > #recommended-movies > :nth-child(1)').click();
    cy.url().should('include', TRAILERS_ROUTE);
  });
  it('Should redirect to the "trailers" url', () => {
    cy.get(':nth-child(6) > #recommended-movies > :nth-child(1)').click();
    cy.url().should('include', TRAILERS_ROUTE);
  });
  it('Should redirect to the "trailers" url', () => {
    cy.get(':nth-child(7) > #recommended-movies > :nth-child(1)').click();
    cy.url().should('include', TRAILERS_ROUTE);
  });
});
