import { addClass, removeClass, getById } from './Shortcuts'

export function createStickyNavigation(navigation) {
    const isMobile = window.getComputedStyle(getById('menu-button')).display !== 'none'
    if(isMobile) {
        return;
    }

    const headerStyle = getById('header').style;
    const navigationOffsetTop = navigation.offsetTop;
    var sticky = false;
    var waiting = false;

    window.addEventListener('scroll', () => {
        const belowNavigation = window.pageYOffset >= navigationOffsetTop;

        if (belowNavigation && !sticky) {
            addClass(navigation, 'navigation--sticky');
            Object.assign(headerStyle, {
                marginBottom: `${navigation.offsetHeight}px`,
            });
            sticky = true;
        } else if(!belowNavigation && sticky) {
            removeClass(navigation, 'navigation--sticky');
            Object.assign(headerStyle, {
                marginBottom: '0',
            });
            sticky = false;
        }
    });
}