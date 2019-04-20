import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlBadge extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        .container {
          position: relative;
          display: inline-block;
        }
        .badge {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 2px 4px;
          background-color: #333;
          border-radius: 6px;
          font-size: 10px;
          letter-spacing: 0.8px;
          color: #eee;
        }
        .dot {
          position: absolute;
          top: 0;
          right: -8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #333;
        }
      `,
    ];
  }

  static get properties() {
    return {
      count: {
        type: Number,
      },
      dot: {
        type: Boolean,
      },
      maxcount: {
        type: Number,
      },
    };
  }

  constructor() {
    super();

    this.count = 0;
    this.maxcount = undefined;
    this.dot = false;
  }

  renderDot() {
    return html`
      <div class="dot"></div>
    `;
  }

  renderBadge() {
    const reachedMaxCount =
      this.maxcount && this.count > this.maxcount ? true : false;

    return html`
      <div class="badge">
        ${reachedMaxCount ? `${this.maxcount}+` : this.count}
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        test ${this.dot ? this.renderDot() : this.renderBadge()}
      </div>
    `;
  }
}

customElements.define('mnml-badge', MnmlBadge);
