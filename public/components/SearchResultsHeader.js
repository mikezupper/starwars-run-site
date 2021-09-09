import { html } from "/scripts/htm.standalone.module.js";

export const SearchResultsHeader = ({ payload, paginationHandler }) => {
  const disabledPrevious =
    payload.previous == undefined ? "disabled" : undefined;
  const disabledNext = payload.next == undefined ? "disabled" : undefined;
  return html`
    <nav role="navigation" aria-label="pagination">
      <button
        class="button is-link is-light is-small is-outlined"
        onclick=${paginationHandler}
        data-page="${payload.previous}"
      >
        Previous
      </button>
      <span class="p-4 m-4"
        >Search for "${payload.context.searchTerm}" found: ${payload.count}
      </span>

      <button
        class="button is-link is-light is-small is-outlined"
        onclick=${paginationHandler}
        data-page="${payload.next}"
      >
        Next
      </button>
    </nav>
  `;
};
