import { html, render } from "/scripts/htm.standalone.module.js";

export const SearchResultsHeader = ({ payload }) => {
  return html` <nav
    class="pagination"
    role="navigation"
    aria-label="pagination"
  >
    ${payload.next && html`<a class="pagination-next">Next</a>`}
    <span>Search for "${payload.searchTerm}" found: ${payload.count} </span>
    ${payload.prev && html`<a class="pagination-previous">Previous</a>`}
    <ul>
      ${payload.results.map((item) => {
        return html`<li>
          ${item.name && html`${item.name}`}
          ${item.title && html`${item.title}`}
        </li>`;
      })}
    </ul>
  </nav>`;
};
