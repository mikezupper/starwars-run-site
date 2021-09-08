import { html } from "/scripts/htm.standalone.module.js";

export const SearchResultsHeader = ({ payload, paginationHandler }) => {
  const disabledPrevious = payload.previous ? "disabled" : "";
  const disabledNext = payload.next ? "disabled" : "";
  console.log("header", disabledNext, disabledPrevious);
  return html`
    <nav class="block" role="navigation" aria-label="pagination">
      <span>Search for "${payload.searchTerm}" found: ${payload.count} </span>

      <a
        class="pagination-link"
        onclick=${paginationHandler}
        data-page="${payload.previous}"
        >Previous</a
      >
      <a
        class="pagination-link"
        onclick=${paginationHandler}
        data-page="${payload.next}"
        >Next</a
      >
    </nav>
  `;
};
