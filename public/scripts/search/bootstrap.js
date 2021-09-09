import { html, render } from "/scripts/htm.standalone.module.js";
import { fromEvent, from, combineLatest } from "https://cdn.skypack.dev/rxjs";
import {
  tap,
  map,
  debounceTime,
  scan,
  filter,
  distinctUntilChanged,
} from "https://cdn.skypack.dev/rxjs/operators";

import { SearchResultsHeader } from "/components/SearchResultsHeader.js";
import { SearchResultsContent } from "/components/SearchResultsContent.js";
import {
  fetchSearchResults,
  SET_SEARCH_RESULTS,
} from "/redux/actions/search.js";
import { Nav } from "/components/Nav.js";
import { Header } from "/components/Header.js";

//fetch the search input box
const searchTermInput = document.getElementById("search-input");
const { entity } = searchTermInput.dataset;

// tream all 'keyup' events from the search input
// ensure at least 1 character was supplied
// do not allow too many concurrent requests if nothing changes
const userSearchInput$ = fromEvent(searchTermInput, "keyup").pipe(
  map((e) => e.target.value),
  filter((v) => v.length >= 1),
  debounceTime(750),
  distinctUntilChanged()
);

//render header and footer
render(
  html`<${Nav} active_label="${entity}" />`,
  document.getElementById("main-nav")
);
render(html`<${Header} />`, document.getElementById("header"));

if (window.Worker) {
  const search_worker = new Worker("/scripts/search/worker.js", {
    type: "module",
    name: "search-worker",
  });

  //subscribe to all user input events
  userSearchInput$.subscribe((searchTerm) => {
    //save the data-search-term
    searchTermInput.setAttribute("data-search-term", searchTerm);

    //execute action creator to post action event to worker
    const evt = fetchSearchResults({ searchTerm, entity, page: 1 });

    //post message to worker
    search_worker.postMessage(evt);
  });

  //publish a default search action to worker
  const evt = fetchSearchResults({
    searchTerm: searchTermInput.dataset.searchTerm,
    entity,
    page: 1,
  });
  search_worker.postMessage(evt);

  var searchResultWorkerOutput$ = fromEvent(search_worker, "message").pipe(
    map((e) => e.data),
    filter((event) => event.type.includes(SET_SEARCH_RESULTS)),
    map((event) => event.payload)
  );

  searchResultWorkerOutput$.subscribe((payload) => {
    const paginationHandler = (e) => {
      const { page } = e.target.dataset;
      //publish a default message
      const evt = fetchSearchResults({
        searchTerm: searchTermInput.dataset.searchTerm,
        entity,
        page,
      });
      search_worker.postMessage(evt);
    };
    render(
      html`<${SearchResultsHeader}
        payload="${payload}"
        paginationHandler="${paginationHandler}"
      />`,
      document.getElementById("search-header")
    );
    render(
      html`<${SearchResultsContent} payload="${payload}" />`,
      document.getElementById("search-results")
    );
  });
}
