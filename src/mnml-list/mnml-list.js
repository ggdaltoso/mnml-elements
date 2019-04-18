import { Base, css, html } from '../mnml-base/mnml-base';

export class MnmlList extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        .container {
          margin: 0;
          padding: 0;
        }
      `
    ];
  };

  render() {
    return html`
      <ul class="container">
        <slot></slot>
      </ul>
    `;
  }
}

customElements.define('mnml-list', MnmlList);