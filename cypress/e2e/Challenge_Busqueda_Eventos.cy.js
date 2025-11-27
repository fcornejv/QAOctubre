describe('Módulo de Búsqueda de Eventos (Requiere Login)', () => {

    const loginExitoso = () => {
        cy.log('1. Iniciando proceso de Login para la prueba...');

        cy.visit('https://ticketazo.com.ar/auth/login');

        cy.get('[data-cy="input-email"]')
          .clear()
          .type('homejo5153@filipx.com');

        cy.get('[data-cy="input-password"]')
          .clear()
          .type('Admin1234*');

        cy.get('[data-cy="btn-login"]').click();
        cy.url().should('eq', 'https://ticketazo.com.ar/');

        cy.log('Login Exitoso. Listo para las pruebas de búsqueda.');
    };

    beforeEach(() => {
        loginExitoso();
    });

    it('1. Búsqueda y selección de fecha y hora para "Evento Multiple Free"', () => {
        cy.log('Iniciando prueba de flujo completo: Búsqueda -> Panel -> Adquirir -> Selección de fecha y hora.');
        
        cy.get('[placeholder="Busca tu próxima función!"]').type('Evento Multiple Free'); 
        cy.get('[data-cy="btn-ver-evento-10"]')
        .should('be.visible')
        .click(); 
        
        cy.contains('button', 'Adquirir entrada')
        .scrollIntoView() // Fuerza a Cypress a desplazar la vista hasta que el elemento sea visible
        .should('be.visible')
        .click(); 

        cy.contains('span', 'domingo, 15 de junio de 2025')
        .should('be.visible')
        .click(); 
        
        cy.contains('button', '15:00 hs', { timeout: 10000 }) 
        .should('be.visible')
        .click();
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe
        
        cy.log('Presionando el botón "Continuar con la compra"');
        cy.contains('button', 'Continuar con la compra')
          .should('be.visible')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        cy.log('Seleccionando la zona: Palco');
        cy.contains('Palco')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe



        cy.log('Seleccionando asiento: F5, 1');
        
        // Aserción: Asegurar que el mapa de asientos esté visible
        cy.get('div.flex-nowrap').should('be.visible'); 
        
        cy.contains('div.flex-nowrap', 'F5') // Localiza la fila que contiene F5
          .contains('button', '1') // Dentro de esa fila, localiza el botón con el texto '1'
          .should('be.visible')
          .click(); 
        /*
        // El asiento 1 en la F5 tiene bg-blue-500, podemos verificar su clase o el indicador.
        cy.contains('div.flex-nowrap', 'F5')
          .contains('button', '1')
          .should('have.class', 'bg-blue-500'); // Verifica que el color haya cambiado a 'Seleccionado'
*/
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe
        
        cy.contains('span', 'Comprar (1)')
        .scrollIntoView() // Fuerza a Cypress a desplazar la vista hasta que el elemento sea visible
        .should('be.visible')
        .click(); 

        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe


        /*

        cy.log('Presionando el botón "Generar Entrada Gratuita"');
        cy.contains('button', 'Generar Entrada Gratuita')
          .should('be.visible')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe


        cy.log('Presionando el botón "Ver todas las entradas"');
        cy.contains('button', 'Ver todas las entradas')
        .should('be.visible')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        cy.log('Presionando el botón "Ver entrada"');
        cy.contains('button', 'Ver entrada')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        */

        // cy.contains('Continuar con la compra').click(); 
        
        // cy.url().should('include', '/checkout'); 
    });

    it('2. Búsqueda de evento inexistente - Muestra mensaje de No encontrado', () => {
        cy.log('Prueba de búsqueda sin resultados...');

        cy.get('[placeholder="Busca tu próxima función!"]')
          .type('ZZZ_EventoInexistente_999');

    });

    it('3. Búsqueda y selección de fecha y hora para "Evento Multiple Free"-CAMPO', () => {
        cy.log('Iniciando prueba de flujo completo: Búsqueda -> Panel -> Adquirir -> Selección de fecha y hora.');
        
        cy.get('[placeholder="Busca tu próxima función!"]').type('Evento Multiple Free'); 
        cy.get('[data-cy="btn-ver-evento-10"]')
        .should('be.visible')
        .click(); 
        
        cy.contains('button', 'Adquirir entrada')
        .scrollIntoView() // Fuerza a Cypress a desplazar la vista hasta que el elemento sea visible
        .should('be.visible')
        .click(); 

        cy.contains('span', 'domingo, 15 de junio de 2025')
        .should('be.visible')
        .click(); 
        
        cy.contains('button', '15:00 hs', { timeout: 10000 }) 
        .should('be.visible')
        .click();
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe
        
        cy.log('Presionando el botón "Continuar con la compra"');
        cy.contains('button', 'Continuar con la compra')
          .should('be.visible')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        cy.log('Seleccionando la zona: Campo');
        cy.contains('Campo')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        // Localiza el botón de incrementar (+)
        const botonIncrementar = cy.get('button').contains('+');
        
        cy.log('Incrementando entradas hasta el límite (4)');
        
        // Clics para llegar a 4 entradas (asumiendo que empieza en 0 o 1)

        botonIncrementar.click(); // Cantidad: 2
        botonIncrementar.click(); // Cantidad: 3
        botonIncrementar.click(); // Cantidad: 4
        botonIncrementar.click(); // Cantidad: 4


        cy.log('Verificando que el total de 4 entradas gratuitas es $0.00');
        cy.contains('Total:') // Localiza la etiqueta "Total:"
          .parent()          // Sube al contenedor de la fila
          .should('contain', '$0.00'); // Verifica que el valor es correcto

        cy.log('Intentando comprar la 5ta entrada para probar el límite.');
        botonIncrementar.click({ force: true }); 

        // 4. Aserción de Fallo: Verificar el mensaje de límite
        cy.contains('No se permiten más de 4 entradas por persona.')
          .should('be.visible');


     cy.contains('span', 'Comprar 4 Entradas')
        .scrollIntoView() // Fuerza a Cypress a desplazar la vista hasta que el elemento sea visible
        .should('be.visible')
        .click(); 

        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        cy.log('Presionando el botón "Generar Entrada Gratuita"');
        cy.contains('button', 'Generar Entrada Gratuita')
          .should('be.visible')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe


        cy.log('Presionando el botón "Ver todas las entradas" dentro de la tarjeta específica');

        // 1. Localiza el contenedor de la tarjeta del ticket usando su data-cy
        cy.get('[data-cy="ticket-card-10"]') 
        // 2. Usar .within() para enfocar las búsquedas en este contenedor
        .within(() => {
            // 3. Buscar el botón por su texto, sabiendo que está dentro de la tarjeta ticket-card-10
            cy.contains('button', 'Ver todas las entradas')
            .should('be.visible')
            .click(); 
        });

        cy.wait(2000); // Mantenemos el wait por si la navegación es lenta


        cy.log('Presionando el botón "Ver entrada"');
        cy.contains('button', 'Ver entrada')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

    });

     it('UnHappy path - No puedes seleccionar más de 4 asientos por persona', () => {
        cy.log('Iniciando prueba de flujo completo: Búsqueda -> Panel -> Adquirir -> Selección de fecha y hora.');
        
        cy.get('[placeholder="Busca tu próxima función!"]').type('Evento Multiple Free'); 
        cy.get('[data-cy="btn-ver-evento-10"]')
        .should('be.visible')
        .click(); 
        
        cy.contains('button', 'Adquirir entrada')
        .scrollIntoView() // Fuerza a Cypress a desplazar la vista hasta que el elemento sea visible
        .should('be.visible')
        .click(); 

        cy.contains('span', 'domingo, 15 de junio de 2025')
        .should('be.visible')
        .click(); 
        
        cy.contains('button', '15:00 hs', { timeout: 10000 }) 
        .should('be.visible')
        .click();
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe
        
        cy.log('Presionando el botón "Continuar con la compra"');
        cy.contains('button', 'Continuar con la compra')
          .should('be.visible')
          .click();        
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe

        cy.log('Seleccionando la zona: Palco');
        cy.contains('Palco')
          .should('be.visible')
          .click();
        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe



        cy.log('Seleccionando asiento: F5, 1');
        
        // Aserción: Asegurar que el mapa de asientos esté visible
        cy.get('div.flex-nowrap').should('be.visible'); 
        
        cy.contains('div.flex-nowrap', 'F9') // Localiza la fila que contiene F5
          .contains('button', '1') // Dentro de esa fila, localiza el botón con el texto '1'
          .should('be.visible')
          .click(); 
        
        // El asiento 1 en la F5 tiene bg-blue-500, podemos verificar su clase o el indicador.
        cy.contains('div.flex-nowrap', 'F9')
          .contains('button', '1')
          .should('have.class', 'bg-blue-500'); // Verifica que el color haya cambiado a 'Seleccionado'

        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe
        
        cy.contains('div.flex-nowrap', 'F9') // Localiza la fila que contiene F5
          .contains('button', '2') // Dentro de esa fila, localiza el botón con el texto '1'
          .should('be.visible')
          .click(); 
        cy.contains('div.flex-nowrap', 'F9') // Localiza la fila que contiene F5
          .contains('button', '3') // Dentro de esa fila, localiza el botón con el texto '1'
          .should('be.visible')
          .click(); 
                  cy.contains('div.flex-nowrap', 'F9') // Localiza la fila que contiene F5
          .contains('button', '4') // Dentro de esa fila, localiza el botón con el texto '1'
          .should('be.visible')
          .click(); 

cy.contains('p', 'No puedes seleccionar más de 4 asientos por persona.')
  .should('be.visible');

        cy.wait(2000); // Espera 2 segundos después de escribir para que el filtro actúe



    });

});