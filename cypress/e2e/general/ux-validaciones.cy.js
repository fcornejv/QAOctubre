// BaseURL: Ticketazo.com.ar
// Descripción: Pruebas automatizadas para validar de usabilidad (UX) en el footer.
// El objetivo de estos tests es confirmar que ciertas características del footer 
// (confirmar el comportamiento actual).Esto crea una "línea base" para que si en 
// el futuro alguien añade los enlaces, estos tests fallarán, alertando de que la 
// funcionalidad ha cambiado y hay que actualizar las pruebas.

describe('Validación de Mejoras de Usabilidad (UX) en el Footer', () => {
  beforeEach(() => {
    cy.visit('/');
    // Nos aseguramos de que el footer esté visible antes de cada prueba
    cy.get('footer').scrollIntoView().should('be.visible');
  });

  it('[UX-001] Debería confirmar que el email del footer es texto plano y NO un enlace', () => {
    // Este test PASA si el email NO es un enlace. Documenta la realidad.
    cy.get('footer')
      .contains('Email: info@ticketazo.com')
      .should('be.visible');

    // Aserción clave: Verificamos que DENTRO del footer, NO exista un enlace <a> con ese texto.
    cy.get('footer').find('a[href^="mailto:"]').should('not.exist');

    cy.log('Confirmado: El email del footer no es un enlace clicable.');
  });

  it('[UX-002] Debería confirmar la ausencia de enlaces a redes sociales comunes', () => {
    // Este test PASA si los enlaces NO existen.
    cy.get('footer').find('a[href*="instagram.com"]').should('not.exist');
    cy.get('footer').find('a[href*="facebook.com"]').should('not.exist');
    cy.get('footer').find('a[href*="twitter.com"]').should('not.exist');

    cy.log('Confirmado: No se encontraron enlaces a redes sociales en el footer.');
  });
});