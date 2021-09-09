import {
  SEARCH,
  SET_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS,
  fetchSearchResults,
  setSearchResults,
} from "../../actions/search.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";

export const searchMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      let { searchTerm, entity, page } = action?.payload;
      //TODO: need to externalize some prpoerites
      let url = new URL(`https://api.starwars.run/api/${entity}/`);
      url.searchParams.set("search", searchTerm);
      if (page) url.searchParams.set("page", page);

      next([
        apiRequest({
          method: "GET",
          url,
          feature: SEARCH,
          context: {
            entity,
            searchTerm,
            page
          },
        }),
      ]);
      break;

    case `${SEARCH} ${API_SUCCESS}`:
      next([
        setSearchResults({
          search: action.payload,
          context: action.context,
          normalizeKey: "url",
        }),
      ]);
      break;

    case `${SEARCH} ${API_ERROR}`:
      // console.log("search erorr",action);
      // next([
      //   setNotification({ message: action.payload.message, feature: SEARCH }),
      //   setLoader({ state: false, feature: SEARCH }),
      // ]);
      break;
  }
};
