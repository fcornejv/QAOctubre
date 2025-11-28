// Importamos dependencias
import 'cypress-file-upload';

// Importamos commands.js
import './commands';

// Ignoramos errores del frontend relacionados a 'releasePointerCapture'
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('releasePointerCapture')) {
    return false;
  }
});

// Ignoramos el error "Loading chunk failed" que ocurre en Firefox, en otro navegadores funciona correctamente.
// Este error no afecta la ejecucion real de los tests, por eso evitamos que falle.
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('Loading chunk')) {
    return false; 
  }
  return true; 
});