if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      registration.pushManager.getSubscription();
    })
    .catch((e) => {
      console.log(e);
    });
}
