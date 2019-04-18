import{a as t,b as e,c as o}from"./chunk-fd2d1ba7.js";class s extends t{static get styles(){return[super.styles,e`
        :host {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .backdrop {
          position: fixed;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
        }
        .dialog {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--width);
          height: var(--height);
          background-color: white;
          border: 1px solid #EEE;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }
      `]}static get properties(){return{open:{type:Boolean,reflect:!0},width:{type:String},height:{type:String}}}constructor(){super(),this.open=!1,this.width="100px",this.height="40px"}attributeChangedCallback(t,e,o){("width"===t||"height"===t&&o)&&this.shadowRoot.host.style.setProperty(`--${t}`,o),super.attributeChangedCallback(t,e,o)}handleClose(t){t.stopPropagation(),this.onClose(t)}render(){return this.open?o`
        <div class="backdrop" @click=${this.handleClose}></div>
        <div class="dialog">
          <slot name="title"></slot>
          <slot name="content"></slot>
          <slot name="actions"></slot>
        </div>
      `:o`<div></div>`}}customElements.define("mnml-dialog",s);export{s as MnmlDialog};
