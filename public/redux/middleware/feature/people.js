import { PEOPLE, FETCH_PEOPLE, setPeople } from "../../actions/people.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";
const PEOPLE_URL = "https://api.starwars.run/api/people/?search=";

export const peopleMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_PEOPLE:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: PEOPLE_URL + action?.payload?.data,
          feature: PEOPLE,
        }),
      ]);
      break;

    case `${PEOPLE} ${API_SUCCESS}`:
      next([setPeople({ people: action.payload.results })]);
      break;

    // case `${PEOPLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: PEOPLE }),
    //     setLoader({ state: false, feature: PEOPLE }),
    //   ]);
    //   break;
  }
};
