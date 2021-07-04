import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const SPECIES = "species";

// action types
export const FETCH_SPECIES = `${SPECIES} FETCH`;
export const SET_SPECIES = `${SPECIES} SET`;
export const SPECIES_PUBLISHED = `${SPECIES} PUBLISHED`;

// action creators
export const fetchSpecies = ({ query }) =>
  fetchEntity({ query, type: SPECIES });

export const setSpecies = ({ species }) =>
  setEntity({ payload: species, type: SET_SPECIES, feature: SPECIES });
