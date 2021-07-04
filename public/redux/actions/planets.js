import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const PLANETS = "PLANETS";

// action types
export const FETCH_PLANETS = `${PLANETS} FETCH`;
export const SET_PLANETS = `${PLANETS} SET`;

export const PLANETS_PUBLISHED = `${PLANETS} PUBLISH`;
// action creators
export const fetchPlanets = ({ query }) =>
  fetchEntity({ query, type: PLANETS });

export const setPlanets = ({ planets }) =>
  setEntity({ payload: planets, type: SET_PLANETS, feature: PLANETS });
