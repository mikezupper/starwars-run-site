import { store } from "./redux/store.js";
onmessage = (event) => {
  console.log("worker got mess", event.data);
  store.dispatch(event.data);
  console.log("STORE.GEET",store.getState())
};
