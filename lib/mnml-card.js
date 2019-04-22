import{a as e,b as s,c as o}from"./chunk-277298fc.js";class t extends e{static get styles(){return[super.styles,s`
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }
        .card {
          min-width: 300px;
          border: 1px solid #eee;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(100, 100, 100, 0.1);
        }
      `]}render(){return o`
      <div class="card">
        <slot name="title"></slot>
        <slot name="image"></slot>
        <slot name="content"></slot>
        <slot name="actions"></slot>
      </div>
    `}}customElements.define("mnml-card",t);export{t as MnmlCard};
