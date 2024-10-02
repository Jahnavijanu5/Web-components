/**
 * # Model Choser
 * Lists all model objects from 'items' property
 *
 * TODO:
 * - MUST accept limit attribute to replace the HARDCODED_LIMIT
 * - MUST provide property getter and setter for limit
 * - MAY create new web component for each item
 * - (hero) MAY use SLOT element for title with existing H1 as fallback
 * - (hero) MAY accept CSS custom properties for selected item color
 */
const style = `
  h1 {
    color: mediumblue;
  }
  ul {
    margin: 0 0 2rem;
    padding: 0;
    overflow: hidden; 
    border-radius: .5rem;
  }
  li {
    list-style: none;
    margin: 0;
    margin-top: 1px;
  }
  a {
    display: block;
    padding: .5rem;
    background: dimgray;
    color: white;
    text-decoration: none;
  }
  a:hover {
    background: black;
  }
  a.selected {
    font-weight: bold;
    background: darkblue;
  }
`;
const HARDCODED_LIMIT = 6;
class ModelChooser extends HTMLElement {
  // Fires when component is created
  constructor() {
    super();

    // Init our data & loading
    this._items = [];

    // Init the shadow root
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  // Fires when component is mounted
  connectedCallback() {
    this._render();

    // Set up listener
    this._shadowRoot.addEventListener('click', this._onModelSelect.bind(this));
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case 'idx':
        this._render();
        break;
    }
  }

  /** Only these attributes changes will trigger the callback */
  static get observedAttributes() {
    return ['idx'];
  }

  // Exposed properties getters/setters
  set items(newValue) {
    this._items = newValue;
    this._render();
  }
  get items() {
    return this._items;
  }

  _onModelSelect(e) {
    if (e.target && e.target.matches('a[data-idx]')) {
      e.preventDefault();

      // Mark selected
      const idx = parseInt(e.target.dataset.idx);
      this.setAttribute('idx', idx);

      // Dispatch custom event
      const event = new CustomEvent('model-change', {
        bubbles: true,
        detail: idx
      });
      this.dispatchEvent(event);
    }
  }

  // Renders the component
  _render() {
    let { _items: items } = this;
    const limit = HARDCODED_LIMIT;

    if (limit) {
      items = items.slice(0, limit);
    }

    let content = `
      <style>
        ${style}
      </style>
      <h1>Models List <sup>(${items.length})</sup></h1>
      <ul>
        ${items.map(this._renderModel.bind(this)).join('')}
      </ul>
    `;
    this._shadowRoot.innerHTML = content;
  }

  // Returns one model's HTML
  _renderModel(model, idx) {
    return `
      <li>
        <a 
          href="#" 
          data-idx="${idx}"
          class="${idx == this.getAttribute('idx') ? 'selected' : ''}"
        >${model.name}</a>
      </li>
    `;
  }
}

customElements.define('model-chooser', ModelChooser);
