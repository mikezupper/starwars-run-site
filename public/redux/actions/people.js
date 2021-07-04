import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const PEOPLE = "PEOPLE";

// action types
export const FETCH_PEOPLE = `${PEOPLE} FETCH`;
export const SET_PEOPLE = `${PEOPLE} SET`;

export const PEOPLE_PUBLISHED = `${PEOPLE} PUBLISH`;
// action creators
export const fetchPeople = ({ query }) => fetchEntity({ query, type: PEOPLE });

export const setPeople = ({ people }) =>
  setEntity({ payload: people, type: SET_PEOPLE, feature: PEOPLE });
