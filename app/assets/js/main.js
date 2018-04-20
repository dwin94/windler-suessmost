import lazyLoad from './modules/LazyLoader';
import addHoverListener from './modules/ImageHover';
import { getById } from './modules/Shortcuts';
import Menu from './modules/Menu';
import { createStickyNavigation } from './modules/Navigation';

const images = document.querySelectorAll('[data-src]');
lazyLoad(images);
addHoverListener(images);

const mobileMenu = new Menu({
  menuButton: getById('menu-button'),
  menuList: getById('menu-list'),
  headerArrowDown: getById('header-arrow-down')
});

const navigation = getById('navigation');
createStickyNavigation(navigation);