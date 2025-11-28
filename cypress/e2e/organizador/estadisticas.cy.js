// Ticketazo.com.ar
// Descripcion: Pruebas automatizadas para la seccion "Estadisticas" del perfil Organizador.
// Valida:
// - Visualizacion correcta de graficos de tickets vendidos por fecha y por tipo.
// - Exportacion de estadisticas en formato CSV y TXT para un evento específico.

describe('Estadisticas (Organizador) - Ticketazo', () => {

beforeEach( () => {
  cy.loginOrganizador();
  cy.contains('Estadisticas').should('be.visible').click();
  cy.url().should('include', '/stadistics');
  cy.get('[data-cy="select-filtro-lugar"]').click();
  cy.get('[role="option"]').contains('RM Eventos').click();
  cy.get('[data-cy="evento-card-186"]').click();
});

it('Deberia renderizar el grafico de tickets vendidos', () => {
  cy.contains('Tickets vendidos por fecha').should('exist');
  cy.get('canvas').should('be.visible');
});

it('Deberia renderizar el grafico de tickets vendidos por tipo', () => {
  cy.contains('Ticket vendidos por tipo').should('exist');
  cy.get('canvas').should('be.visible');
});

it('Deberia exportar correctamente el CSV de estadisticas', () => {
  const nombreArchivo = 'estadisticas_evento_186.csv';
  const ruta = `${Cypress.config('downloadsFolder')}/${nombreArchivo}`;

  cy.contains('Exportar a CSV').click();
  cy.readFile(ruta, { timeout: 10000 }).should('exist').and('include', 'Tickets'); 
});

it('Deberia exportar correctamente el TXT de estadisticas', () => {
  const archivo = 'estadisticas_evento_186.txt';
  const ruta = `${Cypress.config('downloadsFolder')}/${archivo}`;

  cy.contains('Exportar a Texto plano').click();
  cy.readFile(ruta, { timeout: 10000 }).should('exist').and('include', 'Tickets vendidos'); 
});
});
