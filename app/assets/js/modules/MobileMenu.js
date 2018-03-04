import { onClick, toggleClass } from './Shortcuts';

export default class MobileMenu {
  constructor({ menuIcon, menuList }) {
    this.menuIcon = menuIcon;
    this.menuList = menuList;
    this.events();
  }
  events = () => {
    onClick(this.menuIcon, this.toggleMenu);
  }
  toggleMenu = () => {
    toggleClass(this.menuList, 'navigation__list--visible');
  }
}
