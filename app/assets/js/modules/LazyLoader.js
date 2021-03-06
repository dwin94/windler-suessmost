import { addClass } from './Shortcuts';

export default function lazyLoad(images, hasAnimation) {

  const config = hasAnimation
    ? {
      rootMargin: '0px 0px -50px 0px',
      threshold: 1.0
    }
    : {
      // If the image gets within 0px in the Y axis, start the download.
      rootMargin: '0px 0px 100% 0px',
      threshold: 1.0
  };

  if(!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(images, image => {
      loadImage(image);
    });
    return;
  }

  // The observer for the images on the page
  const observer = new IntersectionObserver(onIntersection, config);

  images.forEach((image, index) => {
    observer.observe(image);
    image.index = index;
    if (hasAnimation) {
      addClass(image, 'reveal-on-scroll');
    }

    resizeImage(image);
    window.addEventListener('resize', () => {
      resizeImage(image);
    });
  });

  function onIntersection(entries) {
    // Loop through the entries
    entries.forEach(entry => {
      // Are we in viewport?
      if (entry.intersectionRatio <= 0) {
        // not in viewport
        return;
      }

      // Stop watching and load the image
      observer.unobserve(entry.target);

      loadImage(entry.target, () => hasAnimation ? addFadeInDirection(entry) : null);
    });
  }

  function addFadeInDirection(entry) {
    if(entry.target.index % 2 == 0) {
      addClass(entry.target, 'reveal-on-scroll--fade-in-right');
    } else {
      addClass(entry.target, 'reveal-on-scroll--fade-in-left');
    }
  }
}

function resizeImage(image) {
  // Set image placeholder to loaded image height (scrolling fix)
  const imageWidth = parseFloat(window.getComputedStyle(image).width);
  const ratio = parseFloat(image.dataset.ratio);
  const imageHeight = ratio * imageWidth;

  image.style.height = `${imageHeight}px`;
}

function loadImage(image, callback) {
  image.src = image.dataset.src;
  callback ? callback() : null;
}