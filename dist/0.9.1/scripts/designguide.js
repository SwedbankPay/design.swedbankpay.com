(window["webpackJsonppayex"] = window["webpackJsonppayex"] || []).push([["designguide"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/designguide.less":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/less-loader/dist/cjs.js??ref--5-3!./src/less/designguide.less ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base colors */\n/* Grayscale */\n/* Brand colors */\n/* Background colors */\n/* Shadows */\n/* State colors */\n/* Margins */\n/* Spacing */\n/* Body */\n/* Cursor */\n/* Borders */\n/* Z-index master list */\n/* Media queries breakpoints */\n/* Colors */\n/* Dimensions */\n/* Animations */\n/* Colors */\n/* Font Size */\n/* Font Weight */\n/* Temporary for backwards compatibility    */\n/* Headings */\n/* Paragraphs */\n/* Etc */\n/* Small */\n/* Colors */\n/* Colors */\n/* Default colors */\n/* Contextual colors */\n/* For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n/* Image Mixins\n * - Responsive image\n * - Retina image\n */\n/* Responsive image\n *\n * Keep images from scaling beyond the width of their parents.\n */\n/* Retina image\n *\n * Short retina mixin for setting background-image and -size. Note that the\n * spelling of `min--moz-device-pixel-ratio` is intentional.\n */\n#px-designguide {\n  width: 100%;\n}\n.designguide-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);\n          box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.75);\n}\n.designguide-header .topbar-logo {\n  margin-right: 0;\n}\n.designguide-header:before,\n.designguide-header:after {\n  display: none;\n}\n.designguide-header .header-links a {\n  padding: 0 1rem;\n}\n.designguide-header .header-links a.active {\n  font-weight: 700;\n}\n.designguide-header .header-links a:hover,\n.designguide-header .header-links a:focus {\n  text-decoration: none;\n}\n.designguide-header .header-links a:active {\n  outline: none;\n}\n.designguide-header .topbar-info {\n  margin-right: 0.5rem;\n  margin-top: 0.5rem;\n}\n.designguide-header .topbar-info a {\n  margin: 5px;\n  color: rgba(60, 60, 60, 0.75);\n  fill: rgba(60, 60, 60, 0.75);\n}\n.designguide-header .topbar-info a svg {\n  overflow: visible;\n  width: 2rem;\n  height: 2rem;\n  display: inline-block;\n  vertical-align: top;\n}\n.designguide-header .topbar-info a:hover {\n  color: rgba(9, 9, 9, 0.75);\n  fill: rgba(9, 9, 9, 0.75);\n}\n.designguide-header .topbar-info-version {\n  text-align: right;\n}\npre {\n  font-size: 87.5%;\n}\n.color-preview {\n  width: 100%;\n  color: #ffffff;\n  padding: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 0.5rem;\n}\n.color-preview p {\n  margin: 0;\n}\n.showcase-panel div.d-block,\n.showcase-panel div.d-inline {\n  padding: 0.5rem;\n}\n.showcase-grid .row > [class*=\"col\"] {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background: #e6e7e8;\n  border: 1px solid rgba(209, 211, 212, 0.8);\n}\n.showcase-grid .row + .row {\n  margin-top: 1rem;\n}\n.showcase-grid.showcase-vertical-space .row {\n  background: #efefef;\n  height: 10rem;\n}\n.browser-support-table th,\n.browser-support-table tr {\n  text-align: center;\n  vertical-align: middle;\n}\n.browser-support-table svg {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: inline-block;\n}\n#mail_icon {\n  background: url(" + escape(__webpack_require__(/*! ../img/payexmail.png */ "./src/img/payexmail.png")) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/less/designguide.less":
/*!***********************************!*\
  !*** ./src/less/designguide.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/less-loader/dist/cjs.js??ref--5-3!./designguide.less */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/lib/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/designguide.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=designguide.js.map?1d886d855f3e36c1077f