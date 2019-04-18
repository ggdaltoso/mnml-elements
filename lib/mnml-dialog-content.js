import{a as t,b as s,c as e}from"./chunk-fd2d1ba7.js";class n extends t{static get styles(){return[super.styles,s`
        :host {
          display: contents;
        }
        .content {
          margin: 16px;
        }
      `]}render(){return e`
      <div class="content">
        <slot></slot>
      </div>
    `}firstUpdated(){this.setAttribute("slot","content")}}customElements.define("mnml-dialog-content",n);export{n as MnmlDialogContent};
