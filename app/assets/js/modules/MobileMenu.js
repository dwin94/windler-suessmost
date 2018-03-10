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
  scrollToElement = (event) => {
    event.preventDefault();

    const targetHash = event.target.hash;
    const target = targetHash.substring(1, targetHash.length);
    const targetPosition = getById(target).getBoundingClientRect();

    //TODO: check if mobile -> if true -> toggle menu and diff - menu.height
    // this.toggleMenu();
    smoothScroll(targetPosition.top, 1000);
  }
}
