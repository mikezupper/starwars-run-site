import * as myModule from "https://cdn.skypack.dev/pin/lit@v2.0.0-rc.2-TSkkpP2AxiJKOJvPcy1M/mode=imports/optimized/lit.js";

export class Nav extends myModule.LitElement {
  static get styles() {
    return myModule.css`
 
    `;
  }

  static get properties() {
    return {
      _active: { state: true },
    };
  }

  constructor() {
    super();
    this.state = [
      {
        active: false,
        entity: "people",
        label: "People",
      },
      {
        active: false,
        entity: "planets",
        label: "Planets",
      },
      {
        active: true,
        entity: "films",
        label: "Films",
      },

      {
        active: false,
        entity: "species",
        label: "Species",
      },

      {
        active: false,
        entity: "starships",
        label: "Starships",
      },
      ,
      {
        active: false,
        entity: "vehicles",
        label: "Vehicles",
      },
    ];
  }

  render() {
    return myModule.html`
    <ul>
    <li><a href="/"><span>Home</span></a></li>
    ${this.state.map((link) => {
      return myModule.html`<li>
        <a href="/pages/${link.entity}/index.html"><span>${link.label}</span></a>
      </li>`;
    })}
    </ul>`;
  }
}

customElements.define("my-nav", Nav);
