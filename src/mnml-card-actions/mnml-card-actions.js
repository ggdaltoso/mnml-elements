import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlCardActions extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .actions {
          display: flex;
          justify-content: flex-end;
          margin: 16px;
          padding: 0;
        }
      `
    ];
  };

  render() {
    return html`
      <div class="actions">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('mnml-card-actions', MnmlCardActions);