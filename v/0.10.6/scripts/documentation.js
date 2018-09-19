(window["webpackJsonppayex"] = window["webpackJsonppayex"] || []).push([["documentation"],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/themes/documentation.less":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--5-2!./node_modules/less-loader/dist/cjs.js??ref--5-3!./src/less/themes/documentation.less ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base colors */\n/* Grayscale */\n/* Brand colors */\n/* Background colors */\n/* Shadows */\n/* State colors */\n/* Margins */\n/* Spacing */\n/* Body */\n/* Cursor */\n/* Borders */\n/* Z-index master list */\n/* Media queries breakpoints */\n/* Colors */\n/* Dimensions */\n/* Animations */\n/* Colors */\n/* Font Size */\n/* Font Weight */\n/* Temporary for backwards compatibility    */\n/* Headings */\n/* Paragraphs */\n/* Etc */\n/* Small */\n/* Colors */\n/* Colors */\n/* Colors */\n/* Default colors */\n/* Contextual colors */\n/* For modern browsers\n * 1. The space content is one way to avoid an Opera bug when the\n *    contenteditable attribute is included anywhere else in the document.\n *    Otherwise it causes space to appear at the top and bottom of elements\n *    that are clearfixed.\n * 2. The use of `table` rather than `block` is only necessary if using\n *    `:before` to contain the top-margins of child elements.\n *\n * Source: http://nicolasgallagher.com/micro-clearfix-hack/\n */\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n/* Image Mixins\n * - Responsive image\n * - Retina image\n */\n/* Responsive image\n *\n * Keep images from scaling beyond the width of their parents.\n */\n/* Retina image\n *\n * Short retina mixin for setting background-image and -size. Note that the\n * spelling of `min--moz-device-pixel-ratio` is intentional.\n */\n.documentation {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.doc-container {\n  margin-right: auto;\n  margin-left: auto;\n  padding: 3rem;\n  width: 100%;\n}\n@media (max-width: 1199px) {\n  .doc-container {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n.doc-sidebar {\n  padding-right: 0;\n  padding-left: 0;\n  height: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 70px;\n}\n.sidebar-heading {\n  background: #28953c;\n  -webkit-box-shadow: 1px 0 0 0 #28953c;\n          box-shadow: 1px 0 0 0 #28953c;\n  padding-left: 1.25rem;\n  height: 80px;\n}\n.sidebar-heading h1 {\n  color: #ffffff;\n  margin: 0;\n  font-weight: 400;\n  line-height: 80px;\n}\n.documentation-nav {\n  padding: 1rem;\n}\n.documentation-nav .nav-group {\n  margin-bottom: 1rem;\n}\n.documentation-nav .nav-group a {\n  padding: 0.25rem 2.25rem;\n}\n.documentation-nav .nav-group a.active {\n  outline: none;\n  text-decoration: none;\n  font-weight: 700;\n}\n.documentation-nav .nav-group a:focus {\n  outline: none;\n  color: #2da944;\n}\n.documentation-nav .nav-group .nav-heading {\n  font-size: 1.15rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.documentation-nav .nav-group .nav-heading > span {\n  padding: 0;\n  cursor: pointer;\n  color: #2da944;\n}\n.documentation-nav .nav-group .nav-heading > span:hover,\n.documentation-nav .nav-group .nav-heading > span:focus {\n  color: #228134;\n  text-decoration: underline;\n}\n.documentation-nav .nav-group .nav-heading > span:active,\n.documentation-nav .nav-group .nav-heading > span:hover {\n  outline: 0;\n}\n.documentation-nav .nav-group .nav-heading > span:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.documentation-nav .nav-group .nav-heading i {\n  color: rgba(60, 60, 60, 0.75);\n  margin-right: 0.25rem;\n  -webkit-transition: -webkit-transform 0.5s ease-in-out;\n  transition: -webkit-transform 0.5s ease-in-out;\n  -o-transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out;\n  transition: transform 0.5s ease-in-out, -webkit-transform 0.5s ease-in-out;\n}\n.documentation-nav .nav-group ul {\n  list-style: none;\n  padding-left: 0;\n  max-height: 0;\n  overflow: hidden;\n  -webkit-transition: max-height 0.3s;\n  -o-transition: max-height 0.3s;\n  transition: max-height 0.3s;\n}\n.documentation-nav .nav-group.active .nav-heading > span {\n  font-weight: 700;\n}\n.documentation-nav .nav-group.active .nav-heading i {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: -webkit-transform 0.2s;\n  transition: -webkit-transform 0.2s;\n  -o-transition: transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.documentation-nav .nav-group.active ul {\n  max-height: 100vh;\n  -webkit-transition: max-height 1s ease-in-out;\n  -o-transition: max-height 1s ease-in-out;\n  transition: max-height 1s ease-in-out;\n}\n.doc-view {\n  padding-left: 0;\n  padding-right: 0;\n  background: #ffffff;\n  min-height: calc(100vh - 150px);\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n}\n.view-heading {\n  background: #2da944;\n  height: 80px;\n  border-left: 1px solid #28953c;\n}\n.view-heading h1 {\n  color: #ffffff;\n  padding-left: 2rem;\n  margin: 0;\n  font-weight: 400;\n  line-height: 80px;\n}\n.doc-body {\n  padding-right: 3rem;\n}\n@media (max-width: 991px) {\n  .doc-body {\n    padding-right: 10px;\n  }\n}\n.doc-search {\n  padding: 1rem 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.075);\n}\n.doc-search .doc-search-input {\n  border-radius: 0.25rem;\n}\n.doc-search .doc-search-input:focus {\n  outline: 0;\n  -webkit-box-shadow: 0 0 2px 2px rgba(45, 169, 68, 0.5);\n          box-shadow: 0 0 2px 2px rgba(45, 169, 68, 0.5);\n}\n.doc-section-heading:before {\n  content: \"\";\n  display: block;\n  height: 100px;\n  margin: -100px 0 0;\n}\n.doc-toc {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 100px;\n  margin-top: -2rem;\n}\n.doc-toc ul {\n  list-style: none;\n  padding-left: 0;\n}\n.doc-toc ul li {\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\n  padding-left: 1rem;\n}\n.doc-toc ul li.active {\n  border-left: 2px solid rgba(45, 169, 68, 0.7);\n  font-weight: 700;\n}\n.showcase-panel {\n  position: relative;\n  background-color: #ffffff;\n  padding: 1.5rem;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\ncode {\n  padding: 0.1rem;\n  border-radius: 0.3rem;\n  white-space: normal;\n  background: #f5f2f0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/less/themes/documentation.less":
/*!********************************************!*\
  !*** ./src/less/themes/documentation.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/less-loader/dist/cjs.js??ref--5-3!./documentation.less */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/less/themes/documentation.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=documentation.js.map?5679c73cebca72067fd8