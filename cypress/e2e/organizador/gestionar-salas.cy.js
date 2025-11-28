// BaseURL: Ticketazo.com.ar
// Descripcion: Pruebas automatizadas para la seccion "Gestionar Salas" del perfil Organizador.
// Valida la creacion de salas con nombre, multiples secciones, y la restriccion ante campos requeridos vacíos.

beforeEach( () => {
  cy.loginOrganizador();
  cy.contains('Gestionar Salas').should('be.visible').click();
});

describe('Gestionar salas (Organizador) - Ticketazo', () => {
  it('Deberia permitir crear una sala correctamente', () => {
    cy.get('[data-cy="input-nombre-sala"]').type('Nueva sala prueba');
    cy.get('[data-cy="btn-guardar-layout"]').click();
    cy.get('section[role="dialog"]').within(() => {
    cy.contains('button', 'Guardar').click();
  });
    cy.contains('Sala guardada con éxito.').should('be.visible');
  });
  it('No deberia permitir crear una sala sin nombre', () => {
    cy.get('[data-cy="input-nombre-sala"]');
    cy.get('[data-cy="btn-guardar-layout"]').click();
    cy.contains('Nombre requerido').should('be.visible');
  })
  it('Deberia permitir crear una sala con varias secciones', () => {
    cy.get('[data-cy="input-nombre-sala"]').type('Nueva sala prueba 2');
    cy.get('[data-cy="btn-nueva-seccion"]').click();
    cy.get('[data-cy="select-seccion"]').invoke('text').should('not.contain', 'General');
    cy.get('[data-cy="btn-guardar-layout"]').click();
    cy.get('section[role="dialog"]').within(() => {
    cy.contains('button', 'Guardar').click();
  });
    cy.contains('Sala guardada con éxito.').should('be.visible');
  })
});