// BaseURL: Ticketazo.com.ar
// Descripción: Pruebas automatizadas para validar funcionalidades generales de Ticketazo.
// Incluye la carga de la página principal, funcionalidad del buscador de eventos y el cambio de tema entre modo oscuro y claro.

const urlTicketazo = 'https://vps-3696213-x.dattaweb.com/';

const setFecha = (slot, dia, mes, anio) => {
  cy.get(`[data-slot="${slot}"] [data-type="day"]`).click().type(dia);
  cy.get(`[data-slot="${slot}"] [data-type="month"]`).click().type(mes);
  cy.get(`[data-slot="${slot}"] [data-type="year"]`).click().type(anio);
};

const seleccionarOpcion = (label, opcion) => {
  cy.get(`button[aria-label="${label}"]`).click();
  cy.contains('li[role="option"]', opcion).should('be.visible').click({ force: true });
};

describe('Funciones generales - Ticketazo', () => {
  beforeEach(() => {
  cy.visit(urlTicketazo);
  });

  it('Deberia cargar correctamente la pagina principal', () => {
    cy.title().should('include', 'Ticketazo'); 
    cy.get('a > .z-0', { timeout: 10000 }).should('be.visible'); 
    cy.log('La pagina principal se cargo correctamente');
  });

  it('Verifica que el boton de Login funcione correctamente', () => {
    cy.title().should('include', 'Ticketazo'); 
    cy.get('a > .z-0', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('include', '/auth/login');
  });

  it('Debería mostrar el footer con el texto de copyright', () => {
  cy.get('footer').should('be.visible').and('contain.text', '© 2025 Ticketazo. Todos los derechos reservados.');
  });

  it('El menu de navegacion deberia estar en funcionamiento tras loguearse', () => {
    cy.loginComprador();
    cy.get('nav').should('be.visible');
    cy.get('nav a').each(($el) => {
    cy.wrap($el).should('have.attr', 'href').and('not.be.empty');
    })
  })

  it('El logo debe funcionar de manera correcta y redirigir al inicio del sitio', () => {
    cy.loginAdmin();
    cy.contains("Editar Perfil").should('be.visible').click();
    cy.wait(1000)
    cy.get('.basis-0').should('be.visible').click()
    cy.url().should('include', urlTicketazo);
    })
  })

  context('Version mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
      cy.visit(urlTicketazo);
    });

  it('Deberia cargar correctamente la pagina principal', () => {
    cy.title().should('include', 'Ticketazo'); 
    cy.contains('Ver evento').should('be.visible');
    cy.log('La pagina principal se cargo correctamente en version mobile');
  });

  it('Deberia funcionar correctamente el menu colapsable', () => {
    cy.title().should('include', 'Ticketazo'); 
    cy.get('button[aria-label="Toggle menu"]').eq(0).click();
  });
  });

context('Cambio de tema (claro/oscuro)', () => {

  beforeEach(() => {
    cy.visit(urlTicketazo);
  });

  it('Deberia empezar en modo oscuro y cambiar a modo claro', () => {
    cy.get('html').should('have.class', 'dark');
    cy.get('label[aria-label^="Switch"]').first().click();
    cy.get('html').should('have.class', 'light');
  });

  it('Deberia empezar en modo claro y cambiar a modo oscuro', () => {
    cy.get('html').then($html => {
      if (!$html.hasClass('light')) {
        cy.get('label[aria-label^="Switch"]').first().click();
      }
    });
    cy.get('html').should('have.class', 'light');
    cy.get('label[aria-label^="Switch"]').first().click();
    cy.get('html').should('have.class', 'dark');
    });
  });

describe('Filtros de busqueda', () => {

  beforeEach(() => {
    cy.visit(urlTicketazo);
  });

  it('El buscador filtra correctamente los eventos por texto', () => {
    cy.get('input[placeholder="Busca tu próxima función!"]').type('carroza');
    cy.get('[data-cy="eventos-grid"] [data-cy^="evento-card-"]').should('have.length', 1).within(() => {
    cy.get('[data-cy="evento-titulo"]').should('have.text', 'Esperando la Carroza');
    });
  });

  it('El buscador muestra 0 resultados cuando no hay coincidencias', () => {
    cy.get('input[placeholder="Busca tu próxima función!"]').clear().type('RodriTest123');
    cy.get('[data-cy="eventos-grid"] [data-cy^="evento-card-"]').should('have.length', 0);
  });

  it('Deberia filtrar por la fecha deseada', () => {
    setFecha('start-input', '01', '07', '2025');
    setFecha('end-input', '29', '07', '2025');
  });

  it('Deberia filtrar por categoria', () => {
    seleccionarOpcion('Categoría', 'Recital');
  });

  it('Deberia limpiar los filtros de manera correcta', () => {
    seleccionarOpcion('Provincia', 'Buenos Aires');
    cy.contains('button', 'Limpiar filtros').click();
  });
 });