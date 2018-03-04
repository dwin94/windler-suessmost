import { getById } from './modules/Shortcuts';
import MobileMenu from './modules/MobileMenu';

const mobileMenu = new MobileMenu({
  menuIcon: getById('menu-icon'),
  menuList: getById('menu-list')
});
