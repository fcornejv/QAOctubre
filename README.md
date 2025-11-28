<div align = center>

# 🎫 Ticketazo - Proyecto de QA Automation
## Grupo N°5 - XAcademy QA Automation

<p align="center">
  <a href="https://ticketazo.com.ar/"><img alt="Ticketazo Logo para GitHub" src="assets/ticketazo.png" width="200" /></a>
</p>

![Cypress badge](https://img.shields.io/badge/Hecho%20con-Cypress-B8E0D2?style=flat&logo=cypress&logoColor=white)
![Trello badge](https://img.shields.io/badge/Bugs%20en-Trello-98C9E2?style=flat&logo=trello&logoColor=white)
![Estado badge](https://img.shields.io/badge/Estado-Completado-0a700c?style=flat&logoColor=black)
![Entrega badge](https://img.shields.io/badge/Entrega-27%20de%20noviembre%202025-F38181?style=flat&logoColor=black)

Desarrollo de pruebas funcionales y automatizadas sobre la plataforma [Ticketazo](https://ticketazo.com.ar). Este repositorio incluye todos los entregables requeridos según los criterios definidos para el challenge final.

</div>

---
### 📋 Descripción del proyecto

Este proyecto forma parte de **XAcademy QA Automation** y tiene como objetivo poner en práctica competencias clave en testing de software:

- **Elaboración de planes de prueba** detallados y estructurados
- **Automatización de casos funcionales** críticos con **Cypress**
- **Aplicación de buenas prácticas** de reporte de defectos
- **Gestión efectiva de bugs** utilizando metodologías ágiles con **Trello**
- **Testing exploratorio** y **análisis de usabilidad** en entornos reales

## 🎯 Objetivo

Aplicar conocimientos de QA manual y automatizado, desarrollando un plan de pruebas completo y casos automatizados usando Cypress, junto con una correcta gestión de defectos en Trello.

## 📦 Entregables

| 📌 Entregable    | 🔗 URL                                                                |
|------------|------------------------------------------------------------------------------|
| **Reporte de bugs** | [![Trello Board](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)](https://trello.com/b/bKNzHIV2/qa-automation-exam) |
| **Plan de pruebas** | [![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://docs.google.com/spreadsheets/d/1My45HQCwOKUeVVNjc_WwtPzsJd4nkPJH/edit?gid=1316234008#gid=1316234008) |
| **Repositorio**         | [![GitHub](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)](https://github.com/fcornejv/QAOctubre/tree/main) |

## 👥 Equipo

Este trabajo fue posible gracias al trabajo colaborativo de nuestro equipo:

| Nombre y Apellido             | Usuario en GitHub     | Perfil de GitHub                                                                                                                              |
| ----------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Frank Pedro Cornejo Valencia | ``           | [![GitHub Badge](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)]() |
| Sandy Alvarez | ``           | [![GitHub Badge](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)]() |
| jonathan_avila10 | `` | [![GitHub Badge](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)]() |
| Angelo | ``           | [![GitHub Badge](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)]() |
| Nicolás Montenegro | `pachenico-pixel`           | [![GitHub Badge](https://img.shields.io/badge/GitHub-121011?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pachenico-pixel) |

## 🧪 Casos de Prueba Automatizados

El proyecto incluye **más de 20 casos de prueba automatizados** que cubren las funcionalidades críticas de Ticketazo:

### 🔐 **Módulo de Autenticación**
- ✅ Login exitoso para diferentes roles (Comprador, Organizador, Admin)
- ✅ Validación de credenciales incorrectas
- ✅ Funcionalidad de logout
- ✅ Recuperación de contraseña
- ✅ Compatibilidad con dispositivos móviles

### 👤 **Registro de Usuarios**
- ✅ Registro exitoso de compradores
- ✅ Registro exitoso de organizadores
- ✅ Validación de campos requeridos
- ✅ Manejo de errores en formularios
- ✅ Activación de opciones avanzadas (establecimiento propio)

### 🎟️ **Gestión de Entradas**
- ✅ Compra de entradas individuales y múltiples
- ✅ Visualización de códigos QR
- ✅ Transferencia de entradas entre usuarios
- ✅ Validación de emails en transferencias
- ✅ Gestión de entradas gratuitas

### 👥 **Administración de Usuarios**
- ✅ Filtrado por estado de usuarios (pendiente, aprobado, rechazado)
- ✅ Cambio de estado de usuarios
- ✅ Confirmación de cambios administrativos

### 🌐 **Funcionalidades Generales**
- ✅ Navegación y carga de página principal
- ✅ Funcionalidad del buscador de eventos
- ✅ Cambio de tema (modo claro/oscuro)
- ✅ Validación de elementos del footer

## 🚀 Instalación y configuración

### 📋 Precondiciones

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**
- **Git**
- **Navegador** compatible (Chrome, Firefox, Edge)

### ⚡ Inicio rápido

```bash
# Clonar el repositorio
git clone https://github.com/fcornejv/QAOctubre/tree/main

# Navegar al directorio del proyecto
cd QAOctubre

# Instalar dependencias
npm install

# Ejecutar todas las pruebas en modo headless
npx cypress run

# Abrir Cypress Test Runner (modo interactivo)
npx cypress open

# Ejecutar pruebas específicas
npx cypress run --spec "cypress/e2e/login/login.cy.js"

# Ejecutar pruebas por módulo
npx cypress run --spec "cypress/e2e/admin/**"
npx cypress run --spec "cypress/e2e/comprador/**"
npx cypress run --spec "cypress/e2e/organizador/**"
```

### ⚙️ Configuración de Cypress

El proyecto está configurado con los siguientes parámetros optimizados:

```javascript
// cypress.config.js
{
  baseUrl: 'https://vps-3696213-x.dattaweb.com/',
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 8000,
  requestTimeout: 10000,
  responseTimeout: 15000
}
```

---

### 📁 Estructura del proyecto

```
proyecto-qa-ticketazo/
├── cypress/
│   ├── e2e/                     # Tests end-to-end principales
│   │   ├── admin/               # Tests de administración
│   │   │   └── admin-clientes.cy.js  # Gestión de usuarios
│   │   ├── comprador/           # Tests del flujo de comprador
│   │   │   ├── comprar-entrada.cy.js  # Proceso de compra
│   │   │   └── registro.cy.js         # Registro de comprador
│   │   ├── diseno-responsive/          # Tests de diseño responsive
│   │   │   └── multi-dispositivo-responsive.cy.js  # Tests de distintos dispositivos
│   │   ├── general/             # Tests de funcionalidades generales
│   │   │   ├── funciones-generales.cy.js  # UI general y navegación
│   │   │   └── ux-validaciones.cy.js      # Validaciones UI/UX para el footer
│   │   ├── login/               # Tests de autenticación
│   │   │   └── login.cy.js      # Login/logout para todos los roles
│   │   └── organizador/         # Tests del panel de organizador
│   │       ├── cargar-evento.cy.js    # Creación de eventos
│   │       ├── editar-perfil.cy.js    # Edición de perfil
│   │       ├── estadisticas.cy.js     # Estadisticas
│   │       ├── gestionar-salas.cy.js  # Gestionar salas
│   │       └── registro.cy.js         # Registro de organizador
│   ├── fixtures/                # Datos de prueba (JSON)
│   │   ├── creacion-eventos.json      # Datos para la creacion de eventos
│   │   ├── credenciales-login.json    # Credenciales de usuarios
│   │   ├── editar-perfil.json         # Datos para modificar el perfil
│   │   ├── evento.jpg                 # Imagen de portada para la creacion de eventos
│   │   ├── perfil.jpg                 # Imagen de perfil para editar el perfil de organizador
│   │   ├── registro-comprador.json    # Datos para registro comprador
│   │   └── registro-organizador.json  # Datos para registro organizador
│   └── support/                 # Comandos personalizados y configuración
│       ├── commands.js          # Importación de comandos personalizados
│       ├── e2e.js              # Configuración global de tests
│       └── commands/
│           ├── eventos.js      # Comandos de eventos reutilizables
│           └── login.js        # Comandos de login reutilizables
├── Documentacion/              # Documentación del proyecto
│   ├── Challenge — Ticketazo.pdf     # Especificaciones del challenge
│   └── Documento Funcional.pdf       # Documento funcional
├── assets/                     # Recursos gráficos
│   └── ticketazo.png          # Logo del proyecto
├── .gitignore                  # Archivos excluidos del repositorio
├── cypress.config.js           # Configuración principal de Cypress
├── package.json                # Dependencias y scripts del proyecto
├── package-lock.json           # Versiones exactas de dependencias
└── README.md                   # Documentación principal (este archivo)
```

## 🛠️ Tecnologías utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| **Cypress** | `^14.5.2` | Framework de testing E2E |
| **cypress-file-upload** | `^5.0.8` | Utilidad para subida de archivos |
| **Node.js** | `≥16.0` | Entorno de ejecución |
| **JavaScript** | `ES6+` | Lenguaje de programación |

## 📋 Comandos personalizados

El proyecto incluye comandos Cypress personalizados para facilitar la reutilización:

```javascript
// Comandos de login disponibles
cy.loginAdmin()          // Login como administrador
cy.loginComprador()      // Login como comprador
cy.loginOrganizador()    // Login como organizador
cy.loginIncorrecto()     // Intento de login con credenciales incorrectas
// Comandos de eventos disponibles
cy.crearEvento()         // Simplifica el flujo de la creación de eventos
```

## 🧪 Datos de prueba

Los datos de prueba están organizados en archivos JSON dentro de `cypress/fixtures/`:

- **credenciales-login.json**: Credenciales para diferentes roles de usuario
- **registro-comprador.json**: Datos válidos e inválidos para registro de compradores
- **registro-organizador.json**: Información para registro de organizadores
- **editar-perfil.json**: Información para editar el perfil de organizadores
- **creacion-eventos.json**: Datos válidos e inválidos para la creación de eventos (fecha, duración, lugar, etc.)
  
## ✅ Estado del proyecto

### 🎯 Cobertura de testing

- **✅ 100% de casos críticos cubiertos**: Login, registro, compra de entradas
- **✅ Testing multiplataforma**: Pruebas específicas para dispositivos móviles
- **✅ Validación de errores**: Manejo correcto de datos inválidos
- **✅ Testing de usabilidad**: Cambio de tema, navegación, búsqueda

### 📊 Estadísticas del proyecto

- **20+ casos de prueba automatizados**
- **5 módulos principales testeados**
- **3 roles de usuario validados** (Admin, Organizador, Comprador)
- **Compatibilidad móvil** implementada y verificada

### 🔧 Buenas prácticas implementadas

- **Page Object Model**: Separación de lógica de tests y selectores
- **Comandos reutilizables**: Funciones comunes centralizadas
- **Datos parametrizados**: Uso de fixtures para datos de prueba
- **Manejo de errores**: Ignorar errores conocidos del frontend
- **Documentación**: Comentarios detallados en cada archivo de test

## � Consideraciones importantes

### ⚠️ Limitaciones del entorno de pruebas

- Los tests están configurados para **NO modificar datos reales** en el entorno
- Las operaciones de compra se detienen antes de la confirmación final
- Los cambios de estado en AdminClientes se validan pero no se ejecutan

### 🔒 Seguridad y datos

- Las credenciales están en archivos de fixtures para fines académicos
- En un entorno productivo, usar variables de entorno o servicios de secrets
- Los datos de prueba no contienen información personal real

## 📚 Documentación adicional

- **📄 Challenge**: Especificaciones completas en `Documentacion/Challenge — Ticketazo.pdf`
- **📋 Plan de pruebas**: Detalle completo en Google Sheets (ver enlace en entregables)
- **🐛 Reporte de bugs**: Gestión activa en Trello (ver enlace en entregables)

## 🤝 Contribución

Este proyecto fue desarrollado con fines académicos para **XAcademy QA Automation**. Las contribuciones están limitadas a los miembros del equipo.

### 📌 Consideraciones finales

- ✅ Proyecto finalizado y validado para fines académicos
- ✅ Todos los scripts probados y funcionando correctamente
- ✅ Documentación completa y actualizada
- ✅ Entregables listos para revisión

**Versión de Cypress**: `14.5.2`  
**Entorno objetivo**: `https://vps-3696213-x.dattaweb.com/`  
**Fecha de entrega**: 27 de noviembre de 2025

---

<div align="center">

### 🎓 Desarrollado con 💻 por el Grupo N°5 - XAcademy QA Automation

</div>




