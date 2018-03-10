import lazyLoad from './modules/LazyLoader';
import { getById } from './modules/Shortcuts';
import MobileMenu from './modules/MobileMenu';

lazyLoad();

const mobileMenu = new MobileMenu({
  menuIcon: getById('menu-icon'),
  menuList: getById('menu-list')
});
