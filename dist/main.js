/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./photos/background.jpg */ "./src/photos/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
* {
    box-sizing: border-box;
    outline: red dashed 1px;
	--card-color: rgba(0, 0, 0, 0.782);
	font-size: 1.5rem;
}
body {
	display: flex;
	flex-direction: column;
	align-items: center;

	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: cover;
	height: 100vh;
} 
img {
	height: 50px;
	width: auto;
}

.today {
	display: flex;
	background-color: var(--card-color);
	width: min(80vw, 1000px);
	font-size: 1.5rem;
}
.today .left-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.today .left-container .minmax{
	display: flex;
	gap: 1rem;
}
.today .right-container {
	flex: 2;
	display: flex;
	flex-direction: column;
	overflow: auto;
}
.today .right-container .info {
	display: flex;
	justify-content: space-evenly;
	padding: 1rem;
}
.today .right-container .info .text{
	display: flex;
	justify-content: center;
}
.today .right-container .hours {
	flex: 2;
	display: flex;
	overflow: auto;
}
.hours::-webkit-scrollbar {
    display: none;
}
.today .right-container .hours .card{
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
	height: 8rem;
	padding: 5px 1rem;
}
.card .sunset-sunrise-time {
	width: 7rem;
}
.card .hour-card-row {
	display: flex;
	justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;IACI,sBAAsB;IACtB,uBAAuB;CAC1B,kCAAkC;CAClC,iBAAiB;AAClB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;;CAEnB,yDAAgD;CAChD,sBAAsB;CACtB,aAAa;AACd;AACA;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,mCAAmC;CACnC,wBAAwB;CACxB,iBAAiB;AAClB;AACA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;AACA;CACC,aAAa;CACb,SAAS;AACV;AACA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,cAAc;AACf;AACA;CACC,aAAa;CACb,6BAA6B;CAC7B,aAAa;AACd;AACA;CACC,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,OAAO;CACP,aAAa;CACb,cAAc;AACf;AACA;IACI,aAAa;AACjB;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,qBAAqB;CACrB,sBAAsB;CACtB,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,uBAAuB;AACxB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n    box-sizing: border-box;\n    outline: red dashed 1px;\n\t--card-color: rgba(0, 0, 0, 0.782);\n\tfont-size: 1.5rem;\n}\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\tbackground-image: url('./photos/background.jpg');\n\tbackground-size: cover;\n\theight: 100vh;\n} \nimg {\n\theight: 50px;\n\twidth: auto;\n}\n\n.today {\n\tdisplay: flex;\n\tbackground-color: var(--card-color);\n\twidth: min(80vw, 1000px);\n\tfont-size: 1.5rem;\n}\n.today .left-container {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n.today .left-container .minmax{\n\tdisplay: flex;\n\tgap: 1rem;\n}\n.today .right-container {\n\tflex: 2;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: auto;\n}\n.today .right-container .info {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tpadding: 1rem;\n}\n.today .right-container .info .text{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.today .right-container .hours {\n\tflex: 2;\n\tdisplay: flex;\n\toverflow: auto;\n}\n.hours::-webkit-scrollbar {\n    display: none;\n}\n.today .right-container .hours .card{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n\tflex-direction: column;\n\theight: 8rem;\n\tpadding: 5px 1rem;\n}\n.card .sunset-sunrise-time {\n\twidth: 7rem;\n}\n.card .hour-card-row {\n\tdisplay: flex;\n\tjustify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Data: () => (/* binding */ Data)
/* harmony export */ });
class Data {
    constructor() {
        this.today = {};
        this.forecast = [{}, {}, {}];
        this.hours = [];
        this.temp = 'F'
    }

    async addData(city) {
        try {
            // Fetch data from API
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a91fd93998594df68e9202550232006&q=${city}&days=3&aqi=yes`);
            const data = await response.json();
            
            // Store fetched data in today
            if(this.temp === 'F') {
                this.today.temp = data.current.temp_f;
                this.today.feelslike = data.current.feelslike_f;
                this.today.maxtemp = data.forecast.forecastday[0].day.maxtemp_f;
                this.today.mintemp = data.forecast.forecastday[0].day.mintemp_f;
            }
            if(this.temp === 'C') {
                this.today.temp = data.current.temp_c;
                this.today.feelslike = data.current.feelslike_c;
                this.today.maxtemp = data.forecast.forecastday[0].day.maxtemp_c;
                this.today.mintemp = data.forecast.forecastday[0].day.mintemp_c;
            }
            this.today.condition = data.current.condition.text;
            this.today.humidity = data.current.humidity;
            this.today.location = data.location.name + ', ' + data.location.region;
            this.today.uv = data.current.uv;
            this.today.sunrise = data.forecast.forecastday[0].astro.sunrise;
            this.today.sunset = data.forecast.forecastday[0].astro.sunset;
            this.today.epa = data.current.air_quality['us-epa-index'];

            // Store fetched data in forecast
            for(let i = 0; i < 3; i++) {
                this.forecast[i].condition = data.forecast.forecastday[i].day.condition.text;
                if(this.temp === 'F') {
                    this.forecast[i].maxtemp = data.forecast.forecastday[i].day.maxtemp_f;
                    this.forecast[i].mintemp = data.forecast.forecastday[i].day.mintemp_f;
                    this.forecast[i].avgtemp = data.forecast.forecastday[i].day.avgtemp_f;
                }
                if(this.temp === 'C') {
                    this.forecast[i].maxtemp = data.forecast.forecastday[i].day.maxtemp_c;
                    this.forecast[i].mintemp = data.forecast.forecastday[i].day.mintemp_c;
                    this.forecast[i].avgtemp = data.forecast.forecastday[i].day.avgtemp_f;
                }
            }

            // Store 24 hour period and sunrise and sunset
            let currentTime = new Date().getHours();    // Initialize time
            let sunriseTime = parseInt(data.forecast.forecastday[0].astro.sunrise.split(':')[0]);       // Outputs hour of sunrise
            let sunsetTime = parseInt(data.forecast.forecastday[0].astro.sunset.split(':')[0]) + 12;    // Outputs hour of sunset
            // If time passed, use tomorrow's sunset and sunrise
            if (currentTime > sunriseTime) sunriseTime = parseInt(data.forecast.forecastday[1].astro.sunrise.split(':')[0]);
            if (currentTime > sunsetTime) sunsetTime = parseInt(data.forecast.forecastday[1].astro.sunset.split(':')[0]) + 12;

            for(let i = 0; i < 27; i++) {
                if(currentTime < 24) {                  // Store remaining hours of the day
                    this.hours[i] = {};
                    this.hours[i].hour = new Date(data.forecast.forecastday[0].hour[currentTime].time).getHours();
                    this.hours[i].condition = data.forecast.forecastday[0].hour[currentTime].condition.text;
                    if(this.temp === 'F') this.hours[i].temp = data.forecast.forecastday[0].hour[currentTime].temp_f;
                    if(this.temp === 'C') this.hours[i].temp = data.forecast.forecastday[0].hour[currentTime].temp_c;
                } else {                                // Store the rest of 24 hour period
                    this.hours[i] = {};
                    this.hours[i].hour = new Date(data.forecast.forecastday[1].hour[currentTime - 24].time).getHours();
                    this.hours[i].condition = data.forecast.forecastday[1].hour[currentTime - 24].condition.text;
                    if(this.temp === 'F') this.hours[i].temp = data.forecast.forecastday[1].hour[currentTime - 24].temp_f;
                    if(this.temp === 'C') this.hours[i].temp = data.forecast.forecastday[1].hour[currentTime - 24].temp_c;
                }
                // Add sunset and sunrise time if the time arrives
                if (currentTime === sunriseTime || currentTime - 24 === sunriseTime) {
                    this.hours[i + 1] = [];
                    this.hours[i + 1][0] = data.forecast.forecastday[0].astro.sunrise;
                    this.hours[i + 1][1] = 'Sunrise';
                    i++;
                }
                if (currentTime === sunsetTime || currentTime - 24 === sunsetTime) {
                    this.hours[i + 1] = [];
                    this.hours[i + 1][0] = data.forecast.forecastday[0].astro.sunset;
                    this.hours[i + 1][1] = 'Sunset';
                    i++;
                }
                currentTime++;                          // Increment hour
            }
        } catch(err) {
            throw Error(err)
        }
    }
    addDay() {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        this.today.day = weekday[d.getDay()];
        this.forecast[0].day = 'Today';
        this.forecast[1].day = weekday[(d.getDay() + 1 > 6) ? (d.getDay() - 6) : (d.getDay() + 1)];
        this.forecast[2].day = weekday[(d.getDay() + 2 > 6) ? (d.getDay() - 5) : (d.getDay() + 2)];
    }

    async fillObject(city) {
        await this.addData(city);
        this.addDay();
    }
    reset() {
        this.today = {};
        this.forecast = [{}, {}, {}];
        this.hours = [];
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");





const search = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');

const city = new _data__WEBPACK_IMPORTED_MODULE_1__.Data();

// Initial data
await city.fillObject('LA');
console.log(city)
;(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderUI)(city)



searchButton.addEventListener('click', async () => {
    
    // Reset and fetch data
    city.reset();
    await city.fillObject(search.value);


    // Load UI after data is fetched
    (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderUI)(city)
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderUI: () => (/* binding */ renderUI)
/* harmony export */ });
/* harmony import */ var _photos_weather_ClearD_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photos/weather/ClearD.png */ "./src/photos/weather/ClearD.png");
/* harmony import */ var _photos_weather_ClearN_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos/weather/ClearN.png */ "./src/photos/weather/ClearN.png");
/* harmony import */ var _photos_weather_PartlyD_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/weather/PartlyD.png */ "./src/photos/weather/PartlyD.png");
/* harmony import */ var _photos_weather_PartlyN_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/weather/PartlyN.png */ "./src/photos/weather/PartlyN.png");
/* harmony import */ var _photos_weather_Overcast_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos/weather/Overcast.png */ "./src/photos/weather/Overcast.png");
/* harmony import */ var _photos_weather_Fog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/weather/Fog.png */ "./src/photos/weather/Fog.png");
/* harmony import */ var _photos_weather_DrizzleD_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/weather/DrizzleD.png */ "./src/photos/weather/DrizzleD.png");
/* harmony import */ var _photos_weather_DrizzleN_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/weather/DrizzleN.png */ "./src/photos/weather/DrizzleN.png");
/* harmony import */ var _photos_weather_HeavyD_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photos/weather/HeavyD.png */ "./src/photos/weather/HeavyD.png");
/* harmony import */ var _photos_weather_HeavyN_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photos/weather/HeavyN.png */ "./src/photos/weather/HeavyN.png");
/* harmony import */ var _photos_weather_ThunderD_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photos/weather/ThunderD.png */ "./src/photos/weather/ThunderD.png");
/* harmony import */ var _photos_weather_ThunderN_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./photos/weather/ThunderN.png */ "./src/photos/weather/ThunderN.png");
/* harmony import */ var _photos_weather_SnowD_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photos/weather/SnowD.png */ "./src/photos/weather/SnowD.png");
/* harmony import */ var _photos_weather_SnowN_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./photos/weather/SnowN.png */ "./src/photos/weather/SnowN.png");
/* harmony import */ var _photos_weather_Blizzard_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./photos/weather/Blizzard.png */ "./src/photos/weather/Blizzard.png");
/* harmony import */ var _photos_weather_sunrise_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./photos/weather/sunrise.png */ "./src/photos/weather/sunrise.png");
/* harmony import */ var _photos_weather_sunset_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./photos/weather/sunset.png */ "./src/photos/weather/sunset.png");


















// Left Container cache
const city = document.querySelector('.left-container .city');
const temp = document.querySelector('.left-container .temp');
const condition = document.querySelector('.left-container .condition');
const min = document.querySelector('.left-container .minmax .mintemp');
const max = document.querySelector('.left-container .minmax .maxtemp');

// Right Container top info
const feels = document.querySelector('.right-container .info .feels .text');
const epa = document.querySelector('.right-container .info .epa .text');
const humidity = document.querySelector('.right-container .info .humidity .text');
const uv = document.querySelector('.right-container .info .uv .text');

// Right Container hours
const hoursContainer = document.querySelector('.right-container .hours');

let sunriseTime;                            // Outputs hour of sunrise
let sunsetTime;                             // Outputs hour of sunset

function getSunsetSunrise(data) {
    sunriseTime = parseInt(data.today.sunrise.split(':')[0]);
    sunsetTime = parseInt(data.today.sunset.split(':')[0]) + 12;
}

function rernderLeftContainer(dataToday) {
    city.textContent = dataToday.location;
    temp.textContent = dataToday.temp + '°';
    renderImage(new Date().getHours(), dataToday.condition, condition);
    min.textContent = `L: ${dataToday.mintemp}°`;
    max.textContent = `H: ${dataToday.maxtemp}°`;
}
function renderInfo(dataToday) {
    feels.textContent = `${dataToday.feelslike}°`;
    epa.textContent = dataToday.epa;
    humidity.textContent = dataToday.humidity;
    uv.textContent = dataToday.uv;
}
function renderHours(hours) {
    const time =    ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
                    '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
                    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
                    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', 'NOW'];
    hours[0].hour = 24;

    hours.forEach(hour => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTime = document.createElement('div');
        cardTime.classList.add('hour-card-row');
        card.appendChild(cardTime);

        const cardCondition = document.createElement('div');
        cardCondition.classList.add('hour-card-row');
        card.appendChild(cardCondition);

        const cardTemp = document.createElement('div');
        cardTemp.classList.add('hour-card-row');
        card.appendChild(cardTemp);

        if (!Array.isArray(hour)) {
            cardTime.textContent = `${time[hour.hour]}`;
            renderImage(hour.hour, hour.condition, cardCondition);
            cardTemp.textContent = `${hour.temp}°`;
        } else {
            cardTime.textContent = hour[0];
            cardTime.classList.add('sunset-sunrise-time');
            renderImage(hour.hour, hour[1], cardCondition);
            cardTemp.textContent = hour[1];
        }
        hoursContainer.appendChild(card);
    });
    console.log(hours)
}
function hourScroll() {
    let startX, scrollLeft;
    let isDown = false;
    hoursContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = hoursContainer.scrollLeft;
    });

    hoursContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });

    hoursContainer.addEventListener('mouseup', () => {
        isDown = false;
    });

    hoursContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 3; //scroll-fast
        hoursContainer.scrollLeft = scrollLeft - walk;
    });
}
function renderImage(hour, condition, parent) {
    const icon = new Image();
    icon.classList.add('icon');
    if (condition === 'Sunrise') icon.src = _photos_weather_sunrise_png__WEBPACK_IMPORTED_MODULE_15__;
    if (condition === 'Sunset') icon.src = _photos_weather_sunset_png__WEBPACK_IMPORTED_MODULE_16__;
    if (condition === 'Sunny') icon.src = _photos_weather_ClearD_png__WEBPACK_IMPORTED_MODULE_0__;
    if (condition === 'Clear') icon.src = _photos_weather_ClearN_png__WEBPACK_IMPORTED_MODULE_1__;
    if (condition === 'Cloudy' || condition === 'Overcast') icon.src = _photos_weather_Overcast_png__WEBPACK_IMPORTED_MODULE_4__;
    if (condition === 'Mist' || condition === 'Fog' || condition === 'Freezing fog') icon.src = _photos_weather_Fog_png__WEBPACK_IMPORTED_MODULE_5__;
    if (condition === 'Blizzard' || condition === 'Moderate or heavy sleet' || condition === 'Patchy heavy snow' || condition === 'Heavy snow' || condition === 'Ice pellets' || condition === 'Moderate or heavy snow showers' || condition === 'Moderate or heavy showers of ice pellets') icon.src = _photos_weather_Blizzard_png__WEBPACK_IMPORTED_MODULE_14__;
    if (hour >= sunsetTime || hour <= sunriseTime) {
        if (condition === 'Partly cloudy') icon.src = _photos_weather_PartlyN_png__WEBPACK_IMPORTED_MODULE_3__;
        if (condition === 'Patchy rain possible' || condition === 'Patchy light drizzle' || condition === 'Light drizzle' || condition === 'Patchy light rain' || condition === 'Light rain'  || condition === 'Light freezing rain' || condition === 'Light rain shower' || condition === 'Light sleet showers') icon.src = _photos_weather_DrizzleN_png__WEBPACK_IMPORTED_MODULE_7__;
        if (condition === 'Heavy freezing drizzle' || condition === 'Moderate rain at times' || condition === 'Moderate rain' || condition === 'Heavy rain at times' || condition === 'Heavy rain' || condition === 'Moderate or heavy freezing rain' || condition === 'Moderate or heavy rain shower' || condition === 'Torrential rain shower' || condition === 'Moderate or heavy sleet showers') icon.src = _photos_weather_HeavyN_png__WEBPACK_IMPORTED_MODULE_9__;
        if (condition === 'Patchy snow possible' || condition === 'Patchy sleet possible' || condition === 'Patchy freezing drizzle possible' || condition === 'Blowing snow' || condition === 'Freezing drizzle' || condition === 'Light sleet' || condition === 'Patchy light snow' || condition === 'Light snow' || condition === 'Patchy moderate snow' || condition === 'Moderate snow' || condition === 'Light snow showers' || condition === 'Light showers of ice pellets') icon.src = _photos_weather_SnowN_png__WEBPACK_IMPORTED_MODULE_13__;
        if (condition === 'Thundery outbreaks possible' || condition === 'Patchy light rain with thunder' || condition === 'Moderate or heavy rain with thunder' || condition === 'Patchy light snow with thunder' || condition === 'Moderate or heavy snow with thunder') icon.src = _photos_weather_ThunderN_png__WEBPACK_IMPORTED_MODULE_11__;
    } else {
        if (condition === 'Partly cloudy') icon.src = _photos_weather_PartlyD_png__WEBPACK_IMPORTED_MODULE_2__;
        if (condition === 'Patchy rain possible' || condition === 'Patchy light drizzle' || condition === 'Light drizzle' || condition === 'Patchy light rain' || condition === 'Light rain'  || condition === 'Light freezing rain' || condition === 'Light rain shower' || condition === 'Light sleet showers') icon.src = _photos_weather_DrizzleD_png__WEBPACK_IMPORTED_MODULE_6__;
        if (condition === 'Heavy freezing drizzle' || condition === 'Moderate rain at times' || condition === 'Moderate rain' || condition === 'Heavy rain at times' || condition === 'Heavy rain' || condition === 'Moderate or heavy freezing rain' || condition === 'Moderate or heavy rain shower' || condition === 'Torrential rain shower' || condition === 'Moderate or heavy sleet showers') icon.src = _photos_weather_HeavyD_png__WEBPACK_IMPORTED_MODULE_8__;
        if (condition === 'Patchy snow possible' || condition === 'Patchy sleet possible' || condition === 'Patchy freezing drizzle possible' || condition === 'Blowing snow' || condition === 'Freezing drizzle' || condition === 'Light sleet' || condition === 'Patchy light snow' || condition === 'Light snow' || condition === 'Patchy moderate snow' || condition === 'Moderate snow' || condition === 'Light snow showers' || condition === 'Light showers of ice pellets') icon.src = _photos_weather_SnowD_png__WEBPACK_IMPORTED_MODULE_12__;
        if (condition === 'Thundery outbreaks possible' || condition === 'Patchy light rain with thunder' || condition === 'Moderate or heavy rain with thunder' || condition === 'Patchy light snow with thunder' || condition === 'Moderate or heavy snow with thunder') icon.src = _photos_weather_ThunderD_png__WEBPACK_IMPORTED_MODULE_10__;
    }
    parent.appendChild(icon);
}

function reset() {
    city.textContent = '';
    temp.textContent = '';
    condition.textContent = '';
    min.textContent = '';
    max.textContent = '';
    feels.textContent = '';
    epa.textContent = '';
    humidity.textContent = '';
    uv.textContent = '';
}

function renderUI(data) {
    reset();
    getSunsetSunrise(data);
    rernderLeftContainer(data.today);
    renderInfo(data.today);
    renderHours(data.hours);
    hourScroll();
}

/***/ }),

/***/ "./src/photos/background.jpg":
/*!***********************************!*\
  !*** ./src/photos/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9eac06ae95d08badc3c.jpg";

/***/ }),

/***/ "./src/photos/weather/Blizzard.png":
/*!*****************************************!*\
  !*** ./src/photos/weather/Blizzard.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf216d4d2f4aa9d2a734.png";

/***/ }),

/***/ "./src/photos/weather/ClearD.png":
/*!***************************************!*\
  !*** ./src/photos/weather/ClearD.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17608b0baa1391eb05a0.png";

/***/ }),

/***/ "./src/photos/weather/ClearN.png":
/*!***************************************!*\
  !*** ./src/photos/weather/ClearN.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a181351a22b54059f46.png";

/***/ }),

/***/ "./src/photos/weather/DrizzleD.png":
/*!*****************************************!*\
  !*** ./src/photos/weather/DrizzleD.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/photos/weather/DrizzleN.png":
/*!*****************************************!*\
  !*** ./src/photos/weather/DrizzleN.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/photos/weather/Fog.png":
/*!************************************!*\
  !*** ./src/photos/weather/Fog.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2a1d4434712ee44f9ba.png";

/***/ }),

/***/ "./src/photos/weather/HeavyD.png":
/*!***************************************!*\
  !*** ./src/photos/weather/HeavyD.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/photos/weather/HeavyN.png":
/*!***************************************!*\
  !*** ./src/photos/weather/HeavyN.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/photos/weather/Overcast.png":
/*!*****************************************!*\
  !*** ./src/photos/weather/Overcast.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "036a7f4b9402e1d74535.png";

/***/ }),

/***/ "./src/photos/weather/PartlyD.png":
/*!****************************************!*\
  !*** ./src/photos/weather/PartlyD.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ea9e73debaf4c25a8cf.png";

/***/ }),

/***/ "./src/photos/weather/PartlyN.png":
/*!****************************************!*\
  !*** ./src/photos/weather/PartlyN.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "337f58255916e54ea1e1.png";

/***/ }),

/***/ "./src/photos/weather/SnowD.png":
/*!**************************************!*\
  !*** ./src/photos/weather/SnowD.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/photos/weather/SnowN.png":
/*!**************************************!*\
  !*** ./src/photos/weather/SnowN.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/photos/weather/ThunderD.png":
/*!*****************************************!*\
  !*** ./src/photos/weather/ThunderD.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/photos/weather/ThunderN.png":
/*!*****************************************!*\
  !*** ./src/photos/weather/ThunderN.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/photos/weather/sunrise.png":
/*!****************************************!*\
  !*** ./src/photos/weather/sunrise.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "779f81a36dbf880c84cf.png";

/***/ }),

/***/ "./src/photos/weather/sunset.png":
/*!***************************************!*\
  !*** ./src/photos/weather/sunset.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f644ecc1cc537995721.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLCtuQkFBK25CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEdBQUcsZ0pBQWdKLG1CQUFtQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcsVUFBVSxxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyxLQUFLLDZCQUE2Qiw4QkFBOEIsdUNBQXVDLHNCQUFzQixHQUFHLFFBQVEsa0JBQWtCLDJCQUEyQix3QkFBd0IsdURBQXVELDJCQUEyQixrQkFBa0IsSUFBSSxPQUFPLGlCQUFpQixnQkFBZ0IsR0FBRyxZQUFZLGtCQUFrQix3Q0FBd0MsNkJBQTZCLHNCQUFzQixHQUFHLDBCQUEwQixZQUFZLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLGlDQUFpQyxrQkFBa0IsY0FBYyxHQUFHLDJCQUEyQixZQUFZLGtCQUFrQiwyQkFBMkIsbUJBQW1CLEdBQUcsaUNBQWlDLGtCQUFrQixrQ0FBa0Msa0JBQWtCLEdBQUcsc0NBQXNDLGtCQUFrQiw0QkFBNEIsR0FBRyxrQ0FBa0MsWUFBWSxrQkFBa0IsbUJBQW1CLEdBQUcsNkJBQTZCLG9CQUFvQixHQUFHLHVDQUF1QyxrQkFBa0IsNEJBQTRCLDBCQUEwQiwyQkFBMkIsaUJBQWlCLHNCQUFzQixHQUFHLDhCQUE4QixnQkFBZ0IsR0FBRyx3QkFBd0Isa0JBQWtCLDRCQUE0QixHQUFHLG1CQUFtQjtBQUNsaUg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwSTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYk87QUFDUDtBQUNBO0FBQ0EsMkJBQTJCLElBQUksSUFBSTtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEhBQThILEtBQUs7QUFDbkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQsd0dBQXdHO0FBQ3hHLHdHQUF3RztBQUN4RztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLFFBQVE7QUFDbkMsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0NBQXNDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUksSUFBSTtBQUNuQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdHc0I7QUFDUTtBQUNNOzs7QUFHcEM7QUFDQTs7QUFFQSxpQkFBaUIsdUNBQUk7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLGtEQUFROzs7O0FBSVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCK0M7QUFDQTtBQUNHO0FBQ0E7QUFDRTtBQUNWO0FBQ1U7QUFDQTtBQUNKO0FBQ0E7QUFDSTtBQUNBO0FBQ047QUFDQTtBQUNNO0FBQ0Y7QUFDRjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0Q0FBNEM7QUFDNUMsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUMsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsZ0JBQWdCO0FBQ3REO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlEQUFPO0FBQ25ELDJDQUEyQyx3REFBTTtBQUNqRCwwQ0FBMEMsdURBQUs7QUFDL0MsMENBQTBDLHVEQUFLO0FBQy9DLHVFQUF1RSx5REFBUTtBQUMvRSxnR0FBZ0csb0RBQUc7QUFDbkcsd1NBQXdTLDBEQUFRO0FBQ2hUO0FBQ0Esc0RBQXNELHdEQUFPO0FBQzdELDZUQUE2VCx5REFBUTtBQUNyVSxnWkFBZ1osdURBQU07QUFDdFosK2RBQStkLHVEQUFLO0FBQ3BlLHNSQUFzUiwwREFBUTtBQUM5UixNQUFNO0FBQ04sc0RBQXNELHdEQUFPO0FBQzdELDZUQUE2VCx5REFBUTtBQUNyVSxnWkFBZ1osdURBQU07QUFDdFosK2RBQStkLHVEQUFLO0FBQ3BlLHNSQUFzUiwwREFBUTtBQUM5UjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NoRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3Bob3Rvcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdXRsaW5lOiByZWQgZGFzaGVkIDFweDtcblx0LS1jYXJkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzgyKTtcblx0Zm9udC1zaXplOiAxLjVyZW07XG59XG5ib2R5IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGhlaWdodDogMTAwdmg7XG59IFxuaW1nIHtcblx0aGVpZ2h0OiA1MHB4O1xuXHR3aWR0aDogYXV0bztcbn1cblxuLnRvZGF5IHtcblx0ZGlzcGxheTogZmxleDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XG5cdHdpZHRoOiBtaW4oODB2dywgMTAwMHB4KTtcblx0Zm9udC1zaXplOiAxLjVyZW07XG59XG4udG9kYXkgLmxlZnQtY29udGFpbmVyIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9kYXkgLmxlZnQtY29udGFpbmVyIC5taW5tYXh7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcbn1cbi50b2RheSAucmlnaHQtY29udGFpbmVyIHtcblx0ZmxleDogMjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG4udG9kYXkgLnJpZ2h0LWNvbnRhaW5lciAuaW5mbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRwYWRkaW5nOiAxcmVtO1xufVxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmluZm8gLnRleHR7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmhvdXJzIHtcblx0ZmxleDogMjtcblx0ZGlzcGxheTogZmxleDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG4uaG91cnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmhvdXJzIC5jYXJke1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRoZWlnaHQ6IDhyZW07XG5cdHBhZGRpbmc6IDVweCAxcmVtO1xufVxuLmNhcmQgLnN1bnNldC1zdW5yaXNlLXRpbWUge1xuXHR3aWR0aDogN3JlbTtcbn1cbi5jYXJkIC5ob3VyLWNhcmQtcm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0NBQzFCLGtDQUFrQztDQUNsQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1COztDQUVuQix5REFBZ0Q7Q0FDaEQsc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQ0FBbUM7Q0FDbkMsd0JBQXdCO0NBQ3hCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjtBQUNBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLGFBQWE7QUFDZDtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixjQUFjO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb3V0bGluZTogcmVkIGRhc2hlZCAxcHg7XFxuXFx0LS1jYXJkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzgyKTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3Bob3Rvcy9iYWNrZ3JvdW5kLmpwZycpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59IFxcbmltZyB7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udG9kYXkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxuXFx0d2lkdGg6IG1pbig4MHZ3LCAxMDAwcHgpO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4udG9kYXkgLmxlZnQtY29udGFpbmVyIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udG9kYXkgLmxlZnQtY29udGFpbmVyIC5taW5tYXh7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxufVxcbi50b2RheSAucmlnaHQtY29udGFpbmVyIHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmluZm8ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmluZm8gLnRleHR7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmhvdXJzIHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcbi5ob3Vyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4udG9kYXkgLnJpZ2h0LWNvbnRhaW5lciAuaG91cnMgLmNhcmR7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRoZWlnaHQ6IDhyZW07XFxuXFx0cGFkZGluZzogNXB4IDFyZW07XFxufVxcbi5jYXJkIC5zdW5zZXQtc3VucmlzZS10aW1lIHtcXG5cXHR3aWR0aDogN3JlbTtcXG59XFxuLmNhcmQgLmhvdXItY2FyZC1yb3cge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9kYXkgPSB7fTtcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IFt7fSwge30sIHt9XTtcbiAgICAgICAgdGhpcy5ob3VycyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXAgPSAnRidcbiAgICB9XG5cbiAgICBhc3luYyBhZGREYXRhKGNpdHkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEZldGNoIGRhdGEgZnJvbSBBUElcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWE5MWZkOTM5OTg1OTRkZjY4ZTkyMDI1NTAyMzIwMDYmcT0ke2NpdHl9JmRheXM9MyZhcWk9eWVzYCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTdG9yZSBmZXRjaGVkIGRhdGEgaW4gdG9kYXlcbiAgICAgICAgICAgIGlmKHRoaXMudGVtcCA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RheS50ZW1wID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5LmZlZWxzbGlrZSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5Lm1heHRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RheS5taW50ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy50ZW1wID09PSAnQycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5LnRlbXAgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkuZmVlbHNsaWtlID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkubWF4dGVtcCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYztcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5Lm1pbnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvZGF5LmNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgICAgIHRoaXMudG9kYXkuaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgICAgICAgICB0aGlzLnRvZGF5LmxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbi5uYW1lICsgJywgJyArIGRhdGEubG9jYXRpb24ucmVnaW9uO1xuICAgICAgICAgICAgdGhpcy50b2RheS51diA9IGRhdGEuY3VycmVudC51djtcbiAgICAgICAgICAgIHRoaXMudG9kYXkuc3VucmlzZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgICAgICAgICAgIHRoaXMudG9kYXkuc3Vuc2V0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgICAgICAgICB0aGlzLnRvZGF5LmVwYSA9IGRhdGEuY3VycmVudC5haXJfcXVhbGl0eVsndXMtZXBhLWluZGV4J107XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIGZldGNoZWQgZGF0YSBpbiBmb3JlY2FzdFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RbaV0uY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy50ZW1wID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JlY2FzdFtpXS5tYXh0ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmVjYXN0W2ldLm1pbnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2Y7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RbaV0uYXZndGVtcCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy50ZW1wID09PSAnQycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JlY2FzdFtpXS5tYXh0ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmVjYXN0W2ldLm1pbnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RbaV0uYXZndGVtcCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIDI0IGhvdXIgcGVyaW9kIGFuZCBzdW5yaXNlIGFuZCBzdW5zZXRcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTsgICAgLy8gSW5pdGlhbGl6ZSB0aW1lXG4gICAgICAgICAgICBsZXQgc3VucmlzZVRpbWUgPSBwYXJzZUludChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2Uuc3BsaXQoJzonKVswXSk7ICAgICAgIC8vIE91dHB1dHMgaG91ciBvZiBzdW5yaXNlXG4gICAgICAgICAgICBsZXQgc3Vuc2V0VGltZSA9IHBhcnNlSW50KGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0LnNwbGl0KCc6JylbMF0pICsgMTI7ICAgIC8vIE91dHB1dHMgaG91ciBvZiBzdW5zZXRcbiAgICAgICAgICAgIC8vIElmIHRpbWUgcGFzc2VkLCB1c2UgdG9tb3Jyb3cncyBzdW5zZXQgYW5kIHN1bnJpc2VcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IHN1bnJpc2VUaW1lKSBzdW5yaXNlVGltZSA9IHBhcnNlSW50KGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uYXN0cm8uc3VucmlzZS5zcGxpdCgnOicpWzBdKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IHN1bnNldFRpbWUpIHN1bnNldFRpbWUgPSBwYXJzZUludChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmFzdHJvLnN1bnNldC5zcGxpdCgnOicpWzBdKSArIDEyO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIDwgMjQpIHsgICAgICAgICAgICAgICAgICAvLyBTdG9yZSByZW1haW5pbmcgaG91cnMgb2YgdGhlIGRheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2ldID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91cnNbaV0uaG91ciA9IG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltjdXJyZW50VGltZV0udGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1tpXS5jb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbY3VycmVudFRpbWVdLmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRlbXAgPT09ICdGJykgdGhpcy5ob3Vyc1tpXS50ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2N1cnJlbnRUaW1lXS50ZW1wX2Y7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGVtcCA9PT0gJ0MnKSB0aGlzLmhvdXJzW2ldLnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbY3VycmVudFRpbWVdLnRlbXBfYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHJlc3Qgb2YgMjQgaG91ciBwZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1tpXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2ldLmhvdXIgPSBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbY3VycmVudFRpbWUgLSAyNF0udGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1tpXS5jb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbY3VycmVudFRpbWUgLSAyNF0uY29uZGl0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGVtcCA9PT0gJ0YnKSB0aGlzLmhvdXJzW2ldLnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbY3VycmVudFRpbWUgLSAyNF0udGVtcF9mO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRlbXAgPT09ICdDJykgdGhpcy5ob3Vyc1tpXS50ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2N1cnJlbnRUaW1lIC0gMjRdLnRlbXBfYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHN1bnNldCBhbmQgc3VucmlzZSB0aW1lIGlmIHRoZSB0aW1lIGFycml2ZXNcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPT09IHN1bnJpc2VUaW1lIHx8IGN1cnJlbnRUaW1lIC0gMjQgPT09IHN1bnJpc2VUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91cnNbaSArIDFdID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91cnNbaSArIDFdWzBdID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXVsxXSA9ICdTdW5yaXNlJztcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPT09IHN1bnNldFRpbWUgfHwgY3VycmVudFRpbWUgLSAyNCA9PT0gc3Vuc2V0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXVswXSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXVsxXSA9ICdTdW5zZXQnO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lKys7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgaG91clxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZERheSgpIHtcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IFtcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdO1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy50b2RheS5kYXkgPSB3ZWVrZGF5W2QuZ2V0RGF5KCldO1xuICAgICAgICB0aGlzLmZvcmVjYXN0WzBdLmRheSA9ICdUb2RheSc7XG4gICAgICAgIHRoaXMuZm9yZWNhc3RbMV0uZGF5ID0gd2Vla2RheVsoZC5nZXREYXkoKSArIDEgPiA2KSA/IChkLmdldERheSgpIC0gNikgOiAoZC5nZXREYXkoKSArIDEpXTtcbiAgICAgICAgdGhpcy5mb3JlY2FzdFsyXS5kYXkgPSB3ZWVrZGF5WyhkLmdldERheSgpICsgMiA+IDYpID8gKGQuZ2V0RGF5KCkgLSA1KSA6IChkLmdldERheSgpICsgMildO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbGxPYmplY3QoY2l0eSkge1xuICAgICAgICBhd2FpdCB0aGlzLmFkZERhdGEoY2l0eSk7XG4gICAgICAgIHRoaXMuYWRkRGF5KCk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnRvZGF5ID0ge307XG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSBbe30sIHt9LCB7fV07XG4gICAgICAgIHRoaXMuaG91cnMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyByZW5kZXJVSSB9IGZyb20gJy4vcmVuZGVyJztcblxuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuXG5jb25zdCBjaXR5ID0gbmV3IERhdGEoKTtcblxuLy8gSW5pdGlhbCBkYXRhXG5hd2FpdCBjaXR5LmZpbGxPYmplY3QoJ0xBJyk7XG5jb25zb2xlLmxvZyhjaXR5KVxucmVuZGVyVUkoY2l0eSlcblxuXG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBcbiAgICAvLyBSZXNldCBhbmQgZmV0Y2ggZGF0YVxuICAgIGNpdHkucmVzZXQoKTtcbiAgICBhd2FpdCBjaXR5LmZpbGxPYmplY3Qoc2VhcmNoLnZhbHVlKTtcblxuXG4gICAgLy8gTG9hZCBVSSBhZnRlciBkYXRhIGlzIGZldGNoZWRcbiAgICByZW5kZXJVSShjaXR5KVxufSk7XG4iLCJpbXBvcnQgc3VubnkgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9DbGVhckQucG5nJztcbmltcG9ydCBjbGVhciBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL0NsZWFyTi5wbmcnO1xuaW1wb3J0IHBhcnRseUQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9QYXJ0bHlELnBuZyc7XG5pbXBvcnQgcGFydGx5TiBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL1BhcnRseU4ucG5nJztcbmltcG9ydCBvdmVyY2FzdCBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL092ZXJjYXN0LnBuZyc7XG5pbXBvcnQgZm9nIGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvRm9nLnBuZyc7XG5pbXBvcnQgZHJpenpsZUQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9Ecml6emxlRC5wbmcnO1xuaW1wb3J0IGRyaXp6bGVOIGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvRHJpenpsZU4ucG5nJztcbmltcG9ydCBoZWF2eUQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9IZWF2eUQucG5nJztcbmltcG9ydCBoZWF2eU4gZnJvbSAnLi9waG90b3Mvd2VhdGhlci9IZWF2eU4ucG5nJztcbmltcG9ydCB0aHVuZGVyRCBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL1RodW5kZXJELnBuZyc7XG5pbXBvcnQgdGh1bmRlck4gZnJvbSAnLi9waG90b3Mvd2VhdGhlci9UaHVuZGVyTi5wbmcnO1xuaW1wb3J0IHNub3dEIGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvU25vd0QucG5nJztcbmltcG9ydCBzbm93TiBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL1Nub3dOLnBuZyc7XG5pbXBvcnQgYmxpenphcmQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9CbGl6emFyZC5wbmcnO1xuaW1wb3J0IHN1bnJpc2UgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9zdW5yaXNlLnBuZyc7XG5pbXBvcnQgc3Vuc2V0IGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvc3Vuc2V0LnBuZyc7XG5cbi8vIExlZnQgQ29udGFpbmVyIGNhY2hlXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29udGFpbmVyIC5jaXR5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29udGFpbmVyIC50ZW1wJyk7XG5jb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb250YWluZXIgLmNvbmRpdGlvbicpO1xuY29uc3QgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29udGFpbmVyIC5taW5tYXggLm1pbnRlbXAnKTtcbmNvbnN0IG1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbnRhaW5lciAubWlubWF4IC5tYXh0ZW1wJyk7XG5cbi8vIFJpZ2h0IENvbnRhaW5lciB0b3AgaW5mb1xuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtY29udGFpbmVyIC5pbmZvIC5mZWVscyAudGV4dCcpO1xuY29uc3QgZXBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWNvbnRhaW5lciAuaW5mbyAuZXBhIC50ZXh0Jyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250YWluZXIgLmluZm8gLmh1bWlkaXR5IC50ZXh0Jyk7XG5jb25zdCB1diA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250YWluZXIgLmluZm8gLnV2IC50ZXh0Jyk7XG5cbi8vIFJpZ2h0IENvbnRhaW5lciBob3Vyc1xuY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtY29udGFpbmVyIC5ob3VycycpO1xuXG5sZXQgc3VucmlzZVRpbWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE91dHB1dHMgaG91ciBvZiBzdW5yaXNlXG5sZXQgc3Vuc2V0VGltZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE91dHB1dHMgaG91ciBvZiBzdW5zZXRcblxuZnVuY3Rpb24gZ2V0U3Vuc2V0U3VucmlzZShkYXRhKSB7XG4gICAgc3VucmlzZVRpbWUgPSBwYXJzZUludChkYXRhLnRvZGF5LnN1bnJpc2Uuc3BsaXQoJzonKVswXSk7XG4gICAgc3Vuc2V0VGltZSA9IHBhcnNlSW50KGRhdGEudG9kYXkuc3Vuc2V0LnNwbGl0KCc6JylbMF0pICsgMTI7XG59XG5cbmZ1bmN0aW9uIHJlcm5kZXJMZWZ0Q29udGFpbmVyKGRhdGFUb2RheSkge1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSBkYXRhVG9kYXkubG9jYXRpb247XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGFUb2RheS50ZW1wICsgJ8KwJztcbiAgICByZW5kZXJJbWFnZShuZXcgRGF0ZSgpLmdldEhvdXJzKCksIGRhdGFUb2RheS5jb25kaXRpb24sIGNvbmRpdGlvbik7XG4gICAgbWluLnRleHRDb250ZW50ID0gYEw6ICR7ZGF0YVRvZGF5Lm1pbnRlbXB9wrBgO1xuICAgIG1heC50ZXh0Q29udGVudCA9IGBIOiAke2RhdGFUb2RheS5tYXh0ZW1wfcKwYDtcbn1cbmZ1bmN0aW9uIHJlbmRlckluZm8oZGF0YVRvZGF5KSB7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgJHtkYXRhVG9kYXkuZmVlbHNsaWtlfcKwYDtcbiAgICBlcGEudGV4dENvbnRlbnQgPSBkYXRhVG9kYXkuZXBhO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF0YVRvZGF5Lmh1bWlkaXR5O1xuICAgIHV2LnRleHRDb250ZW50ID0gZGF0YVRvZGF5LnV2O1xufVxuZnVuY3Rpb24gcmVuZGVySG91cnMoaG91cnMpIHtcbiAgICBjb25zdCB0aW1lID0gICAgWycxMkFNJywgJzFBTScsICcyQU0nLCAnM0FNJywgJzRBTScsICc1QU0nLFxuICAgICAgICAgICAgICAgICAgICAnNkFNJywgJzdBTScsICc4QU0nLCAnOUFNJywgJzEwQU0nLCAnMTFBTScsXG4gICAgICAgICAgICAgICAgICAgICcxMlBNJywgJzFQTScsICcyUE0nLCAnM1BNJywgJzRQTScsICc1UE0nLFxuICAgICAgICAgICAgICAgICAgICAnNlBNJywgJzdQTScsICc4UE0nLCAnOVBNJywgJzEwUE0nLCAnMTFQTScsICdOT1cnXTtcbiAgICBob3Vyc1swXS5ob3VyID0gMjQ7XG5cbiAgICBob3Vycy5mb3JFYWNoKGhvdXIgPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRUaW1lLmNsYXNzTGlzdC5hZGQoJ2hvdXItY2FyZC1yb3cnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGltZSk7XG5cbiAgICAgICAgY29uc3QgY2FyZENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvdXItY2FyZC1yb3cnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29uZGl0aW9uKTtcblxuICAgICAgICBjb25zdCBjYXJkVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkVGVtcC5jbGFzc0xpc3QuYWRkKCdob3VyLWNhcmQtcm93Jyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRlbXApO1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShob3VyKSkge1xuICAgICAgICAgICAgY2FyZFRpbWUudGV4dENvbnRlbnQgPSBgJHt0aW1lW2hvdXIuaG91cl19YDtcbiAgICAgICAgICAgIHJlbmRlckltYWdlKGhvdXIuaG91ciwgaG91ci5jb25kaXRpb24sIGNhcmRDb25kaXRpb24pO1xuICAgICAgICAgICAgY2FyZFRlbXAudGV4dENvbnRlbnQgPSBgJHtob3VyLnRlbXB9wrBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FyZFRpbWUudGV4dENvbnRlbnQgPSBob3VyWzBdO1xuICAgICAgICAgICAgY2FyZFRpbWUuY2xhc3NMaXN0LmFkZCgnc3Vuc2V0LXN1bnJpc2UtdGltZScpO1xuICAgICAgICAgICAgcmVuZGVySW1hZ2UoaG91ci5ob3VyLCBob3VyWzFdLCBjYXJkQ29uZGl0aW9uKTtcbiAgICAgICAgICAgIGNhcmRUZW1wLnRleHRDb250ZW50ID0gaG91clsxXTtcbiAgICAgICAgfVxuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhob3Vycylcbn1cbmZ1bmN0aW9uIGhvdXJTY3JvbGwoKSB7XG4gICAgbGV0IHN0YXJ0WCwgc2Nyb2xsTGVmdDtcbiAgICBsZXQgaXNEb3duID0gZmFsc2U7XG4gICAgaG91cnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZS5wYWdlWDtcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGhvdXJzQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgfSk7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGhvdXJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaG91cnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB4ID0gZS5wYWdlWDtcbiAgICAgICAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDM7IC8vc2Nyb2xsLWZhc3RcbiAgICAgICAgaG91cnNDb250YWluZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVuZGVySW1hZ2UoaG91ciwgY29uZGl0aW9uLCBwYXJlbnQpIHtcbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1N1bnJpc2UnKSBpY29uLnNyYyA9IHN1bnJpc2U7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1N1bnNldCcpIGljb24uc3JjID0gc3Vuc2V0O1xuICAgIGlmIChjb25kaXRpb24gPT09ICdTdW5ueScpIGljb24uc3JjID0gc3Vubnk7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ0NsZWFyJykgaWNvbi5zcmMgPSBjbGVhcjtcbiAgICBpZiAoY29uZGl0aW9uID09PSAnQ2xvdWR5JyB8fCBjb25kaXRpb24gPT09ICdPdmVyY2FzdCcpIGljb24uc3JjID0gb3ZlcmNhc3Q7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ01pc3QnIHx8IGNvbmRpdGlvbiA9PT0gJ0ZvZycgfHwgY29uZGl0aW9uID09PSAnRnJlZXppbmcgZm9nJykgaWNvbi5zcmMgPSBmb2c7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ0JsaXp6YXJkJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCcgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGhlYXZ5IHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0hlYXZ5IHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0ljZSBwZWxsZXRzJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnMnIHx8IGNvbmRpdGlvbiA9PT0gJ01vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnKSBpY29uLnNyYyA9IGJsaXp6YXJkO1xuICAgIGlmIChob3VyID49IHN1bnNldFRpbWUgfHwgaG91ciA8PSBzdW5yaXNlVGltZSkge1xuICAgICAgICBpZiAoY29uZGl0aW9uID09PSAnUGFydGx5IGNsb3VkeScpIGljb24uc3JjID0gcGFydGx5TjtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSByYWluIHBvc3NpYmxlJyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgbGlnaHQgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IHJhaW4nIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHJhaW4nICB8fCBjb25kaXRpb24gPT09ICdMaWdodCBmcmVlemluZyByYWluJyB8fCBjb25kaXRpb24gPT09ICdMaWdodCByYWluIHNob3dlcicgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc2xlZXQgc2hvd2VycycpIGljb24uc3JjID0gZHJpenpsZU47XG4gICAgICAgIGlmIChjb25kaXRpb24gPT09ICdIZWF2eSBmcmVlemluZyBkcml6emxlJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSByYWluIGF0IHRpbWVzJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSByYWluJyB8fCBjb25kaXRpb24gPT09ICdIZWF2eSByYWluIGF0IHRpbWVzJyB8fCBjb25kaXRpb24gPT09ICdIZWF2eSByYWluJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcicgfHwgY29uZGl0aW9uID09PSAnVG9ycmVudGlhbCByYWluIHNob3dlcicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2VycycpIGljb24uc3JjID0gaGVhdnlOO1xuICAgICAgICBpZiAoY29uZGl0aW9uID09PSAnUGF0Y2h5IHNub3cgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBzbGVldCBwb3NzaWJsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ0Jsb3dpbmcgc25vdycgfHwgY29uZGl0aW9uID09PSAnRnJlZXppbmcgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc2xlZXQnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCBzbm93JyB8fCBjb25kaXRpb24gPT09ICdMaWdodCBzbm93JyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgbW9kZXJhdGUgc25vdycgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgc25vdycgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc25vdyBzaG93ZXJzJyB8fCBjb25kaXRpb24gPT09ICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJykgaWNvbi5zcmMgPSBzbm93TjtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlcicgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlcicpIGljb24uc3JjID0gdGh1bmRlck47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1BhcnRseSBjbG91ZHknKSBpY29uLnNyYyA9IHBhcnRseUQ7XG4gICAgICAgIGlmIChjb25kaXRpb24gPT09ICdQYXRjaHkgcmFpbiBwb3NzaWJsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IGRyaXp6bGUnIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IGRyaXp6bGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCByYWluJyB8fCBjb25kaXRpb24gPT09ICdMaWdodCByYWluJyAgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgZnJlZXppbmcgcmFpbicgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgcmFpbiBzaG93ZXInIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNsZWV0IHNob3dlcnMnKSBpY29uLnNyYyA9IGRyaXp6bGVEO1xuICAgICAgICBpZiAoY29uZGl0aW9uID09PSAnSGVhdnkgZnJlZXppbmcgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgcmFpbicgfHwgY29uZGl0aW9uID09PSAnSGVhdnkgcmFpbiBhdCB0aW1lcycgfHwgY29uZGl0aW9uID09PSAnSGVhdnkgcmFpbicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpbicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInIHx8IGNvbmRpdGlvbiA9PT0gJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInIHx8IGNvbmRpdGlvbiA9PT0gJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnMnKSBpY29uLnNyYyA9IGhlYXZ5RDtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgc2xlZXQgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlJyB8fCBjb25kaXRpb24gPT09ICdCbG93aW5nIHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0ZyZWV6aW5nIGRyaXp6bGUnIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNsZWV0JyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgbGlnaHQgc25vdycgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc25vdycgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ01vZGVyYXRlIHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNub3cgc2hvd2VycycgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0cycpIGljb24uc3JjID0gc25vd0Q7XG4gICAgICAgIGlmIChjb25kaXRpb24gPT09ICdUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlcicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXInKSBpY29uLnNyYyA9IHRodW5kZXJEO1xuICAgIH1cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSAnJztcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gJyc7XG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWF4LnRleHRDb250ZW50ID0gJyc7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSAnJztcbiAgICBlcGEudGV4dENvbnRlbnQgPSAnJztcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9ICcnO1xuICAgIHV2LnRleHRDb250ZW50ID0gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVSShkYXRhKSB7XG4gICAgcmVzZXQoKTtcbiAgICBnZXRTdW5zZXRTdW5yaXNlKGRhdGEpO1xuICAgIHJlcm5kZXJMZWZ0Q29udGFpbmVyKGRhdGEudG9kYXkpO1xuICAgIHJlbmRlckluZm8oZGF0YS50b2RheSk7XG4gICAgcmVuZGVySG91cnMoZGF0YS5ob3Vycyk7XG4gICAgaG91clNjcm9sbCgpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIHdlYnBhY2tRdWV1ZXMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHRib2R5KChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9LCAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSkpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=