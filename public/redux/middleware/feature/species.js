import { SPECIES, FETCH_SPECIES, setSpecies } from "../../actions/species.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";
const SPECIES_URL = "https://api.starwars.run/api/species/?search=";

export const speciesMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_SPECIES:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: SPECIES_URL + action?.payload?.data,
          feature: SPECIES,
        }),
      ]);
      break;

    case `${SPECIES} ${API_SUCCESS}`:
      next([setSpecies({ species: action.payload.results })]);
      break;

    // case `${PEOPLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: PEOPLE }),
    //     setLoader({ state: false, feature: PEOPLE }),
    //   ]);
    //   break;
  }
};
