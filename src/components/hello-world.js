/**
 * # Prety basic hello world component
 * Prints name attribute. Is reactive to attribute and property change.
 */
class HelloWorld extends HTMLElement {
  // Element constructor
  constructor() {
    super();

    // Init shadow DOM
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  // Use properties to work with the 'name' attribute
  get name() {
    return this.getAttribute('name');
  }
  set name(newValue) {
    if (newValue) this.setAttribute('name', newValue);
    else this.removeAttribute('name');
  }

  // The name attribute must be observed to react to changes
  static get observedAttributes() {
    return ['name'];
  }
  // React to these changes
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case 'name':
        if (this._shadowRoot) this._render();
        break;
    }
  }

  // Fires when component is mounted
  connectedCallback() {
    this._render();
  }

  // Render the component
  _render() {
    const { name } = this;
    this._shadowRoot.innerHTML = `
    <style>
        :host {
          display: block;
          padding: 1rem;
          margin: 0 0 1rem;
          border: 2px solid var(--hw-border-color, gray);
          background-color: var(--hw-bg-color, transparent);
          color: var(--hw-color, black);
          border-radius: .25rem;
          font-weight: bold;
          font-size: 1.2em;
          line-height: 1.8em;
        }
        h1 {
          margin: 0;
          text-align: center;
        }
        h1.no-name {
          opacity: .5;
        }
    </style>
    <h1 class="${name ? '' : 'no-name'}">
      Hello ${name || 'World'}!
    </h1>
    `;
  }
}

customElements.define('hello-world', HelloWorld);
