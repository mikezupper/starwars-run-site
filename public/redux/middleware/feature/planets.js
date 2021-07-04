import { PLANETS, FETCH_PLANETS, setPlanets } from "../../actions/planets.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";
const PLANETS_URL = "https://api.starwars.run/api/planets/?search=";

export const planetsMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_PLANETS:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: PLANETS_URL + action?.payload?.data,
          feature: PLANETS,
        }),
      ]);
      break;

    case `${PLANETS} ${API_SUCCESS}`:
      next([setPlanets({ planets: action.payload.results })]);
      break;

    // case `${PEOPLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: PEOPLE }),
    //     setLoader({ state: false, feature: PEOPLE }),
    //   ]);
    //   break;
  }
};
