import { html } from "/scripts/htm.standalone.module.js";
import { fetchSearchResults } from "/redux/actions/search.js";
import { setSearchContext } from "../redux/actions/search.context.js";

export const SearchResultsHeader = ({ model }) => {
  const { payload } = model;
  console.log("SearchResultsHeader pay", model);
  return html`
    <nav
      class="pagination  is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      ${payload.prev && html`<a class="pagination-previous">Previous</a>`}
      <span>Search for "${payload.searchTerm}" found: ${payload.count} </span>
      ${payload.next &&
      html`<a
        class="pagination-next"
        id="pagination-next"
        data-page="2"
        onClick=${model.paginationHandler}
        >Next</a
      >`}
    </nav>
  `;
};
