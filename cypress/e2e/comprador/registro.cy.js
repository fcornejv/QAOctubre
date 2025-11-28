// Ticketazo.com.ar
// Descripcion: Suite de pruebas automatizadas para validar el flujo de registro de compradores.
// Se testean tanto registros exitosos como distintos casos de error en la validacion de campos, 
// asegurando que el formulario responda correctamente a datos validos e invalidos.

describe('Registro de comprador - Ticketazo', () => {
  let comprador;

  before(() => {
    cy.fixture('registro-comprador').as('registroComprador').then((info) => {
      comprador = info;
    });
  });

  beforeEach(() => {
    cy.visit('https://vps-3696213-x.dattaweb.com/auth/registerUser');
    cy.contains('Registrar Cuenta').should('be.visible');
  });

  function fillForm(infoUsuario) {
    cy.get('[data-cy="input-nombres"]').type(infoUsuario.nombre);
    cy.get('[data-cy="input-apellido"]').type(infoUsuario.apellido);
    cy.get('[data-cy="input-telefono"]').type(infoUsuario.telefono);
    cy.get('[data-cy="input-dni"]').type(infoUsuario.dni);
    cy.get('[data-cy="select-provincia"]').click().type(infoUsuario.provincia);
    cy.contains('.cursor-pointer', infoUsuario.provincia).click();
    cy.get('[data-cy="select-localidad"]').click().type(infoUsuario.localidad);
    cy.contains('.cursor-pointer', infoUsuario.localidad).click();
    cy.get('[data-cy="input-fecha-nacimiento"]').click();
    cy.contains('dd').type(infoUsuario.fechaNacimiento.dia);
    cy.contains('mm').type(infoUsuario.fechaNacimiento.mes);
    cy.contains('aaaa').type(infoUsuario.fechaNacimiento.anio);
    cy.get('[data-cy="input-email"]').type(infoUsuario.email);
    cy.get('[data-cy="input-confirmar-email"]').type(infoUsuario.email);
    cy.get('[data-cy="input-password"]').type(infoUsuario.contra);
    cy.get('[data-cy="input-repetir-password"]').type(infoUsuario.contra);
  }

  it('Deberia registrar un comprador correctamente', () => {
    fillForm(comprador);
    cy.get('[data-cy="btn-registrarse"]').click();
  });

  it('No deberia registrar un comprador cuando el email es incorrecto', () => {
    fillForm({ ...comprador, email: comprador.emailError });
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-slot="error-message"]').should('be.visible');
  });

  it('No deberia registrar un comprador cuando el DNI es incorrecto', () => {
    fillForm({ ...comprador, dni: comprador.dniError });
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-slot="error-message"]').should('be.visible');
  });

  it('No deberia registrar un comprador cuando el año de nacimiento es mayor al año actual', () => {
    fillForm({ ...comprador, fechaNacimiento: { ...comprador.fechaNacimiento, anio: comprador.anioError }
    });
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.get('[data-slot="error-message"]').should('be.visible');
  });

  context('Version mobile', () => {
    beforeEach(() => {
    cy.viewport('iphone-xr');
  });

  it('Deberia registrar un comprador correctamente', () => {
    fillForm(comprador);
    cy.get('[data-cy="btn-registrarse"]').click();
  });
  });
});