// Ticketazo.com.ar
// Descripcion: Pruebas automatizadas para validar la edicion del perfil del Organizador en Ticketazo.
// Se testean cambios en datos personales, redes sociales, subida de imagen de perfil, validaciones de enlaces invalidos 
// y la correcta visualización y funcionamiento en version mobile.

describe('Editar perfil (Organizador) - Ticketazo', () => {
  let perfilOrganizador;

  before(() => {
    cy.fixture('editar-perfil').then((info) => {
    perfilOrganizador = info;
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.loginOrganizador();
    cy.contains('Editar Perfil').should('exist').should('be.visible').click();
    cy.url().should('include', '/editProfile');
  });

  it('Deberia estar disponible la funcion Editar Perfil en un perfil de Organizador', () => {
    cy.contains('Perfil del Establecimiento').should('be.visible');
  }); 

  it('Deberia permitir editar el nombre, usuario y telefono', () => {
    cy.get('input[aria-label="Nombre"]').eq(0).clear().type(perfilOrganizador.nombre);
    cy.get('input[aria-label="Nombre de usuario"]').eq(0).clear().type(perfilOrganizador.usuario);
    cy.get('input[aria-label="Teléfono"]').eq(0).clear().type(perfilOrganizador.telefono);
    cy.contains('button', 'Guardar Cambios').click();
    cy.contains('¡Perfil actualizado con éxito!').should('be.visible');
  }); 

  it('Deberia permitir editar la seccion de redes sociales', () => {
    cy.get('input[aria-label="LinkedIn"]').clear().type(perfilOrganizador.linkedin);
    cy.get('input[aria-label="Twitter"]').clear().type(perfilOrganizador.twitter);
    cy.get('input[aria-label="Instagram"]').clear().type(perfilOrganizador.instagram);
    cy.get('input[aria-label="TikTok"]').clear().type(perfilOrganizador.tiktok);
    cy.contains('button', 'Guardar Cambios').click();
    cy.contains('¡Perfil actualizado con éxito!').should('be.visible');
  }); 

  it('Deberia permitir subir una imagen de perfil correctamente', () => {
    cy.contains('button', 'Cargar Imagen').click();
    cy.wait(500); 
    cy.get('input[type="file"]').attachFile(perfilOrganizador.fotoPerfil);
    cy.wait(1000);
    cy.contains('button', 'Guardar Cambios').click();
    cy.contains('¡Perfil actualizado con éxito!').should('be.visible');
  }); 

  it('No deberia permitir colocar un link incorrecto en las redes sociales', () => {
    cy.get('input[aria-label="Twitter"]').clear().type(perfilOrganizador.twitterFalso);
    cy.get('input[aria-label="Instagram"]').clear().type(perfilOrganizador.instagramFalso);
    cy.contains('button', 'Guardar Cambios').click();
    cy.get('[data-slot="error-message"]').should('be.visible');
  }); 

  context('Version mobile', () => {
    beforeEach(() => {
    cy.viewport('iphone-xr');
  });

  it('Deberia permitir subir una imagen de perfil correctamente', () => {
    cy.get('button[aria-label="Toggle menu"]').eq(0).click();
    cy.get(':nth-child(4) > .pb-4').click();
    cy.contains('button', 'Cargar Imagen').click();
    cy.wait(500); 
    cy.get('input[type="file"]').attachFile(perfilOrganizador.fotoPerfil);
    cy.wait(1000);
    cy.contains('button', 'Guardar Cambios').click();
    cy.contains('¡Perfil actualizado con éxito!').should('be.visible');
  }); 
    it('Deberia permitir modificar todas las secciones del perfil correctamente', () => {
    cy.get('input[aria-label="Nombre"]').eq(0).clear().type(perfilOrganizador.nombre);
    cy.get('input[aria-label="Nombre de usuario"]').eq(0).clear().type(perfilOrganizador.usuario);
    cy.get('input[aria-label="Teléfono"]').eq(0).clear().type(perfilOrganizador.telefono);
    cy.get('input[aria-label="LinkedIn"]').clear().type(perfilOrganizador.linkedin);
    cy.get('input[aria-label="Twitter"]').clear().type(perfilOrganizador.twitter);
    cy.get('input[aria-label="Instagram"]').clear().type(perfilOrganizador.instagram);
    cy.get('input[aria-label="TikTok"]').clear().type(perfilOrganizador.tiktok);
    cy.contains('button', 'Guardar Cambios').click();
    cy.contains('¡Perfil actualizado con éxito!').should('be.visible');
  }); 
  });
});