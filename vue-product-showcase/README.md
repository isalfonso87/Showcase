# Vue Product Showcase

Aplicación web interactiva desarrollada con **Vue 3** y **Vite** que consume un catálogo de productos desde una API REST externa. La plataforma cuenta con gestión centralizada de estado con **Vuex**, pruebas unitarias y E2E, interfaz adaptable (*responsive*) con **Bootstrap 5** y conmutador de modo Claro / Oscuro.

---

## Características Principales

**Desarrollo Rápido con Vite**: Entorno de desarrollo optimizado con recarga rápida de módulos (HMR).
**Consumo de API REST (Axios)**: Conexión con *Fake Store API* gestionando estados de la interfaz:
 **Cargando (`loading`)**: Feedback visual mientras se obtienen los productos.
 **Error (`error`)**: Manejo amigable de fallos de red con opción de reintento.
 **Lista Vacía (`empty`)**: Aviso cuando no hay productos disponibles.
**Filtro Interactivo**: Filtrado en tiempo real por categorías de productos.
**Estado Centralizado (Vuex 4)**: Módulos independientes para `productos`, `filtros` y `favoritos`.
**Diseño Institucional e Inclusivo**:
   Paleta de colores: Fondo blanco, Azul Marino (`#0f172a` / `#1e3a8a`), Celeste (`#38bdf8`) y Botones Verdes (`#10b981`).
   Conmutador dinámico de **Modo Claro / Modo Oscuro** con persistencia en `localStorage`.
   Diseño 100% *responsive* impulsado por **Bootstrap 5**.
**Aseguramiento de Calidad (Testing)**:
   Pruebas Unitarias con **Vitest** y **Vue Test Utils**.
   Pruebas End-to-End (E2E) con **Cypress**.

---

## Tecnologías Utilizadas

**Framework**: [Vue 3](https://vuejs.org/) (Composition API - `<script setup>`)
**Herramienta de Construcción**: [Vite](https://vitejs.dev/)
**Gestión de Estado**: [Vuex 4](https://vuex.vuejs.org/)
**Cliente HTTP**: [Axios](https://axios-http.com/)
**Framework CSS**: [Bootstrap 5](https://getbootstrap.com/)
**Pruebas Unitarias**: [Vitest](https://vitest.dev/) + [Vue Test Utils](https://test-utils.vuejs.org/)
**Pruebas E2E**: [Cypress](https://www.cypress.io/)

---

## Estructura del Proyecto

```text
vue-product-showcase/
├── cypress/
│   └── e2e/
│       └── filtro_productos.cy.js    # Prueba E2E de filtrado
├── src/
│   ├── assets/
│   │   └── main.css                  # Variables CSS y estilos base
│   ├── components/
│   │   ├── __tests__/
│   │   │   ├── ProductCard.spec.js   # Prueba unitaria de renderizado de props
│   │   │   └── ProductListError.spec.js # Prueba unitaria de manejo de errores
│   │   ├── Footer.vue                # Pie de página institucional
│   │   ├── Header.vue                # Encabezado con selector de tema
│   │   ├── ProductCard.vue           # Tarjeta de producto individual
│   │   └── ProductList.vue           # Catálogo con consumo de datos y filtros
│   ├── services/
│   │   └── api.js                    # Capa de peticiones HTTP con Axios
│   ├── store/
│   │   ├── index.js                  # Ensamblado del Store de Vuex
│   │   └── modules/
│   │       ├── favoritos.js          # Módulo de favoritos
│   │       ├── filtros.js            # Módulo de categorías y getters de filtrado
│   │       └── productos.js          # Módulo de catálogo y acciones asíncronas
│   ├── App.vue                       # Componente raíz
│   └── main.js                       # Punto de entrada de la aplicación
├── index.html
├── package.json
└── vite.config.js                    # Configuración de Vite y Vitest

 Instalación y Configuración
1. Clonar el repositorio
git clone https://github.com/tu-usuario/vue-product-showcase.git
cd vue-product-showcase
2. Instalar dependencias
npm install
3. Iniciar el servidor de desarrollo
npm run dev
La aplicación estará disponible en http://localhost:5173/.

 Ejecución de Pruebas Automatizadas
Pruebas Unitarias (Vitest)
Para ejecutar la suite de pruebas unitarias de los componentes:
npm run test:unit
Pruebas End-to-End (Cypress)
Asegúrate de tener el servidor de desarrollo corriendo (npm run dev).
Abre el entorno interactivo de Cypress:
npm run test:e2e

 Evaluación de Arquitectura y Escalabilidad
Como parte del análisis técnico del proyecto, se evaluó la conveniencia de adoptar otros frameworks del ecosistema Vue en etapas futuras:
¿Cuándo migrar a Nuxt.js?
Si la tienda requiere SEO (Search Engine Optimization) de alto nivel para indexar individualmente las fichas de productos en motores de búsqueda.
Si se necesita Server-Side Rendering (SSR) o Static Site Generation (SSG) para mejorar los tiempos de carga inicial (First Contentful Paint) en catálogos extensos.
¿Cuándo migrar a Quasar Framework?
Si el modelo de negocio demanda transformar la tienda en una aplicación móvil nativa (iOS / Android) o de escritorio (Electron) manteniendo una sola base de código fuente.
📝 Licencia
Proyecto desarrollado bajo la filosofía KISS (Keep It Simple, Stupid) con fines académicos y de portafolio profesional.