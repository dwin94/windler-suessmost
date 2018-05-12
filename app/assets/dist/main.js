/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/main.js":
/*!*******************************!*\
  !*** ./app/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _LazyLoader = __webpack_require__(/*! ./modules/LazyLoader */ \"./app/assets/js/modules/LazyLoader.js\");\n\nvar _LazyLoader2 = _interopRequireDefault(_LazyLoader);\n\nvar _ImageHover = __webpack_require__(/*! ./modules/ImageHover */ \"./app/assets/js/modules/ImageHover.js\");\n\nvar _ImageHover2 = _interopRequireDefault(_ImageHover);\n\nvar _Shortcuts = __webpack_require__(/*! ./modules/Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nvar _Menu = __webpack_require__(/*! ./modules/Menu */ \"./app/assets/js/modules/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _Navigation = __webpack_require__(/*! ./modules/Navigation */ \"./app/assets/js/modules/Navigation.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar isMobile = window.getComputedStyle((0, _Shortcuts.getById)('menu-button')).display !== 'none';\n\nvar images = document.querySelectorAll('[data-src]');\n(0, _LazyLoader2.default)(images);\n(0, _ImageHover2.default)(images);\n\nvar mobileMenu = new _Menu2.default({\n  menuButton: (0, _Shortcuts.getById)('menu-button'),\n  menuList: (0, _Shortcuts.getById)('menu-list'),\n  headerArrowDown: (0, _Shortcuts.getById)('header-arrow-down'),\n  isMobile: isMobile\n});\n\nvar navigation = (0, _Shortcuts.getById)('navigation');\n(0, _Navigation.createStickyNavigation)(navigation, (0, _Shortcuts.getById)('header'), isMobile);\n(0, _Navigation.highlightCurrentSection)(document.querySelectorAll('section[id]'), navigation);\n\n//# sourceURL=webpack:///./app/assets/js/main.js?");

/***/ }),

/***/ "./app/assets/js/modules/ImageHover.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/ImageHover.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = addHoverListener;\n\nvar _Shortcuts = __webpack_require__(/*! ./Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nfunction addHoverListener(images) {\n\n    // check if style copy is supported\n    if (images.length && !document.defaultView.getComputedStyle(images[0], '').cssText) {\n        return;\n    }\n\n    Array.prototype.forEach.call(images, function (image) {\n        image.addEventListener('animationend', function () {\n            image.addEventListener('mouseenter', function () {\n                return handleMouseEnter(image);\n            });\n\n            // check if mouse is already positioned over the image\n            var mouseOverImage = image.parentElement.querySelector(':hover') === image;\n            if (mouseOverImage) {\n                handleMouseEnter(image);\n            }\n        });\n    });\n}\n\nfunction handleMouseEnter(image) {\n    var text = createTextElement(image);\n    var divContainer = createDivContainer(text, image);\n\n    image.parentNode.style.position = 'relative';\n\n    divContainer.style.animationDuration = '0s';\n    divContainer.style.position = 'absolute';\n\n    image.parentNode.appendChild(divContainer);\n    handleMouseLeave(divContainer, text);\n}\n\nfunction createTextElement(image) {\n    var text = document.createElement('p');\n    (0, _Shortcuts.addClass)(text, 'image-hover-text');\n    (0, _Shortcuts.addClass)(text, 'image-hover-text--in');\n    text.innerText = image.alt;\n    return text;\n}\n\nfunction createDivContainer(text, image) {\n    var divContainer = document.createElement('div');\n    divContainer.appendChild(text);\n    (0, _Shortcuts.addClass)(divContainer, 'image-hover-container');\n    (0, _Shortcuts.addClass)(divContainer, 'image-hover-container--in');\n\n    divContainer.style.cssText = document.defaultView.getComputedStyle(image).cssText;\n\n    return divContainer;\n}\n\nfunction handleMouseLeave(divContainer, hoverText) {\n    divContainer.addEventListener('mouseleave', function () {\n        (0, _Shortcuts.removeClass)(hoverText, 'image-hover-text--in');\n        (0, _Shortcuts.addClass)(hoverText, 'image-hover-text--out');\n\n        (0, _Shortcuts.removeClass)(divContainer, 'image-hover-container--in');\n        (0, _Shortcuts.addClass)(divContainer, 'image-hover-container--out');\n\n        window.setTimeout(function () {\n            divContainer.remove();\n        }, 300);\n    });\n}\n\n//# sourceURL=webpack:///./app/assets/js/modules/ImageHover.js?");

/***/ }),

/***/ "./app/assets/js/modules/LazyLoader.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/LazyLoader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = lazyLoad;\n\nvar _Shortcuts = __webpack_require__(/*! ./Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nfunction lazyLoad(images) {\n\n  var config = {\n    // If the image gets within 0px in the Y axis, start the download.\n    rootMargin: '0px 0px -50px 0px',\n    threshold: 1.0\n  };\n\n  if (!('IntersectionObserver' in window)) {\n    Array.prototype.forEach.call(images, function (image) {\n      loadImage(image);\n    });\n    return;\n  }\n\n  // The observer for the images on the page\n  var observer = new IntersectionObserver(onIntersection, config);\n\n  images.forEach(function (image, index) {\n    observer.observe(image);\n    image.index = index;\n    (0, _Shortcuts.addClass)(image, 'reveal-on-scroll');\n\n    resizeImage(image);\n    window.addEventListener('resize', function () {\n      resizeImage(image);\n    });\n  });\n\n  function onIntersection(entries) {\n    // Loop through the entries\n    entries.forEach(function (entry) {\n      // Are we in viewport?\n      if (entry.intersectionRatio <= 0) {\n        // not in viewport\n        return;\n      }\n\n      // Stop watching and load the image\n      observer.unobserve(entry.target);\n\n      if (entry.target.index % 2 == 0) {\n        loadImage(entry.target, function () {\n          (0, _Shortcuts.addClass)(entry.target, 'reveal-on-scroll--fade-in-right');\n        });\n      } else {\n        loadImage(entry.target, function () {\n          (0, _Shortcuts.addClass)(entry.target, 'reveal-on-scroll--fade-in-left');\n        });\n      }\n    });\n  }\n}\n\nfunction resizeImage(image) {\n  // Set image placeholder to loaded image height (scrolling fix)\n  var imageWidth = parseFloat(window.getComputedStyle(image).width);\n  var ratio = parseFloat(image.dataset.ratio);\n  var imageHeight = ratio * imageWidth;\n\n  image.style.height = imageHeight + 'px';\n}\n\nfunction loadImage(image, callback) {\n  image.src = image.dataset.src;\n  callback ? callback() : null;\n}\n\n//# sourceURL=webpack:///./app/assets/js/modules/LazyLoader.js?");

/***/ }),

/***/ "./app/assets/js/modules/Menu.js":
/*!***************************************!*\
  !*** ./app/assets/js/modules/Menu.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Shortcuts = __webpack_require__(/*! ./Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nvar _Scrolling = __webpack_require__(/*! ./Scrolling */ \"./app/assets/js/modules/Scrolling.js\");\n\nvar _Scrolling2 = _interopRequireDefault(_Scrolling);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Menu = function Menu(_ref) {\n  var _this = this;\n\n  var menuButton = _ref.menuButton,\n      menuList = _ref.menuList,\n      headerArrowDown = _ref.headerArrowDown,\n      isMobile = _ref.isMobile;\n\n  _classCallCheck(this, Menu);\n\n  this.events = function () {\n    (0, _Shortcuts.onClick)(_this.menuButton, _this.toggleMenu);\n    Array.prototype.forEach.call(_this.menuList.children, function (menuPoint) {\n      (0, _Shortcuts.onClick)(menuPoint, _this.scrollToElement);\n    });\n    (0, _Shortcuts.onClick)(_this.headerArrowDown, _this.scrollToElement);\n    (0, _Shortcuts.onClick)(window, function (event) {\n      if (!(0, _Shortcuts.getById)('navigation').contains(event.target)) {\n        _this.closeMenu();\n      }\n    });\n  };\n\n  this.toggleMenu = function () {\n    (0, _Shortcuts.toggleClass)(_this.menuList, 'navigation__list--visible');\n    (0, _Shortcuts.toggleClass)(_this.menuIcon, 'navigation__mobile-icon--close');\n  };\n\n  this.closeMenu = function () {\n    (0, _Shortcuts.removeClass)(_this.menuList, 'navigation__list--visible');\n    (0, _Shortcuts.removeClass)(_this.menuIcon, 'navigation__mobile-icon--close');\n  };\n\n  this.getMenuItemTargetPosition = function (targetHash) {\n    var target = targetHash.substring(1, targetHash.length);\n    var targetPosition = (0, _Shortcuts.getById)(target).getBoundingClientRect();\n    return targetPosition.top;\n  };\n\n  this.getMenuHeight = function () {\n    return parseFloat(window.getComputedStyle(_this.menuButton).height);\n  };\n\n  this.getNavigationHeight = function () {\n    var navigation = (0, _Shortcuts.getById)('navigation');\n    return navigation.offsetHeight;\n  };\n\n  this.scrollToElement = function (event) {\n    event.preventDefault();\n    event.stopPropagation();\n\n    var targetPosition = _this.getMenuItemTargetPosition(event.target.hash);\n\n    if (_this.isMobile) {\n      // open mobile menu\n      (0, _Scrolling2.default)(targetPosition - _this.getMenuHeight(), 1000, _this.closeMenu);\n    } else {\n      // desktop menu or closed mobile menu (header-arrow-down)\n      (0, _Scrolling2.default)(targetPosition - _this.getNavigationHeight(), 1000);\n    }\n  };\n\n  this.menuButton = menuButton;\n  this.menuIcon = menuButton.querySelector('.navigation__mobile-icon');\n  this.menuList = menuList;\n  this.headerArrowDown = headerArrowDown;\n  this.isMobile = isMobile;\n  this.events();\n};\n\nexports.default = Menu;\n\n//# sourceURL=webpack:///./app/assets/js/modules/Menu.js?");

/***/ }),

/***/ "./app/assets/js/modules/Navigation.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/Navigation.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.createStickyNavigation = createStickyNavigation;\nexports.highlightCurrentSection = highlightCurrentSection;\n\nvar _Shortcuts = __webpack_require__(/*! ./Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction createStickyNavigation(navigation, header, isMobile) {\n    if (isMobile) {\n        return;\n    }\n\n    var navigationOffsetTop = navigation.offsetTop;\n    var sticky = false;\n\n    window.addEventListener('scroll', function () {\n        var belowNavigation = window.pageYOffset >= navigationOffsetTop;\n\n        if (belowNavigation && !sticky) {\n            (0, _Shortcuts.addClass)(navigation, 'navigation--sticky');\n            header.style.marginBottom = navigation.offsetHeight + 'px';\n            sticky = true;\n        } else if (!belowNavigation && sticky) {\n            (0, _Shortcuts.removeClass)(navigation, 'navigation--sticky');\n            header.style.marginBottom = '0';\n            sticky = false;\n        }\n    });\n}\n\nfunction highlightCurrentSection(sections, navigation) {\n    var sectionArray = [].concat(_toConsumableArray(sections));\n    var menuItems = sectionArray.map(function (section) {\n        return document.querySelector('.navigation__entry > [href=\"#' + section.id + '\"]');\n    });\n    var windowCenter = window.outerHeight / 2;\n\n    window.addEventListener('scroll', function () {\n        sectionArray.forEach(function (section, index) {\n            var menuItem = menuItems[index];\n            var rect = section.getBoundingClientRect();\n\n            if (rect.top < windowCenter && rect.bottom > windowCenter) {\n                (0, _Shortcuts.addClass)(menuItem, 'navigation__link--current-section');\n            } else {\n                (0, _Shortcuts.removeClass)(menuItem, 'navigation__link--current-section');\n            }\n        });\n    });\n}\n\n//# sourceURL=webpack:///./app/assets/js/modules/Navigation.js?");

/***/ }),

/***/ "./app/assets/js/modules/Scrolling.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/Scrolling.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = smoothScroll;\n// https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page\n\nfunction smoothScroll(diff, duration, callback) {\n  var startingY = window.pageYOffset;\n  var start;\n\n  var easing = function easing(t) {\n    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  };\n\n  window.requestAnimationFrame(function step(timestamp) {\n    start = start || timestamp;\n\n    // Elapsed milliseconds since start of scrolling.\n    var time = timestamp - start;\n\n    // Get percent of completion in range [0, 1].\n    var percent = easing(Math.min(time / duration, 1));\n\n    // scrollTo(x, y)\n    window.scrollTo(0, startingY + diff * percent);\n\n    if (time < duration) {\n      window.requestAnimationFrame(step);\n    }\n  });\n\n  callback && callback();\n}\n\n//# sourceURL=webpack:///./app/assets/js/modules/Scrolling.js?");

/***/ }),

/***/ "./app/assets/js/modules/Shortcuts.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/Shortcuts.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getById = exports.getById = function getById(id) {\n  return document.getElementById(id);\n};\nvar onClick = exports.onClick = function onClick(element, fn) {\n  return element.addEventListener('click', fn);\n};\nvar toggleClass = exports.toggleClass = function toggleClass(element, className) {\n  return element.classList.toggle(className);\n};\nvar addClass = exports.addClass = function addClass(element, className) {\n  return element.classList.add(className);\n};\nvar removeClass = exports.removeClass = function removeClass(element, className) {\n  return element.classList.remove(className);\n};\n\n//# sourceURL=webpack:///./app/assets/js/modules/Shortcuts.js?");

/***/ }),

/***/ "./app/assets/styles/main.sass":
/*!*************************************!*\
  !*** ./app/assets/styles/main.sass ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/assets/styles/main.sass?");

/***/ }),

/***/ 0:
/*!*******************************************************************!*\
  !*** multi ./app/assets/js/main.js ./app/assets/styles/main.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app/assets/js/main.js */\"./app/assets/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./app/assets/styles/main.sass */\"./app/assets/styles/main.sass\");\n\n\n//# sourceURL=webpack:///multi_./app/assets/js/main.js_./app/assets/styles/main.sass?");

/***/ })

/******/ });