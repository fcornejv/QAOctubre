// Ticketazo.com.ar
// Descripción: Pruebas automatizadas para validar la carga de eventos desde el perfil Organizador.
// Incluye:
// - Creacion correcta de un evento con datos validos
// - Restriccion para fechas anteriores al dia actual
// - Verificacion del evento creado en la seccion "Mis Eventos"
// - Validacion de la creacion de eventos desde dispositivo movil (iPhone XR)

describe('Carga de eventos - Ticketazo', () => {
  let evento;

  before(() => {
    cy.fixture('creacion-eventos').then((data) => {
      evento = data;
    });
  });

  beforeEach(() => {
    cy.loginOrganizador();
    cy.contains('Cargar Evento').click();
  });

  it('Deberia crear un evento de manera correcta', () => {
    cy.get('a[href="/newEvent"]').click({ force: true });
    cy.get('[data-cy="input-titulo"]').type(evento.titulo);
    cy.get('[data-type="day"]').type(evento.fechaEvento.dia);
    cy.get('[data-type="month"]').type(evento.fechaEvento.mes);
    cy.get('[data-type="year"]').type(evento.fechaEvento.año);
    cy.get('[data-cy="input-horario"] [aria-label="hora, "]').type(evento.horarioEvento.hora);
    cy.get('[data-cy="input-horario"] [aria-label="minuto, "]').type(evento.horarioEvento.minuto);
    cy.crearEvento(evento);
  });
  it('Deberia dirigirse a Mis Eventos y mostrar el evento creado anteriormente', () => {
    cy.get('a[href="/myEvents"]').click({ force: true });
    cy.contains(evento.titulo).should('be.visible');
  });
  it('No deberia crear un evento si la fecha es anterior al dia actual', () => {
    cy.get('a[href="/newEvent"]').click({ force: true });
    cy.get('[data-cy="input-titulo"]').type(evento.titulo);
    cy.get('[data-type="day"]').type(evento.fechaEventoError.dia);
    cy.get('[data-type="month"]').type(evento.fechaEventoError.mes);
    cy.get('[data-type="year"]').type(evento.fechaEventoError.año);
    cy.contains('La fecha debe ser al menos 24 horas a partir de hoy.').should('be.visible');
    cy.wait(300);
  });
context('Version mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

  it('Deberia crear un evento de manera correcta', () => {
    cy.get('a[href="/newEvent"]').click({ force: true });
    cy.get('[data-cy="input-titulo"]').type(evento.titulo);
    cy.get('[data-type="day"]').type(evento.fechaEvento.dia);
    cy.get('[data-type="month"]').type(evento.fechaEvento.mes);
    cy.get('[data-type="year"]').type(evento.fechaEvento.año);
    cy.get('[data-cy="input-horario"] [aria-label="hora, "]').type(evento.horarioEvento.hora);
    cy.get('[data-cy="input-horario"] [aria-label="minuto, "]').type(evento.horarioEvento.minuto);
    cy.crearEvento(evento);
    });
  });
});