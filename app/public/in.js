class ComponentRegistry {
    constructor() {
      // Rutas ya cargadas, evita duplicados. (ruta -> contenido XML)
      this.loadedRoutes = new Map();
  
      // Registro global de componentes. (tagName -> { template, style })
      this.components = new Map();
    }
  
    // Registrar una ruta como cargada
    registerRoute(route, content) {
      if (!this.loadedRoutes.has(route)) {
        this.loadedRoutes.set(route, content);
        console.log('Se registra la ruta:', route, 'Cont:', this.loadedRoutes);
      }
    }
  
    // Verificar si una ruta ya fue cargada
    isRouteLoaded(route) {
      return this.loadedRoutes.has(route);
    }
  
    // Registrar un componente (tagName -> definición)
    registerComponent(tagName, definition) {
      if (this.components.has(tagName)) {
        console.warn(`El componente <${tagName}> ya está registrado. Se omite.`);
        return false;
      }
      this.components.set(tagName, definition);
      return true;
    }
  
    // Obtener la definición de un componente
    getComponent(tagName) {
      return this.components.get(tagName);
    }
  
    // Obtener todas las rutas cargadas en forma de array de XMLDocument
    getAllXmlDocuments() {
      return Array.from(this.loadedRoutes.values());
    }
}
  
  // Exportar una única instancia a usar globalmente
const componentRegistry = new ComponentRegistry();

class ImportComponent extends HTMLElement {
    static loadedSources = new Set(); // Evitar recargar archivos ya cargados
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    async connectedCallback() {
      const src = this.getAttribute('src');
      if (!src) {
        console.error('El atributo "src" es requerido en <element-import>.');
        return;
      }
  
      try {
        await this.loadComponents(src);
      } catch (error) {
        console.error(`Error al cargar el archivo ${src}:`, error);
      }
    }
  
    async loadComponents(src) {
        if (ImportComponent.loadedSources.has(src)) {
            console.warn(`El archivo ${src} ya se cargó previamente.`);
            return;
        }
    
        console.log('Cargando:', src);
        ImportComponent.loadedSources.add(src);

        
        // 1. Cargar el archivo XML
        const response = await fetch(src);
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'application/xml');
        
        // 2. Cargar y registrar <component>
        const components = Array.from(xmlDoc.querySelectorAll('component'));
        this.registerComponents(components);
        
        console.log('components:', ImportComponent.loadedSources);
        // 3. Cargar <element-import> anidados
        const imports = Array.from(xmlDoc.querySelectorAll('element-import'));
        for (const importEl of imports) {
            const newSrc = importEl.getAttribute('src');
            if (newSrc) {
            await this.loadComponents(newSrc); // Cargar recursivamente
            }
        }
    }
  
    registerComponents(components) {
        components.forEach((component) => {
            console.log('component:', component);
            const tagName = component.getAttribute('module');
            if (!tagName) {
            console.error('Cada <component> necesita un atributo "module".');
            return;
            }
    
            // Obtenemos <template>, <style>, y <script>
            const template = component.querySelector('template');
            const style = template?.querySelector('style') || component.querySelector('style');
            const script = component.querySelector('script');
    
            if (!template) {
            console.error(`El componente <${tagName}> no tiene <template>.`);
            return;
            }
    
            // Registrar el Custom Element si no existe
            if (!customElements.get(tagName)) {
            defineCustomComponent(tagName, template, style, script);
            console.log(`Componente <${tagName}> registrado.`);
            } else {
            console.warn(`El componente <${tagName}> ya estaba definido.`);
            }
        });
    }
}
  
// Definir un Custom Element dinámico
function defineCustomComponent(tagName, templateEl, styleEl, componentEl) {
    const componentClass = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
  
        // Clonar el contenido del template
        const content = document.createElement('div');
        content.innerHTML = templateEl.innerHTML;
  
        // Insertar <style>
        if (styleEl) {
          const styleElement = document.createElement('style');
          styleElement.textContent = styleEl.textContent;
          this.shadowRoot.appendChild(styleElement);
        }
  
        // Insertar el contenido del template
        this.shadowRoot.appendChild(content);
      }
  
      connectedCallback() {
        if (componentEl) {
          const children = Array.from(componentEl.querySelectorAll('element-import'));
          children.forEach((childEl) => {
            const childSrc = childEl.getAttribute('src');
            if (childSrc) {
              const childImport = document.createElement('element-import');
              childImport.setAttribute('src', childSrc);
              this.shadowRoot.appendChild(childImport);
            }
          });
        }
      }
    };
  
    // Registrar el Custom Element en el DOM
    if (!customElements.get(tagName)) {
      customElements.define(tagName, componentClass);
    }
}


  
  
  class FetchComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }); // Usamos Shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          .data-item {
            padding: 10px;
            border: 1px solid #ccc;
            margin: 5px 0;
          }
        </style>
        <div id="container">
          <p>Cargando datos...</p>
        </div>
      `;
    }
  
    connectedCallback() {
      this.fetchData(); // Llamar al método fetch cuando el componente se agrega al DOM
    }
  
    async fetchData() {
      try {
        // Realizar el fetch a la API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // API de prueba
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
  
        // Renderizar los datos obtenidos
        this.renderData(data);
      } catch (error) {
        this.renderError(error.message);
      }
    }
  
    renderData(data) {
      const container = this.shadowRoot.querySelector('#container');
      container.innerHTML = ''; // Limpiar el contenido
  
      // Mostrar solo los primeros 5 elementos
      data.slice(0, 5).forEach(item => {
        const div = document.createElement('div');
        div.className = 'data-item';
        div.textContent = `${item.id}: ${item.title}`;
        container.appendChild(div);
      });
    }
  
    renderError(message) {
      const container = this.shadowRoot.querySelector('#container');
      container.innerHTML = `<p>Error al cargar datos: ${message}</p>`;
    }
  }

  class SimpleTest extends HTMLElement {
      constructor() {
        super();
        // Creamos un Shadow DOM interno
        this.attachShadow({ mode: 'open' });

        // Podemos crear un contenedor y meter el contenido
        const container = document.createElement('div');
        container.textContent = '¡Hola Mundo! Esto es un Custom Element básico.';

        // Podrías añadir estilos inline o con un <style>
        const style = document.createElement('style');
        style.textContent = `
          div {
            padding: 10px;
            background-color: #f0f0f0;
            border-radius: 8px;
            font-family: sans-serif;
            color: #333;
          }
        `;

        // Lo inyectas todo en el Shadow DOM
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(container);
      }
    }

    customElements.define('simple-test', SimpleTest);
  
  
  // Registrar el Web Component principal
  customElements.define('element-import', ImportComponent);  
  
  customElements.define('fetch-component', FetchComponent);  
  