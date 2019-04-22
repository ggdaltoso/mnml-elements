import{a as e,b as t,c as s}from"./chunk-277298fc.js";class i extends e{static get styles(){return[super.styles,t`
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
      `]}static get properties(){return{label:{type:String}}}constructor(){super(),this.label=void 0}render(){return s`
      <span class="title">${this.label}</span>
    `}firstUpdated(){this.setAttribute("slot","title")}handleDimensionChange(e,t){}}customElements.define("mnml-dialog-title",i);export{i as MnmlDialogTitle};
