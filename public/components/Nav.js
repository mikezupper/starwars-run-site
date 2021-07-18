import { html } from "/scripts/htm.standalone.module.js";

const links = [
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

export const Nav = () => {
  return html`<nav>
    <ul>
      <li>
        <a href="/"><span>Home</span></a>
      </li>
      ${links.map((link) => {
        return html`<li>
          <a href="/pages/${link.entity}/index.html"
            ><span>${link.label}</span></a
          >
        </li>`;
      })}
    </ul>
  </nav>`;
};
