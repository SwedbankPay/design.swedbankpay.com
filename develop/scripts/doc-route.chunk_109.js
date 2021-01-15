(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{428:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(3),r=t.n(o),i=t(512),u=t.n(i),s=function(e){var n=e.title,t=e.subTitle,a=e.id,o=e.type,r=e.removeBottomPadding,i=e.removeAllPadding,s=e.halfPadding,p=e.bodyContent,c=e.panelTable,d=e.footerText,f=u()("panel",o?"panel-".concat(o):"panel-default",r?"panel-bottomless":null,i?"panel-no-padding":null,s?"panel-half-padding":null);return l.a.createElement("section",{className:f,id:a},n?l.a.createElement("header",null,l.a.createElement("h2",{className:"panel-title"},n),t?l.a.createElement("p",{className:"panel-sub-title"},t):null):null,p?l.a.createElement("div",{className:"panel-body"},p.map(function(e,n){return l.a.createElement("p",{key:n},e)})):null,c?l.a.createElement("div",{className:"panel-table"},c()):null,d?l.a.createElement("footer",null,l.a.createElement("p",null,d)):null)};s.propTypes={title:r.a.string,subTitle:r.a.string,id:r.a.string,type:r.a.oneOf(["brand","default","muted",""]),halfPadding:r.a.bool,removeAllPadding:r.a.bool,removeBottomPadding:r.a.bool,darkMode:r.a.bool,bodyContent:r.a.array,footerText:r.a.string},n.default=s},511:function(e,n){(function(n){e.exports=n}).call(this,{})},512:function(e,n,t){var a;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=l(t);if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)&&t.length){var i=r.apply(null,t);i&&e.push(i)}else if("object"===a)for(var u in t)o.call(t,u)&&t[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):"object"===l(t(511))&&t(511)?void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a):window.classNames=r}()}}]);
//# sourceMappingURL=doc-route.chunk_109.js.map?529c9bc6e002d6d2170c