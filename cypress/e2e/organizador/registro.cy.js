// Ticketazo.com.ar
// Descripcion: Suite de pruebas automatizadas para validar el proceso de registro de un organizador en Ticketazo.
// Se testea el registro con y sin establecimiento propio, la validacion de email y telefono incorrectos,
// y el correcto funcionamiento del formulario en version mobile.

describe('Registro de organizador - Ticketazo', () => {
  let organizador;

before(() => {
    cy.fixture('registro-organizador').as('registroOrganizador').then((info) => {
      organizador = info;
    });
  });

  beforeEach(() => {
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/registerClient');
    cy.contains('Registrar Cliente').should('be.visible');
  });

  function fillForm(infoOrganizador) {
    cy.get('[data-cy="input-razon-social"]').type(infoOrganizador.razon_social);
    cy.get('[data-cy="input-cuit"]').type(infoOrganizador.cuit);
    cy.get('[data-cy="select-provincia"]').click().type(infoOrganizador.provincia);
    cy.contains('.cursor-pointer', infoOrganizador.provincia).click();
    cy.get('[data-cy="select-localidad"]').click().type(infoOrganizador.localidad);
    cy.contains('.cursor-pointer', infoOrganizador.localidad).click();
    cy.get('[data-cy="input-direccion"]').type(infoOrganizador.direccion);
    cy.get('[data-cy="input-telefono"]').type(infoOrganizador.telefono);
    cy.get('[data-cy="input-email"]').type(infoOrganizador.email);
    cy.get('[data-cy="input-confirmar-email"]').type(infoOrganizador.email);
    cy.get('[data-cy="input-password"]').type(infoOrganizador.contra);
    cy.get('[data-cy="input-repetir-password"]').type(infoOrganizador.repetirContra);
  }

  it('Deberia registrar un organizador sin establecimiento propio', () => {
    fillForm(organizador);
    cy.get('[data-cy="btn-registrarse"]').click();
  });

  it('Deberia registrarse y activar el switch de establecimiento propio', () => {
    fillForm(organizador);
    cy.get('[data-cy="switch-establecimiento"]').click(); 
    cy.get('[data-cy="switch-establecimiento"] input[type="checkbox"]').should('be.checked'); 
    cy.get('[data-cy="btn-registrarse"]').click();
  });

  it('No deberia registrar un organizador cuando el email es incorrecto', () => {
    fillForm({ ...organizador, email: organizador.emailError });
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-slot="error-message"]').should('be.visible');
  });

  it('No deberia registrar un organizador cuando la contraseña no coincide', () => {
    fillForm({ ...organizador, contra: organizador.contraError });
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.contains('Las contraseñas no coinciden').should('exist').should('be.visible')
  });

  it('No deberia registrar un organizador cuando el telefono es incorrecto', () => {
    fillForm({ ...organizador, telefono: organizador.telefonoError });
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-slot="error-message"]').should('be.visible');
  });
    
context('Version mobile', () => {
    beforeEach(() => {
    cy.viewport('iphone-xr');
  });

  it('Deberia registrar un comprador correctamente', () => {
    fillForm(organizador);
    cy.get('[data-cy="btn-registrarse"]').click();
  });

  it('Deberia registrarse y activar el switch de establecimiento propio', () => {
    fillForm(organizador);
    cy.get('[data-cy="switch-establecimiento"]').click(); 
    cy.get('[data-cy="switch-establecimiento"] input[type="checkbox"]').should('be.checked'); 
    cy.get('[data-cy="btn-registrarse"]').click();
  });
  });
});