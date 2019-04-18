import{a as t,b as s,c as e}from"./chunk-fd2d1ba7.js";class n extends t{static get styles(){return[super.styles,s`
        .container {
          display: block;
          padding: 8px 12px;
          list-style-type: none;
        }
      `]}render(){return e`
      <span class="container">
        <slot></slot>
      </span>
    `}firstUpdated(){this.setAttribute("slot","text")}}customElements.define("mnml-list-item-text",n);export{n as MnmlListItemText};
