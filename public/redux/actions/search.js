// feature name
export const SEARCH = "[Search]";

// action types
export const FETCH_SEARCH_RESULTS = `${SEARCH} FETCH`;
export const SET_SEARCH_RESULTS = `${SEARCH} SET`;

// action creators
export const fetchSearchResults = ({ query }) => ({
  type: FETCH_SEARCH_RESULTS,
  payload: query,
});

export const setSearchResults = ({ search }) => ({
  type: SET_SEARCH_RESULTS,
  payload: search,
  meta: { feature: SEARCH },
});
