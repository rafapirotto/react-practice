/// <reference types="cypress" />

import { HOME_URL, TRAILERS_ROUTE } from '../../../constants';

context('MyList', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit(HOME_URL);
  });

  it('Should redirect to the "trailers" url', () => {
    cy.get('#my-list > :first-child').click();
    cy.url().should('include', TRAILERS_ROUTE);
  });
});
