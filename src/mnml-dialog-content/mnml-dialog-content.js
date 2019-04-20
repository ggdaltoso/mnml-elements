import { Base, html, css } from "../mnml-base/mnml-base";

export class MnmlDialogContent extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: contents;
        }
        .content {
          margin: 16px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.setAttribute("slot", "content");
  }
}

customElements.define("mnml-dialog-content", MnmlDialogContent);
