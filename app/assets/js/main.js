import lazyLoad from './modules/LazyLoader';
import { getById } from './modules/Shortcuts';
import Menu from './modules/MobileMenu';

lazyLoad();

const mobileMenu = new Menu({
  menuButton: getById('menu-button'),
  menuList: getById('menu-list'),
  headerArrowDown: getById('header-arrow-down')
});
