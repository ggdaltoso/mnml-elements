import { Base, html, css } from "../mnml-base/mnml-base";

export class MnmlCardContent extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        .content {
          margin: 16px;
          padding: 0;
          font-size: 16px;
          color: #333;
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
}

customElements.define("mnml-card-content", MnmlCardContent);
