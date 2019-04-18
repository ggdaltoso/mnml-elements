import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlDialog extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .backdrop {
          position: fixed;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
        }
        .dialog {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--width);
          height: var(--height);
          background-color: white;
          border: 1px solid #EEE;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
      `
    ];
  };

  static get properties() {
    return {
      open: {
        type: Boolean,
        reflect: true
      },
      width: {
        type: String,
      },
      height: {
        type: String
      },
    };
  };

  constructor() {
    super();
    this.open = false;
    this.width = '100px';
    this.height = '40px';
  }
  
  attributeChangedCallback(name, oldval, newVal) {
    if (name === 'width' || name === 'height' && newVal) {
      this.shadowRoot.host.style.setProperty(`--${name}`, newVal);
    }
    super.attributeChangedCallback(name, oldval, newVal);
  }

  handleClose(e) {
    e.stopPropagation();
    this.onClose(e);
  }

  render() {
    if (this.open) {
      return html`
        <div class="backdrop" @click=${this.handleClose}></div>
        <div class="dialog">
          <slot name="title"></slot>
          <slot name="content"></slot>
          <slot name="actions"></slot>
        </div>
      `;
    }

    return html`<div></div>`;
  }
}

customElements.define('mnml-dialog', MnmlDialog);