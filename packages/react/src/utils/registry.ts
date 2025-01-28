class RenderComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const template = document.createElement('template');      
    }
  }

customElements.define('render-component', RenderComponent );  
  