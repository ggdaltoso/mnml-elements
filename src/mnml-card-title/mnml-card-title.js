import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlCardTitle extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .title {
          display: block;
          margin: 16px;
          padding: 0;
          font-size: 14px;
          color: #777;
        }
      `
    ];
  };

  render() {
    return html`
      <span class="title">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('mnml-card-title', MnmlCardTitle);