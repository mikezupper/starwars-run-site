import { PLANETS_PUBLISHED, SET_PLANETS } from "../actions/planets.js";

const initState = [];

export const planetsReducer = (planets = initState, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return action.payload;
    case PLANETS_PUBLISHED:
      postMessage({ type: PLANETS_PUBLISHED, planets });
      return planets;
    default:
      return planets;
  }
};
