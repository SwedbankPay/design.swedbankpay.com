(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{409:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),c=n(521),s=n.n(c),i=function(e){var t=e.type,n=e.items,a=e.text,l=e.arrows,o=e.farArrows,c=-1,i=n?n.length-1:-2,u=s()("pagination",t?"pagination-".concat(t):""),p=function(e){var t=e.type,n=!1;return"start"===t||"back"===t?n=0===c:"forward"!==t&&"end"!==t||(n=c===i),r.a.createElement("li",{className:"arrow-".concat(t),"aria-label":t},"\n",n?r.a.createElement("span",null):r.a.createElement("a",{href:"#"}),"\n")};return r.a.createElement("ul",{className:u},o?r.a.createElement(p,{type:"start"}):null,l?r.a.createElement(p,{type:"back"}):null,n?n.map(function(e,t){var n=e.name,a=e.href,l=e.active;return l&&(c=t),r.a.createElement("li",{key:t,className:"".concat(l?"active":"")},"\n",r.a.createElement("a",{href:a},n),"\n")}):null,a?r.a.createElement("li",null,"\n",r.a.createElement("span",{className:"text"},a),"\n"):null,l?r.a.createElement(p,{type:"forward"}):null,o?r.a.createElement(p,{type:"end"}):null)};i.propTypes={type:o.a.oneOf(["bullets","simple"]),items:o.a.array,text:o.a.string,arrows:o.a.bool,farArrows:o.a.bool},t.default=i},520:function(e,t){(function(t){e.exports=t}).call(this,{})},521:function(e,t,n){var a;function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=r(n);if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var s in n)l.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):"object"===r(n(520))&&n(520)?void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a):window.classNames=o}()}}]);
//# sourceMappingURL=doc-route.chunk_116.js.map?1229bad162d75d5bd9f3