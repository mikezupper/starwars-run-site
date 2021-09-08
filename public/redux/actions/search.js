// feature name
export const SEARCH = "SEARCH";

// action types
export const FETCH_SEARCH_RESULTS = `${SEARCH} FETCH`;
export const SET_SEARCH_RESULTS = `${SEARCH} SET`;

// action creators
export const fetchSearchResults = ({ searchTerm, entity, page }) => ({
  type: FETCH_SEARCH_RESULTS,
  payload: { searchTerm, entity, page },
});

export const setSearchResults = ({ search, context }) => ({
  type: SET_SEARCH_RESULTS,
  payload: search,
  context,
  meta: { feature: SEARCH },
});
