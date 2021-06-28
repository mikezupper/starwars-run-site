import { fetchBooks } from "./redux/actions/books.js";
import { fetchSearchResults } from "./redux/actions/search.js";
import { store } from "./redux/store.js";

onmessage = (event) => {
  const data = event;
  store.dispatch(fetchSearchResults({ query: data }));
};
