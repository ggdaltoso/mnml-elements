import{a as t,b as e,c as o}from"./chunk-277298fc.js";class r extends t{static get styles(){return[super.styles,e`
        .container {
          position: relative;
          display: inline-block;
        }
        .badge {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 2px 4px;
          background-color: #333;
          border-radius: 6px;
          font-size: 10px;
          letter-spacing: 0.8px;
          color: #eee;
        }
        .dot {
          position: absolute;
          top: 0;
          right: -8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #333;
        }
      `]}static get properties(){return{count:{type:Number},dot:{type:Boolean},maxcount:{type:Number}}}constructor(){super(),this.count=0,this.maxcount=void 0,this.dot=!1}renderDot(){return o`
      <div class="dot"></div>
    `}renderBadge(){const t=!!(this.maxcount&&this.count>this.maxcount);return o`
      <div class="badge">
        ${t?`${this.maxcount}+`:this.count}
      </div>
    `}render(){return o`
      <div class="container">
        test ${this.dot?this.renderDot():this.renderBadge()}
      </div>
    `}}customElements.define("mnml-badge",r);export{r as MnmlBadge};
