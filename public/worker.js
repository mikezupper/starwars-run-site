import { fetchSearchResults } from "./redux/actions/search.js";
import { store } from "./redux/store.js";

onmessage = (event) => {
  const { searchTerm, entity } = event.data;
  store.dispatch(fetchSearchResults({ searchTerm, entity }));
};
