import { Base, html, css, classMap } from '../mnml-base/mnml-base';

export class MnmlButton extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        button {
          padding: 6px 10px;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          letter-spacing: 1.1px;
        }
        .flat {
          background: none;
        }
        .flat:hover {
          background: #EEE;
        }
        .primary {
          background-color: #333;
          color: #EEE;
        }
        .primary:hover {
          background-color: #777;
        }
        .flat, .primary {
          transition: 200ms background linear;
        }
      `
    ];
  };

  static get properties() {
    return {
      flat: {
        type: Boolean
      },
      primary: {
        type: Boolean
      }
    };
  };

  constructor() {
    super();
    this.flat = false;
    this.primary = false;
  };

  render() {
    const classes = {
      flat: this.flat,
      primary: this.primary
    };

    return html`
      <button class="${classMap(classes)}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('mnml-button', MnmlButton);