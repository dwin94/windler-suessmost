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
eval("\n\n__webpack_require__(/*! ./modules/LazyLoader */ \"./app/assets/js/modules/LazyLoader.js\");\n\nvar _Shortcuts = __webpack_require__(/*! ./modules/Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nvar _MobileMenu = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/js/modules/MobileMenu.js\");\n\nvar _MobileMenu2 = _interopRequireDefault(_MobileMenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mobileMenu = new _MobileMenu2.default({\n  menuIcon: (0, _Shortcuts.getById)('menu-icon'),\n  menuList: (0, _Shortcuts.getById)('menu-list')\n});\n\n//# sourceURL=webpack:///./app/assets/js/main.js?");

/***/ }),

/***/ "./app/assets/js/modules/LazyLoader.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/LazyLoader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Get all of the images that are marked up to lazy load\nvar images = document.querySelectorAll('[data-src]');\nvar config = {\n  // If the image gets within 50px in the Y axis, start the download.\n  rootMargin: '50px 0px',\n  threshold: 0.01\n};\n\n// The observer for the images on the page\nvar observer = new IntersectionObserver(onIntersection, config);\n\nimages.forEach(function (image) {\n  observer.observe(image);\n});\n\nfunction onIntersection(entries) {\n  // Loop through the entries\n  entries.forEach(function (entry) {\n    // Are we in viewport?\n    if (entry.intersectionRatio > 0) {\n\n      // Stop watching and load the image\n      observer.unobserve(entry.target);\n      var image = entry.target;\n      image.src = image.dataset.src;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./app/assets/js/modules/LazyLoader.js?");

/***/ }),

/***/ "./app/assets/js/modules/MobileMenu.js":
/*!*********************************************!*\
  !*** ./app/assets/js/modules/MobileMenu.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Shortcuts = __webpack_require__(/*! ./Shortcuts */ \"./app/assets/js/modules/Shortcuts.js\");\n\nvar _Scrolling = __webpack_require__(/*! ./Scrolling */ \"./app/assets/js/modules/Scrolling.js\");\n\nvar _Scrolling2 = _interopRequireDefault(_Scrolling);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MobileMenu = function MobileMenu(_ref) {\n  var _this = this;\n\n  var menuIcon = _ref.menuIcon,\n      menuList = _ref.menuList;\n\n  _classCallCheck(this, MobileMenu);\n\n  this.events = function () {\n    (0, _Shortcuts.onClick)(_this.menuIcon, _this.toggleMenu);\n    Array.prototype.forEach.call(_this.menuList.children, function (menuPoint) {\n      (0, _Shortcuts.onClick)(menuPoint, _this.scrollToElement);\n    });\n  };\n\n  this.toggleMenu = function () {\n    (0, _Shortcuts.toggleClass)(_this.menuList, 'navigation__list--visible');\n  };\n\n  this.scrollToElement = function (event) {\n    event.preventDefault();\n\n    var targetHash = event.target.hash;\n    var target = targetHash.substring(1, targetHash.length);\n    var targetPosition = (0, _Shortcuts.getById)(target).getBoundingClientRect();\n\n    //TODO: check if mobile -> if true -> toggle menu and diff - menu.height\n    // this.toggleMenu();\n    (0, _Scrolling2.default)(targetPosition.top, 1000);\n  };\n\n  this.menuIcon = menuIcon;\n  this.menuList = menuList;\n  this.events();\n};\n\nexports.default = MobileMenu;\n\n//# sourceURL=webpack:///./app/assets/js/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/js/modules/Scrolling.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/Scrolling.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = smoothScroll;\n// https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page\n\nfunction smoothScroll(diff, duration) {\n  var startingY = window.pageYOffset;\n  var start;\n\n  var easing = function easing(t) {\n    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;\n  };\n\n  window.requestAnimationFrame(function step(timestamp) {\n    start = start || timestamp;\n\n    // Elapsed milliseconds since start of scrolling.\n    var time = timestamp - start;\n\n    // Get percent of completion in range [0, 1].\n    var percent = easing(Math.min(time / duration, 1));\n\n    // scrollTo(x, y)\n    window.scrollTo(0, startingY + diff * percent);\n\n    if (time < duration) {\n      window.requestAnimationFrame(step);\n    }\n  });\n}\n\n//# sourceURL=webpack:///./app/assets/js/modules/Scrolling.js?");

/***/ }),

/***/ "./app/assets/js/modules/Shortcuts.js":
/*!********************************************!*\
  !*** ./app/assets/js/modules/Shortcuts.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getById = exports.getById = function getById(id) {\n  return document.getElementById(id);\n};\nvar onClick = exports.onClick = function onClick(element, fn) {\n  return element.addEventListener('click', fn);\n};\nvar toggleClass = exports.toggleClass = function toggleClass(element, className) {\n  return element.classList.toggle(className);\n};\n\n//# sourceURL=webpack:///./app/assets/js/modules/Shortcuts.js?");

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