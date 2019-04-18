import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlDialogActions extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: contents;
        }
        .container {
          display: flex;
          justify-content: flex-end;
          margin: 16px;
        }
        .container mnml-button {
          margin-left: 16x;
        }
      `
    ];
  };

  constructor() {
    super();
    this.label = undefined;
  }

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.setAttribute('slot', 'actions');
  }
}

customElements.define('mnml-dialog-actions', MnmlDialogActions);