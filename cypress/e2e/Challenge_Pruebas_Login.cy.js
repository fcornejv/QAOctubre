describe('Pruebas de Login', () => {

    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/login');
    });

    // --- Caso 1: Intentar iniciar sesión sin credenciales ---
    it('1. Login - Intento sin credenciales', () => {
        cy.log('Ingresando sin credenciales');
        
        // Clica el botón de login sin llenar los campos.
        cy.get('[data-cy="btn-login"]').click();
        
        // Verifica que el mensaje de error sea visible.
        cy.get('p')
          .contains('Correo o contraseña incorrectos')
          .should('be.visible');
    });

    // --- Caso 2: Validación de formato de Email Incorrecto ---
    it('2. Mail incorrecto - Validar formato', () => {
        
        // Escribe un email sin el '@' en el campo.
        cy.get('[data-cy="input-email"]').type('homejo5153filipx.com');
        
        // Mueve el foco al campo de contraseña para activar la validación.
        cy.get('[data-cy="input-password"]').focus();

        // Obtiene el texto del mensaje de error y verifica que coincida con el patrón.
        cy.get('div[data-slot="error-message"]')
          .invoke('text')
          .should('match', /Incluye un signo "@"|Please include an "@"/); 
    });

    // --- Caso 3: Intento con Contraseña Incorrecta (o faltante) ---
    it('3. Contraseña incorrecta - Preparación de Campos', () => {
        cy.log('Preparando campos para prueba de Contraseña Incorrecta');
        
        // Limpia y luego escribe un email válido.
        cy.get('[data-cy="input-email"]')
          .clear()
          .type('homejo5153@filipx.com');
        
        // Limpia el campo de contraseña. 
        // (Aquí faltaría el .type() de la contraseña incorrecta y el .click() final para completar la prueba).
        cy.get('[data-cy="input-password"]').clear();
    });

    // --- Caso 4: Login Exitoso (Happy Path) ---
    it('4. Login - Happy path', () => {
        
        // 1. Ingresa credenciales válidas
        // Limpia el campo y escribe el email correcto.
        cy.get('[data-cy="input-email"]')
          .clear()
          .type('homejo5153@filipx.com');
          
        // Limpia el campo y escribe la contraseña correcta.
        cy.get('[data-cy="input-password"]')
          .clear()
          .type('Admin1234*');
        
        // 2. Hace clic en el botón de Login
        cy.get('[data-cy="btn-login"]').click();
        
        // 3. Verificación de éxito (Aserción)
        // Verifica que la URL actual sea la de la página principal después del login.
        cy.url().should('eq', 'https://ticketazo.com.ar/');
    });

});