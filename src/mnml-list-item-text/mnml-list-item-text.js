import { Base, css, html } from '../mnml-base/mnml-base';

export class MnmlListItemText extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        .container {
          display: block;
          padding: 8px 12px;
          list-style-type: none;
        }
      `
    ];
  };

  render() {
    return html`
      <span class="container">
        <slot></slot>
      </span>
    `;
  }

  firstUpdated() {
    this.setAttribute('slot', 'text');
  }
}

customElements.define('mnml-list-item-text', MnmlListItemText);