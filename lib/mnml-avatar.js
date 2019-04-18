import{a as t,b as e,c as s}from"./chunk-fd2d1ba7.js";class r extends t{static get styles(){return[super.styles,e`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #EEE;
          overflow: hidden;
        }
        .container img {
          max-width: 100%;
        }
        .container span {
          font-size: 18px;
          letter-spacing: 1.2px;
        }
      `]}static get properties(){return{src:{type:String},fullname:{type:String}}}set fullname(t){const e=this.__name;let s="";t.trim().split(" ").forEach(t=>{s+=t.charAt(0).toUpperCase()}),this.__name=s,this.requestUpdate("fullname",e)}get fullname(){return this.__name}constructor(){super(),this.src=void 0,this.__name=""}render(){return this.src?s`
      <div class="container">
        <img src="${this.src}" />
      </div>
    `:s`
        <div class="container">
          <span>${this.__name}</span>
        </div>
      `}}customElements.define("mnml-avatar",r);export{r as MnmlAvatar};
