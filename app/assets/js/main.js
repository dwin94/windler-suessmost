import lazyLoad from './modules/LazyLoader';
import addHoverListener from './modules/ImageHover';
import { getById } from './modules/Shortcuts';
import Menu from './modules/Menu';
import { createStickyNavigation, highlightCurrentSection } from './modules/Navigation';

const isMobile = window.getComputedStyle(getById('menu-button')).display !== 'none'

const productImages = document.querySelectorAll('.products [data-src]');
lazyLoad(productImages, true);
addHoverListener(productImages);

const otherImages = document.querySelectorAll('[data-src]:not(.reveal-on-scroll)');
lazyLoad(otherImages, false);

const mobileMenu = new Menu({
  menuButton: getById('menu-button'),
  menuList: getById('menu-list'),
  headerArrowDown: getById('header-arrow-down'),
  isMobile: isMobile,
});

const navigation = getById('navigation');
createStickyNavigation(navigation, getById('header'), isMobile);
highlightCurrentSection(document.querySelectorAll('section[id]'), navigation);

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
}
