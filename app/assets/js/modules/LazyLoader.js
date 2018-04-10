export default function lazyLoad() {

  // Get all of the images that are marked up to lazy load
  const images = document.querySelectorAll('[data-src]');
  const config = {
    // If the image gets within 0px in the Y axis, start the download.
    rootMargin: '0px 0px',
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

    // Set image placeholder to loaded image height (scrolling fix)
    const imageWidth = parseFloat(window.getComputedStyle(image).width);
    const ratio = parseFloat(image.dataset.ratio);
    const imageHeight = ratio * imageWidth;

    image.style.height = `${imageHeight}px`;
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
    image.style.height = 'auto';
  }
}
