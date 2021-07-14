// action creators
export const fetchEntity = ({ query, type }) => ({
  type,
  payload: query,
});

export const setEntity = ({ payload, type, feature }) => ({
  type,
  payload,
  meta: { feature },
});
