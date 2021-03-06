import {
  FILMS,
  FETCH_FILMS,
  setFilms,
  publishFilms,
} from "../../actions/films.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";

const FILMS_URL = "https://api.starwars.run/api/films/?search=";
export const filmsMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_FILMS:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: FILMS_URL + action?.payload?.data,
          feature: FILMS,
        }),
      ]);
      break;

    case `${FILMS} ${API_SUCCESS}`:
      const films = action.payload.results;
      next([setFilms({ films }), publishFilms({ films })]);
      break;

    // case `${PEOPLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: PEOPLE }),
    //     setLoader({ state: false, feature: PEOPLE }),
    //   ]);
    //   break;
  }
};
