import{a as t,b as e,c as i}from"./chunk-fd2d1ba7.js";class s extends t{static get styles(){return[super.styles,e`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        .container {
          position: relative;
          margin: 0;
          padding: 0;
          font-size: 14px;
          color: #777;
        }
        .image {
          max-width: 100%;
        }
        .caption {
          position: absolute;
          bottom: 16px;
          right: 16px;
          padding: 6px 8px;
          background: #333;
          color: #EEE;
        }
      `]}static get properties(){return{src:{type:String},caption:{type:String}}}constructor(){super(),this.src=void 0,this.caption=""}renderCaption(){return i`
      <span class="caption">${this.caption}</span>
    `}render(){return i`
      <div class="container">
        <img class="image" src="${this.src}" alt="${this.caption}" />
        ${this.caption.length>0?this.renderCaption():null}
      </div>
    `}}customElements.define("mnml-card-image",s);export{s as MnmlCardImage};
