import { html } from "/scripts/htm.standalone.module.js";

const links = [
  {
    entity: "people",
    label: "People",
  },
  {
    entity: "planets",
    label: "Planets",
  },
  {
    entity: "films",
    label: "Films",
  },

  {
    entity: "species",
    label: "Species",
  },

  {
    entity: "starships",
    label: "Starships",
  },
  ,
  {
    entity: "vehicles",
    label: "Vehicles",
  },
];

export const Nav = ({ active_label }) => {
  const home_class = active_label == "home" ? "is-active" : " ";
  return html`<ul class="tabs">
    <li class="${home_class}">
      <a href="/">Home</a>
    </li>
    ${links.map((link) => {
      const { entity, label } = link;
      const cssClass = active_label == entity ? "is-active" : "";

      return html`<li class="${cssClass}">
        <a href="/pages/${entity}/index.html">${label}</a>
      </li>`;
    })}
  </ul>`;
};
