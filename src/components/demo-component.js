const styles = `
    /** add component styles here **/
    :host {
      all: initial; /** completely immutable CSS **/
      display: inline-block;
      margin: 0 0 2rem;
      border-radius: 1rem;
      border-radius: calc(var(--borderRadius));
      padding: .5rem;
      padding: calc(var(--borderRadius) / 2);
      font-family: sans-serif;
      text-align: center;
    }

    /** No need for custom classes here **/
    a {
      display: block;
      width: var(--imageWidth);
      padding: .5rem;
      padding: calc(var(--borderRadius) / 2);
      border: 0;
      border-radius: .5rem;
      border-radius: calc(var(--borderRadius) / 2);
      box-shadow: 0 0 calc(var(--borderRadius) / 2) rgba(0,0,0,0.5);
      background: black;
      background: var(--buttonBackground); 
      color: black;
      color: var(--buttonColor);
      cursor: pointer;
      text-decoration: none;
    }
    h1 {
      margin: 0;
    }
    img {
      display: block;
      max-width: 100px;
      width: var(--imageWidth);
    }
  `;
/**
 * # Demo component
 * Showcase of cool stuff to use in Web Components:
 * - Life cycle
 * - Shadow DOM
 * - Attribute change observer
 * - Property getter/setter
 * - Slots
 * - CSS :host
 * - CSS custom properties
 */
class DemoComponent extends HTMLElement {
  /**
   * An instance of the element is created or upgraded.
   * Useful for initializing state, settings up event listeners,
   * or creating shadow dom.
   */
  constructor(...args) {
    super(...args);
    this.root = this.attachShadow({ mode: 'open' });
  }

  /**
   * Called every time the element is inserted into the DOM.
   * Useful for running setup code, such as fetching resources or rendering.
   * Generally, you should try to delay work until this time.
   */
  connectedCallback() {
    this._render();
  }

  /**
   * Called every time the element is removed from the DOM.
   * Useful for running clean up code.
   */
  disconnectedCallback() {
    console.log('detached');
  }

  /**
   * Called when an observed attribute has been added, removed,
   * updated, or replaced.
   * Also called for initial values when an element is created by the parser,
   * or upgraded.
   * Note: only attributes listed in the observedAttributes property
   * will receive this callback.
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case 'image-src':
      case 'title':
      case 'href':
        this._render();
        break;
    }
  }

  /** Only these attributes changes will trigger the callback */
  static get observedAttributes() {
    return ['title', 'image-src', 'href'];
  }

  // Exposed properties getters/setters
  get imageSrc() {
    return this.getAttribute('image-src');
  }
  set imageSrc(newValue) {
    // Not the best practice but you may want to reflect property to attribute
    if (newValue) this.setAttribute('image-src', newValue);
    else this.removeAttribute('image-src');
  }

  _render() {
    const title = this.getAttribute('title');
    const href = this.getAttribute('href');
    const imageSrc = this.getAttribute('image-src');
    this.root.innerHTML = `
        <style>
          ${styles}
        </style>
        <article>
          <a href="${href || '#'}">
            ${title ? `<h1>${title}</h1>` : ''}
            <img src="${imageSrc}"/>
          </a>
          <slot name="notes"></slot>
        </article>
      `;
  }
}

customElements.define('demo-component', DemoComponent);
