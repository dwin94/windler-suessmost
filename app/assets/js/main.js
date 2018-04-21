import lazyLoad from './modules/LazyLoader';
import addHoverListener from './modules/ImageHover';
import { getById } from './modules/Shortcuts';
import Menu from './modules/Menu';
import { createStickyNavigation, highlightCurrentSection } from './modules/Navigation';

const isMobile = window.getComputedStyle(getById('menu-button')).display !== 'none'

const images = document.querySelectorAll('[data-src]');
lazyLoad(images);
addHoverListener(images);

const mobileMenu = new Menu({
  menuButton: getById('menu-button'),
  menuList: getById('menu-list'),
  headerArrowDown: getById('header-arrow-down'),
  isMobile: isMobile,
});

const navigation = getById('navigation');
createStickyNavigation(navigation, getById('header'), isMobile);
highlightCurrentSection(document.querySelectorAll('section[id]'), navigation);
