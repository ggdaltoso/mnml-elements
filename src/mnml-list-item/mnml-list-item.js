import { Base, css, html } from '../mnml-base/mnml-base';

export class MnmlListItem extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        .container {
          display: flex;
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      `
    ];
  };

  render() {
    return html`
      <li class="container">
        <slot name="icon"></slot>
        <slot name="text"></slot>
      </li>
    `;
  }
}

customElements.define('mnml-list-item', MnmlListItem);