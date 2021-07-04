import {
  STARSHIPS,
  FETCH_STARSHIPS,
  setStarships,
} from "../../actions/starships.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";
const STARSHIPS_URL = "https://api.starwars.run/api/starships/?search=";

export const starshipsMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_STARSHIPS:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: STARSHIPS_URL + action?.payload?.data,
          feature: STARSHIPS,
        }),
      ]);
      break;

    case `${STARSHIPS} ${API_SUCCESS}`:
      next([setStarships({ starships: action.payload.results })]);
      break;

    // case `${PEOPLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: PEOPLE }),
    //     setLoader({ state: false, feature: PEOPLE }),
    //   ]);
    //   break;
  }
};
