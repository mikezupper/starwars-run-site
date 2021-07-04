import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const FILMS = "FILMS";

// action types
export const FETCH_FILMS = `${FILMS} FETCH`;
export const SET_FILMS = `${FILMS} SET`;

export const FILMS_PUBLISHED = `${FILMS} PUBLISH`;

// action creators
export const fetchFilms = ({ query }) => fetchEntity({ query, type: FILMS });

export const setFilms = ({ films }) =>
  setEntity({ payload: films, type: SET_FILMS, feature: FILMS });
