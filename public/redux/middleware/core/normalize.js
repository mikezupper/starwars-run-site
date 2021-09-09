import { dataNormalized } from "/redux/actions/normalize.js";
import { setSearchResults } from "/redux/actions/search.js";

const extractPageRegEx = new RegExp("(.*page=)");

export const normalizeMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    // filter both by action type and metadata content
    if (action.type.includes("SET") && action.meta.normalizeKey) {
      // notify about the transformation
      dispatch(dataNormalized({ feature: action.meta.feature }));
      console.log("normal", action);
      // transform the data structure
      const payload = { ...action.payload, ...action.context };
      let next_value = payload.next
        ? payload.next.replace(extractPageRegEx, "")
        : undefined;
      let previous_value = payload.previous
        ? payload.previous.replace(extractPageRegEx, "")
        : undefined;
      const new_payload = {
        ...payload,
        next: next_value,
        previous: previous_value,
      };

      const search = { ...new_payload,context: action.meta.context };
      // fire the  document action
      next(setSearchResults({ search, normalizeKey: null }));
    } else {
      next(action);
    }
  };
