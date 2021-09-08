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
  let output = html` <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand" id="main-nav-burger">
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="main-nav-bar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="main-nav-links" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Home </a>
        ${links.map((link) => {
          const { entity, label } = link;
          return html`
            <a class="navbar-item" href="/pages/${entity}/index.html"
              >${label}</a
            >
          `;
        })}
      </div>
    </div>
  </nav>`;

  return output;
};

export const NavActions = () => {
  const bugerIcon = document.querySelector("#main-nav-burger");
  const navBarMenu = document.querySelector("#main-nav-links");

  bugerIcon.addEventListener("click", () => {
    navBarMenu.classList.toggle("is-active");
  });
};
