import { Base, html, css } from '../mnml-base/mnml-base';

export class MnmlChip extends Base {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          vertical-align: middle;
        }
        .chip {
          display: flex;
          height: 24px;
          padding: 0 8px;
          font-size: 11px;
          line-height: 24px;
          background: #EEE;
          border-radius: 15px;
        }
        .avatar {
          width: 24px;
          height: 24px;
          margin-left: -8px;
          margin-right: 2px;
          border-radius: 50%;
        }
        .label {
          margin: 0 2px;
        }
        .remove-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          margin-left: 2px;
          margin-right: -8px;
          font-size: 16px;
          line-height: 24px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.1);
          cursor: pointer;
        }
      `
    ];
  };

  static get properties() {
    return {
      chipId: {
        type: String
      },
      label: {
        type: String
      },
      avatar: {
        type: String
      },
      onRemove: {
        type: Function
      }
    };
  };

  constructor() {
    super();
    this.chipId = undefined;
    this.label = undefined;
    this.avatar = undefined;
  }

  renderAvatar() {
    return html`
      <img class="avatar" src="${this.avatar}" />
    `;
  };

  renderRemoveBtn() {
    return html`
      <div class="remove-btn" @click=${e => this.onRemove(e, chip)}>x</div>
    `;
  }

  render() {
    const chip = {
      id: this.chipId,
      label: this.label
    };

    return html`
      <div class="chip">
        ${this.avatar && this.renderAvatar()}
        <div class="label">${this.label}</div>
        ${this.onRemove && this.renderRemoveBtn()}
      </div>
    `;
  }
}

customElements.define('mnml-chip', MnmlChip);