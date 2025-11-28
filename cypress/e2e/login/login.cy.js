// Ticketazo.com.ar
// Descripcion: Pruebas automatizadas para validar el flujo de inicio de sesion en Ticketazo, 
// cubriendo distintos roles de usuario (Comprador, Organizador, Admin) y validacion de credenciales invalidas. 
// Incluye tambien pruebas especificas para version mobile.

const loginTicketazo = 'https://vps-3696213-x.dattaweb.com/auth/login'

describe('Pruebas de login - Ticketazo', () => {
  it('Deberia iniciar sesion correctamente (Comprador)', () => {
    cy.loginComprador();
    cy.contains('Mi perfil').should('be.visible');
  });

  it('Deberia iniciar sesion correctamente (Organizador)', () => {
    cy.loginOrganizador();
    cy.contains('Editar Perfil').should('be.visible');
  });

  it('Deberia iniciar sesion correctamente (Administrador)', () => {
    cy.loginAdmin();
    cy.contains('Editar Perfil').should('be.visible');
  });

  it('Deberia realizar un Login correctamente y luego un Logout', () => {
    cy.loginComprador();
    cy.contains('button', 'Logout').should('be.visible').click();
    cy.contains('button', 'Login').should('be.visible');
  });
  
  it('No deberia permitir iniciar sesion con credenciales incorrectas', () => {
    cy.loginIncorrecto();
    cy.contains('Correo o contraseña incorrectos').should('be.visible');
    cy.url().should('include', '/auth/login');
  });

  it('Deberia permitir solicitar recuperacion de contraseña', () => {
    cy.visit(loginTicketazo);
    cy.get('[data-cy="btn-forgot-password"]').click(); 
    cy.url().should('include', '/auth/forgotPassword');
    cy.get('[data-cy="input-email"]').type('recuperar@ticketazo.com.ar');
    cy.get('[data-cy="btn-enviar"]').click();
    cy.contains('Se ha enviado un correo para restablecer la contraseña').should('be.visible');
  });

  it('Correcto funcionamiento del login con boton de Google', () => {
    cy.visit(loginTicketazo);
    cy.get('[data-cy="btn-google-login"]').click();
  });

  context('Version mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    it('Deberia iniciar sesión y mostrar eventos', () => {
      cy.loginAdmin();
      cy.contains('Ver evento').should('be.visible');
    });
    
    it('No deberia permitir iniciar sesion con credenciales incorrectas', () => {
    cy.loginIncorrecto();
    cy.contains('Correo o contraseña incorrectos').should('be.visible');
    cy.url().should('include', '/auth/login');
  });
  });
});


