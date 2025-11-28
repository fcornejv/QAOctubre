// BaseURL: Ticketazo.com.ar
// Descripción: Pruebas automatizadas para validar el comportamiento responsive y la funcionalidad del login
// Incluye tests en multiples resoluciones para asegurar visibilidad de botones, navegación correcta, 
// validación del formulario de login y menú hamburguesa.

const allDevices = [
  { name: 'MacBook 15', width: 1440, height: 900 },
  { name: 'iPhone 13', width: 390, height: 844 },
  { name: 'Samsung 10', width: 360, height: 760 },
  { name: 'Xiaomi 14C', width: 1800, height: 2400 },
];

context('Pantalla de login responsive + validación de botones - Ticketazo', () => {
  allDevices.forEach(device => {
    describe(`Pruebas en ${device.name}`, () => {
      beforeEach(() => {
        cy.viewport(device.width, device.height);
        cy.visit('https://ticketazo.com.ar/auth/login');
        cy.wait(500);
      });

      it('Debería mostrar el formulario de login correctamente', () => {
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button[data-cy="btn-login"]')
          .should('be.visible')
          .contains('Login', { matchCase: false });
      });

      it('Botón: ¿Olvidaste tu contraseña?', () => {
        cy.get('[data-cy="btn-forgot-password"]')
          .should('be.visible')
          .click();
        cy.url().should('include', '/auth/forgotPassword');
        cy.go('back');
      });

      it('Botón: ¿No tienes cuenta? Registrate', () => {
        cy.get('[data-cy="btn-register-user"]')
          .should('be.visible')
          .click();
        cy.url().should('include', '/auth/registerUser');
        cy.go('back');
      });

      it('Botón: ¿Querés crear tus eventos?', () => {
        cy.get('[data-cy="btn-register-client"]')
          .should('be.visible')
          .click();
        cy.url().should('include', '/auth/registerClient');
        cy.go('back');
      });

      it('Botón: Registrar con Google', () => {
        cy.get('[data-cy="btn-google-login"]')
          .should('be.visible')
          .click({ force: true });
      });
    });
  });

  const devices = [
  { name: 'iPhone 13', width: 390, height: 844 }, 
  { name: 'Samsung 10', width: 360, height: 760 },
]

devices.forEach((device) => {
  describe(`Pruebas en Home Diseño Responsivo ${device.name}`, () => {
    beforeEach(() => {
      cy.viewport(device.width, device.height);
      cy.visit('https://ticketazo.com.ar'); 
    });

    it('1 Login visible', () => {
      cy.get('.justify-end > .text-sm').should('be.visible');
    });

    it('2 verifica q el boton haga click', () => {
      cy.get('.justify-end > .text-sm').click();
    });


    it('3 Verificar que el menú hamburguesa exista', () => {
      cy.get('.p-2').should('exist');
    });

    it('4 Verificar que el menú hamburguesa se pueda abrir', () => {
      cy.get('.p-2').click(); 
    });

    it('5 Verificar que el menú de navegación esté presente', () => {
      cy.get('nav').should('be.visible');
    });


    it('6 Verificar que no haya errores 404 visibles', () => {
      cy.contains('404').should('not.exist');
    });

    it('7 footer esté presente', () => {
      cy.get('footer').should('be.visible');
    });
  });
});
});