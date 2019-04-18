import{a as e,b as s,c as t}from"./chunk-fd2d1ba7.js";class n extends e{static get styles(){return[super.styles,s`
        .container {
          display: flex;
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
      `]}render(){return t`
      <li class="container">
        <slot name="icon"></slot>
        <slot name="text"></slot>
      </li>
    `}}customElements.define("mnml-list-item",n);export{n as MnmlListItem};
