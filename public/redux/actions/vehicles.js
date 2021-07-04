import { fetchEntity, setEntity } from "./entity.js";

// feature name
export const VEHICLES = "VEHICLES";

// action types
export const FETCH_VEHICLES = `${VEHICLES} FETCH`;
export const SET_VEHICLES = `${VEHICLES} SET`;

export const VEHICLES_PUBLISHED = `${VEHICLES} PUBLISHED`;

// action creators
export const fetchVehicles = ({ query }) => fetchEntity({ query, VEHICLES });

export const setVehicles = ({ vehicles }) =>
  setEntity({ vehicles, SET_VEHICLES, VEHICLES });
