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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://age-calculator-webpack/./src/css/main.css?");

/***/ }),

/***/ "./src/js/findage.js":
/*!***************************!*\
  !*** ./src/js/findage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findAge\": () => (/* binding */ findAge)\n/* harmony export */ });\n function findAge(current_date, current_month, current_year, birth_date,\r\n    birth_month, birth_year) {\r\n    // days of every month \r\n   let month = [31, 28, 31, 30, 31, 30, 31,31, 30, 31, 30, 31]\r\n  \r\n    // if birth date is greater than current date \r\n    // then do not count this month and add 30 \r\n    // to the date so as to subtract the date and \r\n    // get the remaining days \r\n    if (birth_date > current_date) {\r\n      current_date = current_date + month[birth_month - 1];\r\n      current_month = current_month - 1;\r\n    }\r\n  \r\n    // if birth month exceeds current month, then do \r\n    // not count this year and add 12 to the month so \r\n    // that we can subtract and find out the difference \r\n    if (birth_month > current_month) {\r\n      current_year = current_year - 1;\r\n      current_month = current_month + 12;\r\n    }\r\n  \r\n    // calculate date, month, year \r\n    var calculated_date = current_date - birth_date;\r\n    var calculated_month = current_month - birth_month;\r\n    var calculated_year = current_year - birth_year;\r\n  \r\n    // print the present age \r\n    document.querySelector('.yo').innerHTML = calculated_year;\r\n    document.querySelector('.mo').innerHTML = calculated_month;\r\n    document.querySelector('.do').innerHTML = calculated_date;\r\n  \r\n  }\r\n \r\n\r\n \n\n//# sourceURL=webpack://age-calculator-webpack/./src/js/findage.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./src/js/validate.js\");\n/* harmony import */ var _findage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findage.js */ \"./src/js/findage.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../css/main.css */ \"./src/css/main.css\");\n\r\n\r\n\r\nlet day = 0;\r\nlet month = 0;\r\nlet year = 0;\r\nlet table = {\r\n  daytable: [document.querySelector('.d'), document.querySelector('#d'), document.querySelector('label[for=\"d\"]')],\r\n  monthtable: [document.querySelector('.m'), document.querySelector('#m'), document.querySelector('label[for=\"m\"]')],\r\n  yeartable: [document.querySelector('.y'), document.querySelector('#y'), document.querySelector('label[for=\"y\"]')]\r\n}\r\ndocument.querySelector('.gim').addEventListener('click', (e) => {\r\n  // e.preventDefault();\r\n  const d = document.querySelector('#d').value;\r\n  const m = document.querySelector('#m').value;\r\n  const y = document.querySelector('#y').value;\r\n  let c1, c2, c3 = 0;\r\n\r\n  [c1,c2,c3]=(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.validate)(d,m,y,c1,c2,c3,table);\r\n  if (c1 || c2 || c3) return;\r\n  day = d;\r\n  month = m;\r\n  year = y;\r\n  const form = document.querySelector('form');\r\n  form.dispatchEvent(new Event('submit', { bubbles: true }));\r\n\r\n});\r\n\r\ndocument.querySelector('form').addEventListener('submit', (e) => {\r\n  (0,_findage_js__WEBPACK_IMPORTED_MODULE_1__.findAge)(new Date().getDay(), new Date().getMonth(), new Date().getFullYear(), Number(day),\r\n    Number(month), Number(year));\r\n});\r\n\r\n//Findage algorithm is not accurate\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://age-calculator-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validate\": () => (/* binding */ validate)\n/* harmony export */ });\nfunction validate(d,m,y,c1,c2,c3,table)\r\n{\r\n    const curyear = new Date().getFullYear();\r\n    const s = 'This field is required';\r\n    if (!d) {\r\n        table.daytable[0].innerHTML = s;\r\n        table.daytable[1].style.border = '1px solid red';\r\n        table.daytable[2].style.color = 'red';\r\n        c1 = 1;\r\n    } else if (d <= 0 || d > 31) {\r\n        table.daytable[0].innerHTML = \"Must be a valid day\";\r\n        table.daytable[1].style.border = '1px solid red';\r\n        table.daytable[2].style.color = 'red';\r\n        c1 = 1;\r\n    } else {\r\n        table.daytable[0].innerHTML = \"\";\r\n    table.daytable[1].style.border = '';\r\n    table.daytable[2].style.color = '';\r\n    c1 = 0;\r\n}\r\n\r\nif (!m) {\r\n    table.monthtable[0].innerHTML = s;\r\n    table.monthtable[1].style.border = '1px solid red';\r\n    table.monthtable[2].style.color = 'red';\r\n    c2 = 1;\r\n} else if (m <= 0 || m > 12) {\r\n    table.monthtable[0].innerHTML = \"Must be a valid month\";\r\n    table.monthtable[1].style.border = '1px solid red';\r\n    table.monthtable[2].style.color = 'red';\r\n    c2 = 1;\r\n} else {\r\n    table.monthtable[0].innerHTML = \"\";\r\n    table.monthtable[1].style.border = '';\r\n    table.monthtable[2].style.color = '';\r\n    c2 = 0;\r\n}\r\n\r\nif (!y) {\r\n    table.yeartable[0].innerHTML = s;\r\n    table.yeartable[1].style.border = '1px solid red';\r\n    table.yeartable[2].style.color = 'red';\r\n    c3 = 1;\r\n} else if (y < 0 || y > curyear) {\r\n    table.yeartable[0].innerHTML = \"Must be a valid year\";\r\n    table.yeartable[1].style.border = '1px solid red';\r\n    table.yeartable[2].style.color = 'red';\r\n    c3 = 1;\r\n} else {\r\n    table.yeartable[0].innerHTML = \"\";\r\n    table.yeartable[1].style.border = '';\r\n    table.yeartable[2].style.color = '';\r\n    c3 = 0;\r\n   \r\n}\r\nreturn [c1,c2,c3];\r\n}\n\n//# sourceURL=webpack://age-calculator-webpack/./src/js/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;