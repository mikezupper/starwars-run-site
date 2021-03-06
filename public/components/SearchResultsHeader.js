import { html } from "/scripts/htm.standalone.module.js";

export const SearchResultsHeader = ({ payload }) => {
  return html`
    <nav
      class="pagination  is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      ${payload.prev && html`<a class="pagination-previous">Previous</a>`}
      <span>Search for "${payload.searchTerm}" found: ${payload.count} </span>
      ${payload.next && html`<a class="pagination-next">Next</a>`}
    </nav>
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
