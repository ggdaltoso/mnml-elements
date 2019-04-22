import{a as e,b as t,c as i}from"./chunk-277298fc.js";class r extends e{static get styles(){return[super.styles,t`
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
          background: #eee;
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
      `]}static get properties(){return{chipId:{type:String},label:{type:String},avatar:{type:String},onRemove:{type:Function}}}constructor(){super(),this.chipId=void 0,this.label=void 0,this.avatar=void 0}renderAvatar(){return i`
      <img class="avatar" src="${this.avatar}" />
    `}renderRemoveBtn(){return i`
      <div class="remove-btn" @click=${e=>this.onRemove(e,chip)}>x</div>
    `}render(){this.chipId,this.label;return i`
      <div class="chip">
        ${this.avatar&&this.renderAvatar()}
        <div class="label">${this.label}</div>
        ${this.onRemove&&this.renderRemoveBtn()}
      </div>
    `}}customElements.define("mnml-chip",r);export{r as MnmlChip};
