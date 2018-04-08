import { onClick, addClass, removeClass, getById } from './Shortcuts';
import smoothScroll from './Scrolling';

export default class Menu {
  constructor({ menuIcon, menuList, headerArrowDown }) {
    this.menuIcon = menuIcon;
    this.menuList = menuList;
    this.headerArrowDown = headerArrowDown;
    this.events();
  }

  events = () => {
    onClick(this.menuIcon, this.openMenu);
    Array.prototype.forEach.call(this.menuList.children, menuPoint => {
      onClick(menuPoint, this.scrollToElement)
    });
    onClick(this.headerArrowDown, this.scrollToElement);
  }

  openMenu = () => addClass(this.menuList, 'navigation__list--visible');

  closeMenu = () => removeClass(this.menuList, 'navigation__list--visible');

  getMenuItemTargetPosition = (targetHash) => {
    const target = targetHash.substring(1, targetHash.length);
    const targetPosition = getById(target).getBoundingClientRect();
    return targetPosition.top;
  }

  getHeaderHeight = () => {
    const navigation = getById('navigation');
    return parseFloat(window.getComputedStyle(this.menuIcon).height);
  }

  isVisible = () => {
    return window.getComputedStyle(this.menuIcon).display !== 'none';
  }

  scrollToElement = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const targetPosition = this.getMenuItemTargetPosition(event.target.hash);

    if(this.isVisible()) {
      // open mobile menu
      smoothScroll(targetPosition - this.getHeaderHeight(), 1000, this.closeMenu);
    } else {
      // desktop menu or closed mobile menu (header-arrow-down)
      smoothScroll(targetPosition, 1000);
    }
  }
}
