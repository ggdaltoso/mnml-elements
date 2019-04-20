import { Base, html, css } from "../mnml-base/mnml-base";

export class MnmlDialogTitle extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: contents;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        .title {
          display: block;
          margin: 16px;
          font-size: 18px;
          letter-spacing: 1.1px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      label: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.label = undefined;
  }

  render() {
    return html`
      <span class="title">${this.label}</span>
    `;
  }

  firstUpdated() {
    this.setAttribute("slot", "title");
  }

  handleDimensionChange(dimension, newValue) {}
}

customElements.define("mnml-dialog-title", MnmlDialogTitle);
