import { html } from "/scripts/htm.standalone.module.js";

export const Header = () => {
  return html`
    <nav role="navigation" aria-label="main navigation">
      <a href="/about.html">About</a>
      <input id="email-signup" type="emal" placeholder="your@emal.com" />
      <input type="button" value="Follow The Journey" />
    </nav>
    <h1>Star Wars Run - Explore the Star Wars lore!</h1>
  `;
};
