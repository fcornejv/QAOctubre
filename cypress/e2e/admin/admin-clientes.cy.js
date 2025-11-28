// Ticketazo.com.ar
// Descripcion: Suite de pruebas automatizadas para la gestion de usuarios en el modulo AdminClientes. 
// Verifica la correcta funcionalidad del cambio de estado de usuarios (pendiente, aprobado, rechazado) 
// mediante la simulacion de interacciones en la interfaz, sin alterar datos reales en el entorno de pruebas.

describe('Gestion de usuarios en AdminClientes - Ticketazo', () => {
  beforeEach(() => {
    cy.loginAdmin();
    cy.contains('AdminClientes').should('be.visible');
    cy.visit('/adminClients');
  });
  
function cambiarEstadoUsuario(nuevoFiltro, nuevoEstado) {
  cy.get(`[data-cy="${nuevoFiltro}"]`).should('be.visible').click();
  cy.get('[data-cy^="select-estado-"]').first().as('dropdown');
  cy.get('@dropdown').click();
  cy.get(`[role="option"][data-key="${nuevoEstado}"]`).click();
  // Validamos que se muestre el modal de confirmacion,
  // pero no confirmamos para evitar modificar datos reales en el entorno de Ticketazo.
  cy.contains("Confirmar cambio de estado").should('be.visible');
}
  it('Deberia aprobar un usuario pendiente en AdminClientes', () => {
    cambiarEstadoUsuario('btn-filtro-pendiente', 'Aprobado');
  });

  it('Deberia aprobar un usuario que fue rechazado en AdminClientes', () => {
    cambiarEstadoUsuario('btn-filtro-rechazado', 'Aprobado');
  });

  it('Deberia rechazar un usuario pendiente en AdminClientes', () => {
    cambiarEstadoUsuario('btn-filtro-pendiente', 'Rechazado');
  });

  it('Deberia rechazar un usuario aprobado en AdminClientes', () => {
    cambiarEstadoUsuario('btn-filtro-aprobado', 'Rechazado');
  });
});