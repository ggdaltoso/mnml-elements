import{a as e,b as t,c as s}from"./chunk-277298fc.js";class r extends e{static get styles(){return[super.styles,t`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #eee;
          overflow: hidden;
        }
        .container img {
          max-width: 100%;
        }
        .container span {
          font-size: 18px;
          letter-spacing: 1.2px;
        }
      `]}static get properties(){return{src:{type:String},fullname:{type:String}}}set fullname(e){const t=this.__name;let s="";e.trim().split(" ").forEach(e=>{s+=e.charAt(0).toUpperCase()}),this.__name=s,this.requestUpdate("fullname",t)}get fullname(){return this.__name}constructor(){super(),this.src=void 0,this.__name=""}render(){return this.src?s`
      <div class="container">
        <img src="${this.src}" />
      </div>
    `:s`
        <div class="container">
          <span>${this.__name}</span>
        </div>
      `}}customElements.define("mnml-avatar",r);export{r as MnmlAvatar};
