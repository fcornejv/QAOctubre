// Login con credenciales de admin
Cypress.Commands.add('loginAdmin', () => {
  cy.fixture('credenciales-login').as('credencialesLogin').then((login) => {
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login');
    cy.get('[data-cy="input-email"]').type(login.usuario_admin);
    cy.get('[data-cy="input-password"]').type(login.contra_admin);
    cy.get('[data-cy="btn-login"]').click();
  });
});

// Login con credenciales de comprador
Cypress.Commands.add('loginComprador', () => {
  cy.fixture('credenciales-login').as('credencialesLogin').then((login) => {
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login');
    cy.get('[data-cy="input-email"]').type(login.usuario_comprador);
    cy.get('[data-cy="input-password"]').type(login.contra_comprador);
    cy.get('[data-cy="btn-login"]').click();
  });
});

// Login con credenciales de organizador
Cypress.Commands.add('loginOrganizador', () => {
  cy.fixture('credenciales-login').as('credencialesLogin').then((login) => {
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login');
    cy.get('[data-cy="input-email"]').type(login.usuario_organizador);
    cy.get('[data-cy="input-password"]').type(login.contra_organizador);
    cy.get('[data-cy="btn-login"]').click();
  });
});

// Login con credenciales incorrectas
Cypress.Commands.add('loginIncorrecto', () => {
  cy.fixture('credenciales-login').as('credencialesLogin').then((login) => {
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/login');
    cy.get('[data-cy="input-email"]').type(login.usuario_incorrecto);
    cy.get('[data-cy="input-password"]').type(login.contra_incorrecto);
    cy.get('[data-cy="btn-login"]').click();
  });
});
