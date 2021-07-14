import {
  VEHICLES,
  FETCH_VEHICLES,
  setVehicles,
} from "../../actions/vehicles.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";

const VEHICLES_URL = "https://api.starwars.run/api/vehicles/?search=";

export const vehiclesMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_VEHICLES:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: VEHICLES_URL + action?.payload?.data,
          feature: VEHICLES,
        }),
      ]);
      break;

    case `${VEHICLES} ${API_SUCCESS}`:
      next([setVehicles({ vehicles: action.payload.results })]);
      break;

    // case `${VEHICLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: VEHICLE }),
    //     setLoader({ state: false, feature: VEHICLE }),
    //   ]);
    //   break;
  }
};
