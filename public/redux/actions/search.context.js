// feature name
export const SEARCH_CONTEXT = "SEARCH_CONTEXT";


// action types
export const SET_SEARCH_CONTEXT = `${SEARCH_CONTEXT} SET`;


// action creators
export const setSearchContext = ({ context }) => ({
  type: SET_SEARCH_CONTEXT,
  payload: context,
  meta: { feature: SEARCH_CONTEXT },
});