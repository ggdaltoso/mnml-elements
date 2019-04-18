import { LitElement, css } from 'lit-element';

export class Base extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
    `;
  }
}

export * from 'lit-element';
export { classMap } from 'lit-html/directives/class-map.js';