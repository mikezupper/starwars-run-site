const { tap, map, debounceTime, scan, filter, distinctUntilChanged } =
  rxjs.operators;
const { from } = rxjs;

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

    //send default search for Skywalker
    reduxWorker.postMessage({
      searchTerm: defaultSearchTerm,
      entity,
    });

    //monitor the search input for neew events to fire off
    var userSearchInput$ = rxjs.fromEvent(searchInputElement, "keyup").pipe(
      map((e) => {
        return {
          searchTerm: e.target.value,
          entity,
        };
      }),
      debounceTime(750),
      filter((json) => json.searchTerm.length > 2),
      distinctUntilChanged()
    );
    //stream all text changes to  worker
    userSearchInput$.subscribe((data) => {
      reduxWorker.postMessage(data);
    });
    //script the HTML output
    //once worker processes event, respond to output event
    reduxWorker.onmessage = (e) => {
      const { payload } = e?.data;
      console.log("channelPort", channelPort);
      channelPort.postMessage(payload);
    };
  }
};
