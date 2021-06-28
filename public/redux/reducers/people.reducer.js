import { PEOPLE_PUBLISHED, SET_PEOPLE } from "../actions/people.js";

const initState = [];

export const peopleReducer = (people = initState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return action.payload;
    case PEOPLE_PUBLISHED:
      postMessage({ type: PEOPLE_PUBLISHED, people });
      return people;
    default:
      return people;
  }
};
