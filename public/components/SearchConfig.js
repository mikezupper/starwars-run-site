import { fromEvent } from "https://cdn.skypack.dev/rxjs";
import {
  tap,
  map,
  debounceTime,
  scan,
  filter,
  distinctUntilChanged,
} from "https://cdn.skypack.dev/rxjs/operators";
import { fetchSearchResults } from "../redux/actions/search.js";

export const searchConfig = (
  name,
  defaultSearchTerm,
  searchInputElement,
  channelPort
) => {
  //load the webworker (if enabled)
  if (window.Worker) {
    const reduxWorker = new Worker("/worker.js", { type: "module", name });
    const { entity } = searchInputElement.dataset;
    const page = "1";
    let userInputSubscription;
    //send default search for Skywalker
    reduxWorker.postMessage(
      fetchSearchResults({
        searchTerm: defaultSearchTerm,
        entity,
        page: page,
      })
    );

    //monitor the search input for neew events to fire off
    var userSearchInput$ = fromEvent(searchInputElement, "keyup").pipe(
      map((e) => {
        return fetchSearchResults({
          searchTerm: e.target.value,
          entity,
          page,
        });
      }),
      debounceTime(750),
      tap((json) => console.log("yo ho ho ", json)),
      filter((json) => json.payload.searchTerm.length > 2),
      distinctUntilChanged()
    );
    //stream all text changes to  worker
    userInputSubscription = userSearchInput$.subscribe((data) => {
      reduxWorker.postMessage(data);
    });
    
    //script the HTML output
    //once worker processes event, respond to output event
    reduxWorker.onmessage = (e) => {
      const { payload } = e?.data;
      channelPort.postMessage(payload);
    };
  }
};
