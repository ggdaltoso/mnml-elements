import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlDivider extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host hr {
          margin: 0;
          padding: 0;
          border: none;
          border-top: 1px solid #777;
        }
      `
    ];
  }

  render() {
    return html`
      <hr />
    `;
  }
}

customElements.define('mnml-divider', MnmlDivider);