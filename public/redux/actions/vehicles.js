import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const VEHICLE = "vehicles";

// action types
export const FETCH_VEHICLE = `${VEHICLE} FETCH`;
export const SET_VEHICLE = `${VEHICLE} SET`;

// action creators
export const fetchVehicle = ({ query }) => fetchEntity({ query, VEHICLE });

export const setVehicle = ({ vehicle }) =>
  setEntity({ vehicle, SET_VEHICLE, VEHICLE });
