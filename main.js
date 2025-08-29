/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContacts(){\nconst container = document.querySelector('#content');\ncontainer.innerHTML=\"\"\n\nconst title = document.createElement('h1');\ntitle.textContent = 'ASIAN FOREST';\n\nconst contact = document.createElement('h2');\ncontact.textContent = 'Contact';\n\n// Contact 1\nconst firtsContact = document.createElement('h3');\nfirtsContact.textContent = 'Old Mother';\n\nconst firtsContactInfo = document.createElement('p');\nfirtsContactInfo.innerHTML = `0990000000 <br> Brgy. Kaininan, Kakainin Ka Talaga`;\n\n\n// Contact 2\nconst secondContact = document.createElement('h3');\nsecondContact.textContent = 'Butcher';\n\nconst psecondContactInfo = document.createElement('p');\npsecondContactInfo.innerHTML = `038784893 <br> Brgy. Wetson, Wetvile`;\n\nconst web= document.createElement('p');\nweb.innerHTML = `webpack sucks`;\n\n\n\ncontainer.appendChild(title);\ncontainer.appendChild(contact);\ncontainer.appendChild(firtsContact);\ncontainer.appendChild(firtsContactInfo);\ncontainer.appendChild(secondContact);\ncontainer.appendChild(psecondContactInfo);\ncontainer.appendChild(web);\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContacts);\n\n//# sourceURL=webpack://project_restuarant_page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\nconst container = document.querySelector('#content');\ncontainer.innerHTML=\"\"\nconst title = document.createElement(\"h1\");\ntitle.textContent = \"ASIAN FOREST\";\n\nconst subtitleAbout = document.createElement(\"h2\");\nsubtitleAbout.textContent = \"ASIAN FOREST\";\n\nconst abouttext = document.createElement(\"p\");\nabouttext.textContent = \"A place where every food is delicacy in the people.Anything are made from our earth-- organic and fresh. It can raw, cooked and burnt anything could be eaten aslong as your stomach decide\"\n\nconst subtitleHour = document.createElement(\"h2\");\nsubtitleHour.textContent = \"Open Hours\";\n\nconst hourtext = document.createElement(\"p\");\nconst hours = [\n  \"Sunday: 8am - 8pm\",\n  \"Monday: 6am - 6pm\",\n  \"Tuesday: 6am - 6pm\",\n  \"Wednesday: 6am - 6pm\",\n  \"Thursday: 6am - 10pm\",\n  \"Friday: 6am - 10pm\",\n  \"Saturday: 8am - 10pm\"\n];\n\nhourtext.innerHTML = hours.join('<br>');//br between hours\n\n\n\ncontainer.appendChild(title);\ncontainer.appendChild(subtitleAbout);\ncontainer.appendChild(abouttext);\ncontainer.appendChild(subtitleHour);\ncontainer.appendChild(hourtext);\n\n\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://project_restuarant_page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\nconsole.log(\"Hello\");\n\n\n\n\n\n\n\n\nconst buttons=document.querySelectorAll('button')\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n\nbuttons.forEach(button=>{\n    button.addEventListener(\"click\",e=>{\n        if(e.target.id==='home'){\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n        }else if(e.target.id==='menu'){\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n        }else if(e.target.id==='contact'){\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n        }\n    })\n})\n\n//# sourceURL=webpack://project_restuarant_page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction loadMenu() {\n    const container = document.querySelector('#content');\n    container.innerHTML = \"\"\n    const title = document.createElement(\"h1\");\n    title.textContent = \"ASIAN FOREST MEALS 101\";\n\n    const des = document.createElement(\"p\");\n    des.textContent = \"This meals are things that make you like a warrior and look effortlesly fit\"\n\n\n    const subtitle = document.createElement(\"h2\");\n    subtitle.textContent = \"Breakfast\";\n\n    const pande = document.createElement(\"h3\");\n    pande.textContent = \"Pandesal\";\n\n    const pandedes = document.createElement(\"p\");\n    pandedes.textContent = \"A cheap Life saver. Even one can last you till dinner\"\n\n    container.appendChild(title)\n    container.appendChild(des)\n    container.appendChild(subtitle)\n    container.appendChild(pande)\n    container.appendChild(pandedes)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://project_restuarant_page/./src/menu.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;