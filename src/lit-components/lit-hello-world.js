import { LitElement, html } from 'lit-element';
/**
 * # Hello World component built with lit-element
 * - no need to take care of reactivity!
 */
class LitHelloWorld extends LitElement {
  // Element constructor
  constructor() {
    super();
  }
  static get properties() {
    return {
      name: { type: String }
    };
  }

  // Render the component
  render() {
    const { name } = this;
    return html`
      <style>
        :host {
          display: block;
          padding: 1rem;
          margin: 0 0 1rem;
          border: 2px solid var(--hw-border-color, gray);
          background-color: var(--hw-bg-color, transparent);
          color: var(--hw-color, black);
          border-radius: 0.25rem;
          font-weight: bold;
          font-size: 1.2em;
          line-height: 1.8em;
        }
        h1 {
          margin: 0;
          text-align: center;
        }
        h1.no-name {
          opacity: 0.5;
        }
      </style>
      <h1 class="${name ? '' : 'no-name'}">Hello ${name || 'World'}!</h1>
    `;
  }
}

customElements.define('lit-hello-world', LitHelloWorld);

export default LitHelloWorld;
