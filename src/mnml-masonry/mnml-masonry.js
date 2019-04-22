import { Base, css, html } from '../mnml-base/mnml-base';

export class MnmlMasonry extends Base {
  static get properties() {
    return { columns: { type: Number } };
  }

  constructor() {
    super();
    this.columns = 3;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-flow: column wrap;
          align-content: space-between;
          height: 800px;
        }

        :host::before,
        :host::after {
          content: '';
          flex-basis: 100%;
          width: 0;
          order: 2;
        }

        ::slotted(*) {
          width: 32%;
          margin-bottom: 2%;
        }

        ::slotted(*:nth-child(3n + 1)) {
          order: 1;
        }
        ::slotted(*:nth-child(3n + 2)) {
          order: 2;
        }
        ::slotted(*:nth-child(3n)) {
          order: 3;
        }
      `,
    ];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('mnml-masonry', MnmlMasonry);
