import { addClass, removeClass } from './Shortcuts';

export default function addHoverListener(images) {

    // check if style copy is supported
    if(images.length && !document.defaultView.getComputedStyle(images[0], '').cssText) {
        return;
    }

    Array.prototype.forEach.call(images, image => {
        image.addEventListener('animationend', () => {
            image.addEventListener('mouseenter', () => handleMouseEnter(image));

            // check if mouse is already positioned over the image
            const mouseOverImage = image.parentElement.querySelector(':hover') === image;
            if(mouseOverImage) {
                handleMouseEnter(image);
            }
        });
    });    
}

function handleMouseEnter(image) {
    const text = createTextElement(image);
    const divContainer = createDivContainer(text, image);

    image.parentNode.style.position = 'relative';

    divContainer.style.animationDuration = '0s';
    divContainer.style.position = 'absolute';

    image.parentNode.appendChild(divContainer);
    handleMouseLeave(divContainer, text);
}

function createTextElement(image) {
    const text = document.createElement('p');
    addClass(text, 'image-hover-text');
    addClass(text, 'image-hover-text--in');
    text.innerText = image.alt;
    return text;
}

function createDivContainer(text, image) {
    const divContainer = document.createElement('div');
    divContainer.appendChild(text);
    addClass(divContainer, 'image-hover-container');
    addClass(divContainer, 'image-hover-container--in');

    divContainer.style.cssText = document.defaultView.getComputedStyle(image).cssText;    

    return divContainer;
}

function handleMouseLeave(divContainer, hoverText) {
    divContainer.addEventListener('mouseleave', () => {
        removeClass(hoverText, 'image-hover-text--in');
        addClass(hoverText, 'image-hover-text--out');

        removeClass(divContainer, 'image-hover-container--in');
        addClass(divContainer, 'image-hover-container--out');

        window.setTimeout(() => {
            divContainer.remove();
        }, 300)
    });
}