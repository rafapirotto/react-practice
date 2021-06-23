/// <reference types="cypress" />

import { HOME_URL, MY_LIST_URL } from '../../../constants';

context('Header', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    localStorage.setItem('token', Cypress.env('token'));
    'token', process.env.REACT_APP_TOKEN;
    cy.visit(HOME_URL);
  });

  describe('Clicking in logo button', () => {
    it('Should redirect to the homepage', () => {
      cy.get('#logo-btn').click();
      cy.url().should('eq', HOME_URL);
    });
  });

  describe('Clicking in home button', () => {
    it('Should redirect to the homepage', () => {
      cy.get('#home-btn').click();
      cy.url().should('eq', HOME_URL);
    });
  });

  describe('Clicking in movies button', () => {
    it('Should redirect to the homepage', () => {
      cy.get('#movies-btn').click();
      cy.url().should('eq', HOME_URL);
    });
  });

  describe('Clicking in series button', () => {
    it('Should redirect to the homepage', () => {
      cy.get('#series-btn').click();
      cy.url().should('eq', HOME_URL);
    });
  });

  describe('Clicking in recently added button', () => {
    it('Should redirect to the homepage', () => {
      cy.get('#recently-added-btn').click();
      cy.url().should('eq', HOME_URL);
    });
  });

  describe('Clicking in my list button', () => {
    it('Should redirect to the "my-list" url', () => {
      cy.get('#my-list-btn').click();
      cy.url().should('eq', MY_LIST_URL);
    });
  });
});
