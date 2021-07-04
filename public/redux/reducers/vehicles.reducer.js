import { VEHICLES_PUBLISHED, SET_VEHICLES } from "../actions/vehicles.js";

const initState = [];

export const vehiclesReducer = (vehicles = initState, action) => {
  switch (action.type) {
    case SET_VEHICLES:
      return action.payload;
    case VEHICLES_PUBLISHED:
      const msg = { type: VEHICLES_PUBLISHED, vehicles };
      postMessage(msg);
      console.log("ping message to ", msg);
      return vehicles;
    default:
      return vehicles;
  }
};
