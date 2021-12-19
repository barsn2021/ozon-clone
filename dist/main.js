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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_sideFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sideFilter */ \"./src/modules/sideFilter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_sideFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://ozone/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById(\"cart\");\r\n  const cartModal = document.querySelector(\".cart\");\r\n  const cartCloseBtn = cartModal.querySelector(\".cart-close\");\r\n\r\n  const openCart = () => {\r\n    cartModal.style.display = \"flex\";\r\n  };\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = \"\";\r\n  };\r\n\r\n  // cartBtn.onclick = openCart;\r\n  cartBtn.addEventListener(\"click\", openCart);\r\n  cartCloseBtn.addEventListener(\"click\", closeCart);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozone/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector(\".catalog-button > button\");\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  const catalogModalItems = document.querySelectorAll(\".catalog li\");\r\n\r\n  let isOpen = false;\r\n\r\n  btnCatalog.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n\r\n    if (isOpen) {\r\n      catalogModal.style.display = \"block\";\r\n    } else {\r\n      catalogModal.style.display = \"\";\r\n    }\r\n  });\r\n\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const text = item.textContent;\r\n      console.log(text);\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozone/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"sideFilter\": () => (/* binding */ sideFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toLowerCase().includes(value)\r\n  })\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category.includes(value);\r\n  })\r\n}\r\n\r\nconst sideFilter = (goods, optionsObj) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (optionsObj.sale === true && goodsItem.sale === false) { return false };\r\n    if (\r\n      goodsItem.price >= optionsObj.priceFrom &&\r\n      goodsItem.price <= optionsObj.priceTo\r\n    ) {\r\n      return true;\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://ozone/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n  return fetch(\r\n    `https://test-ed653-default-rtdb.europe-west1.firebasedatabase.app/goods.json?`\r\n  ).then((response) => {\r\n    return response.json();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozone/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozone/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector('.goods');\r\n\r\n  goodsWrapper.innerHTML = '';\r\n  \r\n  goods.forEach((goodsItem) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\">\r\n          ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span class=\"card-img-top\"\r\n              style=\"background-image: url('${goodsItem.img}')\"></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodsItem.price} ₽</div>\r\n            <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    `\r\n    );\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozone/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n  searchInput.addEventListener('input', (event) => {\r\n    const value = event.target.value;\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n    });\r\n  });\r\n\r\n  // const searchBtn = document.querySelector(\".search .search-btn button\");\r\n  \r\n  // searchBtn.addEventListener(\"click\", () => {\r\n  //   let searchValue = document.querySelector(\".search-wrapper_input\").value;\r\n  //   console.log(`input.value = ${searchValue}`);\r\n  // })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozone/./src/modules/search.js?");

/***/ }),

/***/ "./src/modules/sideFilter.js":
/*!***********************************!*\
  !*** ./src/modules/sideFilter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector(\".catalog-button > button\");\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  const catalogModalItems = document.querySelectorAll(\".catalog li\");\r\n  const priceMinInput = document.querySelector(\"#min\");\r\n  const priceMaxInput = document.querySelector(\"#max\");\r\n  const hotSaleButton = document.querySelector(\"#discount-checkbox-test\");\r\n  // let hotSaleButtonIsChecked = false;\r\n  let optionsObj = {\r\n    priceFrom: 0,\r\n    priceTo: 999999999,\r\n    sale: false,\r\n  };\r\n  // console.log(hotSaleButton);\r\n  priceMinInput.addEventListener(\"input\", (event) => {\r\n    optionsObj.priceFrom = event.target.value;\r\n    console.log(optionsObj.priceFrom);\r\n    if (\r\n      !event.target.value \r\n      // || typeof event.target.value !== \"number\"\r\n    ) {\r\n      optionsObj.priceFrom = 0;\r\n    }\r\n    if (!event.target.value) {\r\n      optionsObj.priceFrom = 0;\r\n    }\r\n    reload(optionsObj);\r\n  });\r\n  \r\n  priceMaxInput.addEventListener(\"input\", (event) => {\r\n    \r\n    optionsObj.priceTo = event.target.value;\r\n    console.log(optionsObj.priceFrom);\r\n    if (!event.target.value ||\r\n      event.target.value == 0\r\n      // || typeof event.target.value !== \"number\"\r\n      ) {\r\n      optionsObj.priceTo = 9999999;\r\n    };\r\n    reload(optionsObj);\r\n  });\r\n  \r\n  hotSaleButton.addEventListener('click', () => {\r\n    if (hotSaleButton.checked) {\r\n      optionsObj.sale = true;\r\n      console.log(hotSaleButton);\r\n    } else {\r\n      optionsObj.sale = false;\r\n    }\r\n    reload(optionsObj);\r\n  })\r\n\r\n  function reload(optionsObj) {\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.sideFilter)(data, optionsObj));\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozone/./src/modules/sideFilter.js?");

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