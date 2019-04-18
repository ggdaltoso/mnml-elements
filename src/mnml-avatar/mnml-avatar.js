import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlAvatar extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #EEE;
          overflow: hidden;
        }
        .container img {
          max-width: 100%;
        }
        .container span {
          font-size: 18px;
          letter-spacing: 1.2px;
        }
      `
    ];
  };

  static get properties() {
    return {
      src: {
        type: String
      },
      fullname: {
        type: String
      }
    };
  };

  set fullname(val) {
    const oldVal = this.__name;
    let initials = '';
    const words = val.trim().split(' ');
    words.forEach(name => {
      initials += name.charAt(0).toUpperCase();
    });
    this.__name = initials;
    this.requestUpdate('fullname', oldVal);
  }

  get fullname() {
    return this.__name;
  }

  constructor() {
    super();
    this.src = undefined;
    this.__name = '';
  };

  render() {
    if (!this.src) {
      return html`
        <div class="container">
          <span>${this.__name}</span>
        </div>
      `;
    };

    return html`
      <div class="container">
        <img src="${this.src}" />
      </div>
    `;
  };
}

customElements.define('mnml-avatar', MnmlAvatar);