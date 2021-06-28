import {
  VEHICLE,
  FETCH_VEHICLE,
  SET_VEHICLE,
  fetchVehicle,
  setVehicle,
} from "../../actions/vehicles.js";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api.js";

const VEHICLE_URL = "https://swapi.dev/api/vehicle/?search=";

export const vehicleMiddleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_VEHICLE:
      next([
        apiRequest({
          body: null,
          method: "GET",
          url: VEHICLE_URL + action?.payload?.data,
          feature: VEHICLE,
        }),
      ]);
      break;

    case `${VEHICLE} ${API_SUCCESS}`:
      next([setPeople({ vehicles: action.payload.results })]);
      break;

    // case `${VEHICLE} ${API_ERROR}`:
    //   next([
    //     setNotification({ message: action.payload.message, feature: VEHICLE }),
    //     setLoader({ state: false, feature: VEHICLE }),
    //   ]);
    //   break;
  }
};
