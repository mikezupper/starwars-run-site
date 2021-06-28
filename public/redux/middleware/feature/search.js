import {
  SEARCH,
  SET_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS,
  fetchSearchResults,
  setSearchResults,
} from "../../actions/search.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";
import { VEHICLE } from "../../actions/vehicles.js";
import { PEOPLE } from "../../actions/people.js";

const entity_types = [VEHICLE, PEOPLE];

export const searchMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      let searchTerm = action?.payload?.data;

      let actions = new Array();
      entity_types.forEach((entity) =>
        actions.push(
          apiRequest({
            body: null,
            method: "GET",
            url: "https://swapi.dev/api/" + entity + "/?search=" + searchTerm,
            feature: SEARCH,
            context: {
              entity,
              searchTerm,
            },
          })
        )
      );
      next([...actions]);
      break;

    case `${SEARCH} ${API_SUCCESS}`:
      console.log("succee!!!!", action);

      next([setSearchResults({ search: action.payload })]);
      break;

    // case `${SEARCH} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: SEARCH }),
    //     setLoader({ state: false, feature: SEARCH }),
    //   ]);
    //   break;
  }
};
