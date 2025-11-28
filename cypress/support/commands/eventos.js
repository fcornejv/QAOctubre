Cypress.Commands.add('crearEvento', (evento) => {
  cy.get('[data-cy="select-edad"]').click();
  cy.get('[data-cy="option-edad-ATP"]').click();
  cy.get('[data-cy="select-genero"]').click();
  cy.get('[data-cy="option-genero-Fiesta"]').click();

  cy.get('[data-cy="input-duracion"] [data-type="hour"]').type(evento.duracionEvento.hora);
  cy.get('[data-cy="input-duracion"] [data-type="minute"]').type(evento.duracionEvento.minuto);

  cy.get('[data-cy="select-lugar-evento"]').click();
  cy.get('[role="option"]').contains('Otro').click()

  cy.get('[data-cy="input-nombre-lugar"]').type(evento.otro.nombre);
  cy.get('[data-cy="input-calle-lugar"]').type(evento.otro.calle);
  cy.get('[data-cy="input-altura-lugar"]').type(evento.otro.altura);
  cy.get('[data-cy="input-codigo-postal-lugar"]').type(evento.otro.cp);
  cy.get('input[name="provincia"]').click().type(evento.otro.provincia);
  cy.contains('[role="option"]', evento.otro.provincia).click();
  cy.get('input[aria-label="Localidad"]').click().type(evento.otro.provincia);
  cy.contains('[role="option"]', evento.otro.provincia).click();
  cy.get('[data-cy="input-info"]').type(evento.descripcion);

  cy.contains('button', 'Siguiente').click();
  cy.wait(200);
  cy.get('button[data-slot="trigger"]').eq(0).click(); 
  cy.get('[role="option"]').contains('General').click();
  cy.get('[aria-label="Capacidad"]').type(evento.capacidad_entrada)
  cy.get('[aria-label="Precio Entrada"]').type(evento.precio_entrada)
  cy.contains('button', 'Siguiente').click()
  cy.contains('Cargar Imagen Evento').should('exist').click();
  cy.get('input[type="file"]').attachFile('evento.jpg');
  cy.wait(300);
  cy.contains('button', 'Siguiente').click();
  cy.contains('button', 'Confirmar').click()
  cy.contains('Evento creado con éxito').should('be.visible')
  cy.wait(500);
});