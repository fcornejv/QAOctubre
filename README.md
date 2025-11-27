# 🚀 Challenge QA Automation - Ticketazo


## Proyecto Grupal - GRUPO 5


* Frank Pedro Cornejo Valencia.
* Sandy Alvarez
* jonathan_avila10
* Angelo


| Nombre | Actividades |
| :--- | :--- |
| Frank Pedro Cornejo Valencia. | Creacion de proyecto Automatización, Ingreso de casos a `Plan de Pruebas`  |
| Sandy Alvarez |Creacion e Ingreso de casos a `Plan de Pruebas`  |
| jonathan_avila10 | `Creacion de Tablero Vacio de Trello`  |
| Angelo | `Creacion de repositorio Vacio de GIT `  |




---


## 1. Objetivo del Proyecto
El objetivo principal de este proyecto es poner en práctica la elaboración de planes de prueba y la automatización de casos funcionales utilizando **Cypress**, aplicando buenas prácticas de redaccion decasos de prueba, automatización y reporte de defectos.


---


## 2. Sistema Bajo Prueba (SBP)


El sistema bajo prueba es "Ticketazo". Se recomienda el entorno de QA para la ejecución de pruebas.


| Entorno | URL |
| :--- | :--- |
| QA (Recomendado) | `https://vps-3696213-x.dattaweb.com/`  |
| Producción | `https://ticketazo.com.ar`  |


*Nota: Ambos entornos comparten la misma base de datos de QA.*


---


## 3. Requisitos Técnicos y Entorno


* **Framework de Automatización:** Cypress
* **Lenguaje:** JavaScript
* **Gestor de Paquetes:** npm
* **Versión de Node.js:** v22.17.1


---


## 4. Ejecución de la Automatización


Sigue los siguientes pasos para descargar y ejecutar los tests automatizados End-to-End (E2E):


### 4.1 Instalación (Script Requerido)


1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/fcornejv/QAOctubre.git
    ```
2.  **Acceder al directorio del proyecto:**
    ```bash
    cd [nombre-del-repo]
    ```
3.  **Instalar dependencias:**
    ```bash
    npm install
    ```
    (Este comando descarga todas las dependencias necesarias de Cypress).


### 4.2 Ejecución de los Tests (Script Requerido)


Para ejecutar las pruebas en modo *headless* (terminal), usa el siguiente comando:


```bash
npm run test
```




### 4.3 Ejecución en Modo Interactivo
Para abrir la interfaz gráfica de Cypress (Cypress Test Runner) y ver las pruebas paso a paso, ejecuta:


```bash
npx cypress open
```


## 5. Estructura y Buenas Prácticas (4.2 Automatización con Cypress)
El proyecto sigue una estructura de carpetas clara.


* **Cobertura:** Los tests cubren al menos 5 casos críticos End-to-End.
* **Archivos de Especificación:** Los archivos se encuentran en `cypress/e2e/`.
* **Datos de Prueba:** Se utiliza `cypress/fixtures/` para la gestión de datos de prueba.
* **Reusabilidad:** Se implementan buenas prácticas como *custom commands* para mejorar la reusabilidad del código[cite: 35].


---


## 6. 🔗 Entregables y Documentación Requerida


Tal como lo requiere el desafío, a continuación se encuentran los enlaces públicos al Plan de Pruebas y al Tablero Trello, incluidos en el `README.md`.


### 6.1 Plan de Pruebas
El plan detalla los casos de prueba con la documentación mínima solicitada.


* **Columnas Mínimas:** ID/Clave, Título del caso, Descripción / objetivo, Precondiciones, Pasos, Datos de prueba, Resultado esperado, Severidad/Prioridad.


**🔗 Enlace al Plan de Pruebas (Acceso Público Requerido):**
[Plan de Pruebas - Challenge Ticketazo]**(https://docs.google.com/spreadsheets/d/1My45HQCwOKUeVVNjc_WwtPzsJd4nkPJH/edit?gid=454111713#gid=454111713)**


### 6.2 Tablero Trello
Este tablero documenta los defectos hallados.


* **Contenido de Tarjeta (Requerido):** Cada tarjeta debe contener ID, título, descripción, pasos para reproducir, resultado esperado, resultado actual, severidad, prioridad y evidencia (captura / video).


**🔗 Enlace al Tablero Trello (Acceso Público Requerido):**
[Tablero de Defectos - Trello]**(https://trello.com/b/bKNzHIV2/qa-automation-exam)**


---


## 7. Criterios de Evaluación Cubiertos
Se ha prestado especial atención a los siguientes criterios de evaluación:


* **Calidad del Código:** Incluye buenas prácticas en Cypress, como el uso de *fixtures* y *custom commands* para reusabilidad y claridad.
* **Correctitud Funcional:** Los tests deben pasar en una ejecución limpia (`npm run limpio`).
* **Documentación:** El `README` facilita la revisión y la reproducción rápida del proyecto.
* **Planificación:** Se garantiza la cobertura y calidad del plan de pruebas (claridad, priorización).







