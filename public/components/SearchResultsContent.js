import { html, render } from "/scripts/htm.standalone.module.js";

export const SearchResultsContent = ({ payload }) => {
  return html`
    <nav
      class="pagination  is-rounded"
      role="search-results"
      aria-label="search-results"
    >
      <ul>
        ${payload.results.map((item) => {
          return html`<li>
            ${item.name && html`${item.name}`}
            ${item.title && html`${item.title}`}
          </li>`;
        })}
      </ul>
    </nav>
  `;
};
