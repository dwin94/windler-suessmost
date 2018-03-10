export default function lazyLoad() {

  // Get all of the images that are marked up to lazy load
  const images = document.querySelectorAll('[data-src]');
  const config = {
    // If the image gets within 50px in the Y axis, start the download.
    rootMargin: '50px 0px',
    threshold: 0.01
  };

  if(!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(images, image => {
      loadImage(image);
    });
    return;
  }

  // The observer for the images on the page
  const observer = new IntersectionObserver(onIntersection, config);

  images.forEach(image => {
    observer.observe(image);
  });

  function onIntersection(entries) {
    // Loop through the entries
    entries.forEach(entry => {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {

        // Stop watching and load the image
        observer.unobserve(entry.target);
        loadImage(entry.target);
      }
    });
  }

  function loadImage(image) {
    image.src = image.dataset.src;
  }
}
