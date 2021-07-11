import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const STARSHIPS = "starships";

// action types
export const FETCH_STARSHIPS = `${STARSHIPS} FETCH`;
export const SET_STARSHIPS = `${STARSHIPS} SET`;
export const STARSHIPS_PUBLISHED = `${STARSHIPS} PUBLISHED`;

// action creators
export const fetchStarships = ({ query }) =>
  fetchEntity({ query, type: STARSHIPS });

export const setStarships = ({ starships }) =>
  setEntity({ payload: starships, type: SET_STARSHIPS, feature: STARSHIPS });
