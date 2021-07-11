import * as myModule from "https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports/optimized/lit.js";

export class Header extends myModule.LitElement {
  static get styles() {
    return myModule.css`
      
    `;
  }

  // static get properties() {
  //   return {
  //     name: { type: String },
  //   };
  // }

  constructor() {
    super();
    //  this.name = "Somebody";
  }

  render() {
    return myModule.html`
    <nav role="navigation" aria-label="main navigation">
    <a href="/about.html">About</a>
    <input id="email-signup" type="emal" placeholder="your@emal.com">
    <input type="button" value="Follow The Journey">
  </nav>
  <h1>
    Star Wars Run - Explore the Star Wars lore!
  </h1>
    `;
  }
}

customElements.define("my-header", Header);
