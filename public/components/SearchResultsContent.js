import { html, render } from "/scripts/htm.standalone.module.js";

export const SearchResultsContent = ({ model }) => {
  const { payload } = model;
  return html`
    <ul>
      ${payload.results.map((item) => {
        return html`<li>
          ${item.name && html`${item.name}`}
          ${item.title && html`${item.title}`}
        </li>`;
      })}
    </ul>
  `;
};
