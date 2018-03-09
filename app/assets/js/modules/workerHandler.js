if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(() => {
      console.log("Service Worker registered.");
    })
    .catch(err => {
      console.log("Service Worker failed to register.", err);
    });
}
