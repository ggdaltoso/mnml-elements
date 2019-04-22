import { Base, css, html } from '../mnml-base/mnml-base';

export class MnmlMasonry extends Base {
  static get properties() {
    return { columns: { type: Number }, height: { type: Number } };
  }

  constructor() {
    super();
    this.columns = 3;
    this.height = 800;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
          flex-flow: column wrap;
          align-content: space-between;
        }

        .line-breaker {
          content: '';
          flex-basis: 100%;
          width: 0;
          margin: 0;
        }
      `,
    ];
  }

  get rules() {
    let rules = `
    :host {
      height: ${this.height}px;
    }
    ::slotted(*) {
      width: calc(94% / ${this.columns});
      margin-bottom: 2%;
    }`;

    for (let i = 1; i < this.columns; ) {
      rules += `
      ::slotted(*:nth-child(${this.columns}n + ${i})) {
        order: ${i++};
      }`;
    }

    rules += `
    ::slotted(*:nth-child(${this.columns}n)) {
      order: ${this.columns};
    }`;

    console.log(rules);
    return rules;
  }

  render() {
    return html`
      <style>
        ${this.rules} ::slotted(*:nth-child(3n + 1)) {
          order: 1;
        }
        ::slotted(*:nth-child(3n + 2)) {
          order: 2;
        }
        ::slotted(*:nth-child(3n)) {
          order: 3;
        }
      </style>
      <slot> </slot>
    `;
  }
}

customElements.define('mnml-masonry', MnmlMasonry);
