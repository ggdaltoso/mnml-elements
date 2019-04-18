import{a as t,b as s,c as e}from"./chunk-fd2d1ba7.js";class n extends t{static get styles(){return[super.styles,s`
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
      `]}constructor(){super(),this.label=void 0}render(){return e`
      <div class="container">
        <slot></slot>
      </div>
    `}firstUpdated(){this.setAttribute("slot","actions")}}customElements.define("mnml-dialog-actions",n);export{n as MnmlDialogActions};
