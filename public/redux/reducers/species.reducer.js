import { SET_SPECIES, SPECIES_PUBLISHED } from "../actions/species.js";

const initState = [];

export const speciesReducer = (species = initState, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return action.payload;
    case SPECIES_PUBLISHED:
      postMessage({ type: SPECIES_PUBLISHED, species });
      return species;
    default:
      return species;
  }
};
