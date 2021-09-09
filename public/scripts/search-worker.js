import { store } from "../redux/store.js";
onmessage = (event) => {
  store.dispatch(event.data);
  //console.log("store - current state:",store.getState())
};