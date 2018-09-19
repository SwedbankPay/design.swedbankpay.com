var payex =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/polyfills/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/polyfills/Element.closest.js":
/*!******************************************!*\
  !*** ./src/polyfills/Element.closest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/***/ }),

/***/ "./src/polyfills/Nodelist.forEach.js":
/*!*******************************************!*\
  !*** ./src/polyfills/Nodelist.forEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./src/polyfills/Object.assign.js":
/*!****************************************!*\
  !*** ./src/polyfills/Object.assign.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.assign !== "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target) {
      // .length of function is 2
      "use strict";

      if (target === null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
}

/***/ }),

/***/ "./src/polyfills/String.includes.js":
/*!******************************************!*\
  !*** ./src/polyfills/String.includes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";

    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

/***/ }),

/***/ "./src/polyfills/String.startsWith.js":
/*!********************************************!*\
  !*** ./src/polyfills/String.startsWith.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

/***/ }),

/***/ "./src/polyfills/index.js":
/*!********************************!*\
  !*** ./src/polyfills/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _String_startsWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./String.startsWith */ "./src/polyfills/String.startsWith.js");
/* harmony import */ var _String_startsWith__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_String_startsWith__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _String_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./String.includes */ "./src/polyfills/String.includes.js");
/* harmony import */ var _String_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_String_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Element_closest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Element.closest */ "./src/polyfills/Element.closest.js");
/* harmony import */ var _Element_closest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Element_closest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nodelist_forEach__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nodelist.forEach */ "./src/polyfills/Nodelist.forEach.js");
/* harmony import */ var _Nodelist_forEach__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nodelist_forEach__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Object.assign */ "./src/polyfills/Object.assign.js");
/* harmony import */ var _Object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Object_assign__WEBPACK_IMPORTED_MODULE_4__);






/***/ })

/******/ });
//# sourceMappingURL=polyfills.js.map?5679c73cebca72067fd8