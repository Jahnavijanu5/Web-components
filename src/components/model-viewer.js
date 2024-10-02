/**
 * # Model Viewer
 * Lists all models object loaded from 'url' parameter
 *
 * TODO:
 * - MUST NOT use shadowDOM to allow full CSS theming
 * - MUST use demo component replacing title and image
 * - (hero) print more vehicle data (data demo https://demo3059429.mockable.io/vehicles)
 * - (hero) create new component for each attribute (<dt><dd>)
 * - (hero) use a custom event to close the viewer
 */
class ModelViewer extends HTMLElement {
  // Fires when component is created
  constructor() {
    super();

    // Init the shadow root
    this._shadowRoot = this.attachShadow({ mode: 'open' });

    this._render();
  }

  // Use attributes + properties to set model
  get data() {
    return this._data;
  }
  set data(newValue) {
    this._data = newValue;
    this._render();
  }

  static get observedAttributes() {
    return ['show-details'];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (this._shadowRoot) this._render();
  }

  // Fires when component is mounted
  connectedCallback() {
    if (this.data) this._render();
  }

  _render() {
    let content = '';
    const { _data: data } = this;
    if (data) {
      content = `
        <style></style>
        <article class="message">
          <div class="message-header">
            <p>Selected Vehicle</p>
            <button class="delete" aria-label="close"></button>
          </div>
          <div class="message-body">
            <div class="content">
              <img src="${data.imageUrl}" />
              <h1>${data.name}</h1>
            ${this._renderDetails()}
            </div>
          </div>
        </article>
      `;
    } else {
      content = `
        <div class="notification">
          <p>No model selected.</p>
        </div>
      `;
    }
    this._shadowRoot.innerHTML = content;
  }

  _renderDetails() {
    const showDetails = this.getAttribute('show-details');
    if (showDetails === null)
      return '<p class="tag is-black">hidden details</p>';

    const { _data: data } = this;
    return `
      <dl>
        <dt class="tag is-black">Transmission</dt>
        <dd>${data.transmissions[0]}</dd>
        <dt class="tag is-black">Fuel</dt>
        <dd>${data.fuelTypes[0]}</dd>
      </dl>
    `;
  }
}

customElements.define('model-viewer', ModelViewer);
