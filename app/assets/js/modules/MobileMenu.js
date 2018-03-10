import { onClick, toggleClass, getById } from './Shortcuts';
import smoothScroll from './Scrolling';

export default class MobileMenu {
  constructor({ menuIcon, menuList }) {
    this.menuIcon = menuIcon;
    this.menuList = menuList;
    this.events();
  }
  events = () => {
    onClick(this.menuIcon, this.toggleMenu);
    Array.prototype.forEach.call(this.menuList.children, menuPoint => {
      onClick(menuPoint, this.scrollToElement)
    });
  }
  toggleMenu = () => {
    toggleClass(this.menuList, 'navigation__list--visible');
  }
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
      smoothScroll(targetPosition - this.getHeaderHeight(), 1000, this.toggleMenu);
    } else {
      smoothScroll(targetPosition, 1000);
    }
  }
}
