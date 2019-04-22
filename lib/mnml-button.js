import{a as t,b as e,c as r,d as o}from"./chunk-277298fc.js";class a extends t{static get styles(){return[super.styles,e`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        button {
          padding: 6px 10px;
          border: none;
          border-radius: 4px;
          font-size: 13px;
          letter-spacing: 1.1px;
        }
        .flat {
          background: none;
        }
        .flat:hover {
          background: #eee;
        }
        .primary {
          background-color: #333;
          color: #eee;
        }
        .primary:hover {
          background-color: #777;
        }
        .flat,
        .primary {
          transition: 200ms background linear;
        }
      `]}static get properties(){return{flat:{type:Boolean},primary:{type:Boolean}}}constructor(){super(),this.flat=!1,this.primary=!1}render(){const t={flat:this.flat,primary:this.primary};return r`
      <button class="${o(t)}">
        <slot></slot>
      </button>
    `}}customElements.define("mnml-button",a);export{a as MnmlButton};
