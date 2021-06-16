/// <reference types="cypress" />

import { HOME_URL, MY_LIST_URL } from '../../constants';

context('MyList', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit(MY_LIST_URL);
  });

  it('Should redirect to the homepage', () => {
    cy.get('#logo-btn').click();
    cy.url().should('eq', HOME_URL);
  });
  it('Should redirect to the homepage', () => {
    cy.get('#home-btn').click();
    cy.url().should('eq', HOME_URL);
  });
  it('Should redirect to the homepage', () => {
    cy.get('#movies-btn').click();
    cy.url().should('eq', HOME_URL);
  });
  it('Should redirect to the homepage', () => {
    cy.get('#series-btn').click();
    cy.url().should('eq', HOME_URL);
  });
  it('Should redirect to the homepage', () => {
    cy.get('#recently-added-btn').click();
    cy.url().should('eq', HOME_URL);
  });
  it('Should redirect to the "my-list" url', () => {
    cy.get('#my-list-btn').click();
    cy.url().should('eq', MY_LIST_URL);
  });
});
