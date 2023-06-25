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
	--card-color: rgba(0, 0, 0, 0.782);
	font-size: 1.5rem;
	color: white;
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
.search-container {
	margin: 5vh;
}
.search-container input,
.search-container button{
	background-color: var(--card-color);
}

.today {
	border-radius: 2rem;
	padding: 1.2rem;
	display: flex;
	background-color: var(--card-color);
	width: min(80vw, 1000px);
	font-size: 1.6rem;
}
.today .left-container {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
}
.today .left-container .condition img{
	height: 5rem;
	width: auto;
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
}
.forecasts {
	margin: 5vh;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
	border-radius: 2rem;
	width: min(80vw, 1000px);
	font-size: 1.8rem;
}
.forecasts .forecast {
	background-color: var(--card-color);
	border-radius: 2rem;
	display: flex;
	align-items: center;
}
.forecasts .forecast .day {
	width: 10rem;
	padding: 0px 1rem;
}
.forecasts .forecast .icon {
	flex: 1;
}
.forecasts .forecast p {
	display: flex;
	justify-content: center;
	width: 9rem;
}
@media (max-width: 800px) {
	.today{
		font-size: 1.5rem;
		flex-direction: column;
	}
	.today .right-container .info {
		font-size: 1rem;
	}
	.forecast {
		font-size: 1rem;
	}
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;AACA;IACI,sBAAsB;CACzB,kCAAkC;CAClC,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;;CAEnB,yDAAgD;CAChD,sBAAsB;CACtB,aAAa;AACd;AACA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,WAAW;AACZ;AACA;;CAEC,mCAAmC;AACpC;;AAEA;CACC,mBAAmB;CACnB,eAAe;CACf,aAAa;CACb,mCAAmC;CACnC,wBAAwB;CACxB,iBAAiB;AAClB;AACA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,WAAW;AACZ;AACA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,aAAa;CACb,SAAS;AACV;AACA;CACC,OAAO;CACP,aAAa;CACb,sBAAsB;CACtB,cAAc;AACf;AACA;CACC,aAAa;CACb,6BAA6B;CAC7B,aAAa;AACd;AACA;CACC,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,OAAO;CACP,aAAa;CACb,cAAc;AACf;AACA;IACI,aAAa;AACjB;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,qBAAqB;CACrB,sBAAsB;CACtB,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,WAAW;CACX,aAAa;CACb,sBAAsB;CACtB,SAAS;;CAET,mBAAmB;CACnB,wBAAwB;CACxB,iBAAiB;AAClB;AACA;CACC,mCAAmC;CACnC,mBAAmB;CACnB,aAAa;CACb,mBAAmB;AACpB;AACA;CACC,YAAY;CACZ,iBAAiB;AAClB;AACA;CACC,OAAO;AACR;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,WAAW;AACZ;AACA;CACC;EACC,iBAAiB;EACjB,sBAAsB;CACvB;CACA;EACC,eAAe;CAChB;CACA;EACC,eAAe;CAChB;AACD","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n* {\n    box-sizing: border-box;\n\t--card-color: rgba(0, 0, 0, 0.782);\n\tfont-size: 1.5rem;\n\tcolor: white;\n}\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\tbackground-image: url('./photos/background.jpg');\n\tbackground-size: cover;\n\theight: 100vh;\n} \nimg {\n\theight: 50px;\n\twidth: auto;\n}\n.search-container {\n\tmargin: 5vh;\n}\n.search-container input,\n.search-container button{\n\tbackground-color: var(--card-color);\n}\n\n.today {\n\tborder-radius: 2rem;\n\tpadding: 1.2rem;\n\tdisplay: flex;\n\tbackground-color: var(--card-color);\n\twidth: min(80vw, 1000px);\n\tfont-size: 1.6rem;\n}\n.today .left-container {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 0.5rem;\n}\n.today .left-container .condition img{\n\theight: 5rem;\n\twidth: auto;\n}\n.today .left-container .minmax{\n\tdisplay: flex;\n\tgap: 1rem;\n}\n.today .right-container {\n\tflex: 2;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: auto;\n}\n.today .right-container .info {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tpadding: 1rem;\n}\n.today .right-container .info .text{\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.today .right-container .hours {\n\tflex: 2;\n\tdisplay: flex;\n\toverflow: auto;\n}\n.hours::-webkit-scrollbar {\n    display: none;\n}\n.today .right-container .hours .card{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n\tflex-direction: column;\n\theight: 8rem;\n\tpadding: 5px 1rem;\n}\n.card .sunset-sunrise-time {\n\twidth: 7rem;\n}\n.card .hour-card-row {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n.forecasts {\n\tmargin: 5vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\t\n\tborder-radius: 2rem;\n\twidth: min(80vw, 1000px);\n\tfont-size: 1.8rem;\n}\n.forecasts .forecast {\n\tbackground-color: var(--card-color);\n\tborder-radius: 2rem;\n\tdisplay: flex;\n\talign-items: center;\n}\n.forecasts .forecast .day {\n\twidth: 10rem;\n\tpadding: 0px 1rem;\n}\n.forecasts .forecast .icon {\n\tflex: 1;\n}\n.forecasts .forecast p {\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 9rem;\n}\n@media (max-width: 800px) {\n\t.today{\n\t\tfont-size: 1.5rem;\n\t\tflex-direction: column;\n\t}\n\t.today .right-container .info {\n\t\tfont-size: 1rem;\n\t}\n\t.forecast {\n\t\tfont-size: 1rem;\n\t}\n}"],"sourceRoot":""}]);
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

// Forecasts container
const forecasts = document.querySelector('.forecasts');

let sunriseTime;        // Hour of sunrise
let sunsetTime;         // Hour of sunset

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

function renderForecasts(data) {
    data.forEach(forecast => {
        const card = document.createElement('p');
        card.classList.add('forecast')
        forecasts.appendChild(card);

        const day = document.createElement('div');
        day.classList.add('day')
        day.textContent = forecast.day;
        card.appendChild(day);

        const icon = document.createElement('div');
        icon.classList.add('icon')
        renderImage(12, forecast.condition, icon);
        card.appendChild(icon);

        const low = document.createElement('p');
        low.textContent = `L: ${forecast.mintemp}°`;
        card.appendChild(low);

        const avg = document.createElement('p');
        avg.textContent = `Avg: ${forecast.avgtemp}°`;
        card.appendChild(avg);

        const high = document.createElement('p');
        high.textContent = `H: ${forecast.maxtemp}°`;
        card.appendChild(high);
    });
    console.log(data)
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
    hoursContainer.textContent = '';
    forecasts.textContent = '';
}

function renderUI(data) {
    reset();
    getSunsetSunrise(data);
    rernderLeftContainer(data.today);
    renderInfo(data.today);
    renderHours(data.hours);
    hourScroll();
    renderForecasts(data.forecast);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixNQUFNLGlCQUFpQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssWUFBWSxh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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3Bob3Rvcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0LS1jYXJkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzgyKTtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbmJvZHkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0aGVpZ2h0OiAxMDB2aDtcbn0gXG5pbWcge1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiBhdXRvO1xufVxuLnNlYXJjaC1jb250YWluZXIge1xuXHRtYXJnaW46IDV2aDtcbn1cbi5zZWFyY2gtY29udGFpbmVyIGlucHV0LFxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9ue1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcbn1cblxuLnRvZGF5IHtcblx0Ym9yZGVyLXJhZGl1czogMnJlbTtcblx0cGFkZGluZzogMS4ycmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcblx0d2lkdGg6IG1pbig4MHZ3LCAxMDAwcHgpO1xuXHRmb250LXNpemU6IDEuNnJlbTtcbn1cbi50b2RheSAubGVmdC1jb250YWluZXIge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjVyZW07XG59XG4udG9kYXkgLmxlZnQtY29udGFpbmVyIC5jb25kaXRpb24gaW1ne1xuXHRoZWlnaHQ6IDVyZW07XG5cdHdpZHRoOiBhdXRvO1xufVxuLnRvZGF5IC5sZWZ0LWNvbnRhaW5lciAubWlubWF4e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDFyZW07XG59XG4udG9kYXkgLnJpZ2h0LWNvbnRhaW5lciB7XG5cdGZsZXg6IDI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmluZm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0cGFkZGluZzogMXJlbTtcbn1cbi50b2RheSAucmlnaHQtY29udGFpbmVyIC5pbmZvIC50ZXh0e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50b2RheSAucmlnaHQtY29udGFpbmVyIC5ob3VycyB7XG5cdGZsZXg6IDI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuLmhvdXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi50b2RheSAucmlnaHQtY29udGFpbmVyIC5ob3VycyAuY2FyZHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0aGVpZ2h0OiA4cmVtO1xuXHRwYWRkaW5nOiA1cHggMXJlbTtcbn1cbi5jYXJkIC5zdW5zZXQtc3VucmlzZS10aW1lIHtcblx0d2lkdGg6IDdyZW07XG59XG4uY2FyZCAuaG91ci1jYXJkLXJvdyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvcmVjYXN0cyB7XG5cdG1hcmdpbjogNXZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG5cdFxuXHRib3JkZXItcmFkaXVzOiAycmVtO1xuXHR3aWR0aDogbWluKDgwdncsIDEwMDBweCk7XG5cdGZvbnQtc2l6ZTogMS44cmVtO1xufVxuLmZvcmVjYXN0cyAuZm9yZWNhc3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbG9yKTtcblx0Ym9yZGVyLXJhZGl1czogMnJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JlY2FzdHMgLmZvcmVjYXN0IC5kYXkge1xuXHR3aWR0aDogMTByZW07XG5cdHBhZGRpbmc6IDBweCAxcmVtO1xufVxuLmZvcmVjYXN0cyAuZm9yZWNhc3QgLmljb24ge1xuXHRmbGV4OiAxO1xufVxuLmZvcmVjYXN0cyAuZm9yZWNhc3QgcCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR3aWR0aDogOXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuXHQudG9kYXl7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0fVxuXHQudG9kYXkgLnJpZ2h0LWNvbnRhaW5lciAuaW5mbyB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cdC5mb3JlY2FzdCB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCO0FBQ0E7SUFDSSxzQkFBc0I7Q0FDekIsa0NBQWtDO0NBQ2xDLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1COztDQUVuQix5REFBZ0Q7Q0FDaEQsc0JBQXNCO0NBQ3RCLGFBQWE7QUFDZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7O0NBRUMsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLHdCQUF3QjtDQUN4QixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsU0FBUztBQUNWO0FBQ0E7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixjQUFjO0FBQ2Y7QUFDQTtDQUNDLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLGNBQWM7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUzs7Q0FFVCxtQkFBbUI7Q0FDbkIsd0JBQXdCO0NBQ3hCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsbUNBQW1DO0NBQ25DLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxPQUFPO0FBQ1I7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsV0FBVztBQUNaO0FBQ0E7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdC0tY2FyZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc4Mik7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcGhvdG9zL2JhY2tncm91bmQuanBnJyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn0gXFxuaW1nIHtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0d2lkdGg6IGF1dG87XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDV2aDtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQsXFxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9ue1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtY29sb3IpO1xcbn1cXG5cXG4udG9kYXkge1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0cGFkZGluZzogMS4ycmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxuXFx0d2lkdGg6IG1pbig4MHZ3LCAxMDAwcHgpO1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG4udG9kYXkgLmxlZnQtY29udGFpbmVyIHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG4udG9kYXkgLmxlZnQtY29udGFpbmVyIC5jb25kaXRpb24gaW1ne1xcblxcdGhlaWdodDogNXJlbTtcXG5cXHR3aWR0aDogYXV0bztcXG59XFxuLnRvZGF5IC5sZWZ0LWNvbnRhaW5lciAubWlubWF4e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG4udG9kYXkgLnJpZ2h0LWNvbnRhaW5lciB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcbi50b2RheSAucmlnaHQtY29udGFpbmVyIC5pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcbi50b2RheSAucmlnaHQtY29udGFpbmVyIC5pbmZvIC50ZXh0e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50b2RheSAucmlnaHQtY29udGFpbmVyIC5ob3VycyB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaG91cnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnRvZGF5IC5yaWdodC1jb250YWluZXIgLmhvdXJzIC5jYXJke1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24tY29udGVudDogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0aGVpZ2h0OiA4cmVtO1xcblxcdHBhZGRpbmc6IDVweCAxcmVtO1xcbn1cXG4uY2FyZCAuc3Vuc2V0LXN1bnJpc2UtdGltZSB7XFxuXFx0d2lkdGg6IDdyZW07XFxufVxcbi5jYXJkIC5ob3VyLWNhcmQtcm93IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uZm9yZWNhc3RzIHtcXG5cXHRtYXJnaW46IDV2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdFxcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0d2lkdGg6IG1pbig4MHZ3LCAxMDAwcHgpO1xcblxcdGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG4uZm9yZWNhc3RzIC5mb3JlY2FzdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb3JlY2FzdHMgLmZvcmVjYXN0IC5kYXkge1xcblxcdHdpZHRoOiAxMHJlbTtcXG5cXHRwYWRkaW5nOiAwcHggMXJlbTtcXG59XFxuLmZvcmVjYXN0cyAuZm9yZWNhc3QgLmljb24ge1xcblxcdGZsZXg6IDE7XFxufVxcbi5mb3JlY2FzdHMgLmZvcmVjYXN0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDlyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcblxcdC50b2RheXtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQudG9kYXkgLnJpZ2h0LWNvbnRhaW5lciAuaW5mbyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXHQuZm9yZWNhc3Qge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG9kYXkgPSB7fTtcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IFt7fSwge30sIHt9XTtcbiAgICAgICAgdGhpcy5ob3VycyA9IFtdO1xuICAgICAgICB0aGlzLnRlbXAgPSAnRidcbiAgICB9XG5cbiAgICBhc3luYyBhZGREYXRhKGNpdHkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEZldGNoIGRhdGEgZnJvbSBBUElcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWE5MWZkOTM5OTg1OTRkZjY4ZTkyMDI1NTAyMzIwMDYmcT0ke2NpdHl9JmRheXM9MyZhcWk9eWVzYCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTdG9yZSBmZXRjaGVkIGRhdGEgaW4gdG9kYXlcbiAgICAgICAgICAgIGlmKHRoaXMudGVtcCA9PT0gJ0YnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RheS50ZW1wID0gZGF0YS5jdXJyZW50LnRlbXBfZjtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5LmZlZWxzbGlrZSA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZjtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5Lm1heHRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RheS5taW50ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy50ZW1wID09PSAnQycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5LnRlbXAgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkuZmVlbHNsaWtlID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jO1xuICAgICAgICAgICAgICAgIHRoaXMudG9kYXkubWF4dGVtcCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYztcbiAgICAgICAgICAgICAgICB0aGlzLnRvZGF5Lm1pbnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvZGF5LmNvbmRpdGlvbiA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICAgICAgICAgIHRoaXMudG9kYXkuaHVtaWRpdHkgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHk7XG4gICAgICAgICAgICB0aGlzLnRvZGF5LmxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbi5uYW1lICsgJywgJyArIGRhdGEubG9jYXRpb24ucmVnaW9uO1xuICAgICAgICAgICAgdGhpcy50b2RheS51diA9IGRhdGEuY3VycmVudC51djtcbiAgICAgICAgICAgIHRoaXMudG9kYXkuc3VucmlzZSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgICAgICAgICAgIHRoaXMudG9kYXkuc3Vuc2V0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgICAgICAgICB0aGlzLnRvZGF5LmVwYSA9IGRhdGEuY3VycmVudC5haXJfcXVhbGl0eVsndXMtZXBhLWluZGV4J107XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIGZldGNoZWQgZGF0YSBpbiBmb3JlY2FzdFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RbaV0uY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgaWYodGhpcy50ZW1wID09PSAnRicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JlY2FzdFtpXS5tYXh0ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmVjYXN0W2ldLm1pbnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2Y7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RbaV0uYXZndGVtcCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy50ZW1wID09PSAnQycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JlY2FzdFtpXS5tYXh0ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmVjYXN0W2ldLm1pbnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2M7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZWNhc3RbaV0uYXZndGVtcCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIDI0IGhvdXIgcGVyaW9kIGFuZCBzdW5yaXNlIGFuZCBzdW5zZXRcbiAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTsgICAgLy8gSW5pdGlhbGl6ZSB0aW1lXG4gICAgICAgICAgICBsZXQgc3VucmlzZVRpbWUgPSBwYXJzZUludChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnJpc2Uuc3BsaXQoJzonKVswXSk7ICAgICAgIC8vIE91dHB1dHMgaG91ciBvZiBzdW5yaXNlXG4gICAgICAgICAgICBsZXQgc3Vuc2V0VGltZSA9IHBhcnNlSW50KGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0LnNwbGl0KCc6JylbMF0pICsgMTI7ICAgIC8vIE91dHB1dHMgaG91ciBvZiBzdW5zZXRcbiAgICAgICAgICAgIC8vIElmIHRpbWUgcGFzc2VkLCB1c2UgdG9tb3Jyb3cncyBzdW5zZXQgYW5kIHN1bnJpc2VcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IHN1bnJpc2VUaW1lKSBzdW5yaXNlVGltZSA9IHBhcnNlSW50KGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uYXN0cm8uc3VucmlzZS5zcGxpdCgnOicpWzBdKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZSA+IHN1bnNldFRpbWUpIHN1bnNldFRpbWUgPSBwYXJzZUludChkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmFzdHJvLnN1bnNldC5zcGxpdCgnOicpWzBdKSArIDEyO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjc7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIDwgMjQpIHsgICAgICAgICAgICAgICAgICAvLyBTdG9yZSByZW1haW5pbmcgaG91cnMgb2YgdGhlIGRheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2ldID0ge307XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91cnNbaV0uaG91ciA9IG5ldyBEYXRlKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltjdXJyZW50VGltZV0udGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1tpXS5jb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbY3VycmVudFRpbWVdLmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRlbXAgPT09ICdGJykgdGhpcy5ob3Vyc1tpXS50ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2N1cnJlbnRUaW1lXS50ZW1wX2Y7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGVtcCA9PT0gJ0MnKSB0aGlzLmhvdXJzW2ldLnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbY3VycmVudFRpbWVdLnRlbXBfYztcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHJlc3Qgb2YgMjQgaG91ciBwZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1tpXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2ldLmhvdXIgPSBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbY3VycmVudFRpbWUgLSAyNF0udGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1tpXS5jb25kaXRpb24gPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbY3VycmVudFRpbWUgLSAyNF0uY29uZGl0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGVtcCA9PT0gJ0YnKSB0aGlzLmhvdXJzW2ldLnRlbXAgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXJbY3VycmVudFRpbWUgLSAyNF0udGVtcF9mO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRlbXAgPT09ICdDJykgdGhpcy5ob3Vyc1tpXS50ZW1wID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyW2N1cnJlbnRUaW1lIC0gMjRdLnRlbXBfYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQWRkIHN1bnNldCBhbmQgc3VucmlzZSB0aW1lIGlmIHRoZSB0aW1lIGFycml2ZXNcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPT09IHN1bnJpc2VUaW1lIHx8IGN1cnJlbnRUaW1lIC0gMjQgPT09IHN1bnJpc2VUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91cnNbaSArIDFdID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG91cnNbaSArIDFdWzBdID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXVsxXSA9ICdTdW5yaXNlJztcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbWUgPT09IHN1bnNldFRpbWUgfHwgY3VycmVudFRpbWUgLSAyNCA9PT0gc3Vuc2V0VGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXVswXSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdXJzW2kgKyAxXVsxXSA9ICdTdW5zZXQnO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lKys7ICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgaG91clxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXJyKVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZERheSgpIHtcbiAgICAgICAgY29uc3Qgd2Vla2RheSA9IFtcIlN1bmRheVwiLFwiTW9uZGF5XCIsXCJUdWVzZGF5XCIsXCJXZWRuZXNkYXlcIixcIlRodXJzZGF5XCIsXCJGcmlkYXlcIixcIlNhdHVyZGF5XCJdO1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy50b2RheS5kYXkgPSB3ZWVrZGF5W2QuZ2V0RGF5KCldO1xuICAgICAgICB0aGlzLmZvcmVjYXN0WzBdLmRheSA9ICdUb2RheSc7XG4gICAgICAgIHRoaXMuZm9yZWNhc3RbMV0uZGF5ID0gd2Vla2RheVsoZC5nZXREYXkoKSArIDEgPiA2KSA/IChkLmdldERheSgpIC0gNikgOiAoZC5nZXREYXkoKSArIDEpXTtcbiAgICAgICAgdGhpcy5mb3JlY2FzdFsyXS5kYXkgPSB3ZWVrZGF5WyhkLmdldERheSgpICsgMiA+IDYpID8gKGQuZ2V0RGF5KCkgLSA1KSA6IChkLmdldERheSgpICsgMildO1xuICAgIH1cblxuICAgIGFzeW5jIGZpbGxPYmplY3QoY2l0eSkge1xuICAgICAgICBhd2FpdCB0aGlzLmFkZERhdGEoY2l0eSk7XG4gICAgICAgIHRoaXMuYWRkRGF5KCk7XG4gICAgfVxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnRvZGF5ID0ge307XG4gICAgICAgIHRoaXMuZm9yZWNhc3QgPSBbe30sIHt9LCB7fV07XG4gICAgICAgIHRoaXMuaG91cnMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyByZW5kZXJVSSB9IGZyb20gJy4vcmVuZGVyJztcblxuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuXG5jb25zdCBjaXR5ID0gbmV3IERhdGEoKTtcblxuLy8gSW5pdGlhbCBkYXRhXG5hd2FpdCBjaXR5LmZpbGxPYmplY3QoJ0xBJyk7XG5jb25zb2xlLmxvZyhjaXR5KVxucmVuZGVyVUkoY2l0eSlcblxuXG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBcbiAgICAvLyBSZXNldCBhbmQgZmV0Y2ggZGF0YVxuICAgIGNpdHkucmVzZXQoKTtcbiAgICBhd2FpdCBjaXR5LmZpbGxPYmplY3Qoc2VhcmNoLnZhbHVlKTtcblxuXG4gICAgLy8gTG9hZCBVSSBhZnRlciBkYXRhIGlzIGZldGNoZWRcbiAgICByZW5kZXJVSShjaXR5KVxufSk7XG4iLCJpbXBvcnQgc3VubnkgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9DbGVhckQucG5nJztcbmltcG9ydCBjbGVhciBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL0NsZWFyTi5wbmcnO1xuaW1wb3J0IHBhcnRseUQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9QYXJ0bHlELnBuZyc7XG5pbXBvcnQgcGFydGx5TiBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL1BhcnRseU4ucG5nJztcbmltcG9ydCBvdmVyY2FzdCBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL092ZXJjYXN0LnBuZyc7XG5pbXBvcnQgZm9nIGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvRm9nLnBuZyc7XG5pbXBvcnQgZHJpenpsZUQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9Ecml6emxlRC5wbmcnO1xuaW1wb3J0IGRyaXp6bGVOIGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvRHJpenpsZU4ucG5nJztcbmltcG9ydCBoZWF2eUQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9IZWF2eUQucG5nJztcbmltcG9ydCBoZWF2eU4gZnJvbSAnLi9waG90b3Mvd2VhdGhlci9IZWF2eU4ucG5nJztcbmltcG9ydCB0aHVuZGVyRCBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL1RodW5kZXJELnBuZyc7XG5pbXBvcnQgdGh1bmRlck4gZnJvbSAnLi9waG90b3Mvd2VhdGhlci9UaHVuZGVyTi5wbmcnO1xuaW1wb3J0IHNub3dEIGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvU25vd0QucG5nJztcbmltcG9ydCBzbm93TiBmcm9tICcuL3Bob3Rvcy93ZWF0aGVyL1Nub3dOLnBuZyc7XG5pbXBvcnQgYmxpenphcmQgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9CbGl6emFyZC5wbmcnO1xuaW1wb3J0IHN1bnJpc2UgZnJvbSAnLi9waG90b3Mvd2VhdGhlci9zdW5yaXNlLnBuZyc7XG5pbXBvcnQgc3Vuc2V0IGZyb20gJy4vcGhvdG9zL3dlYXRoZXIvc3Vuc2V0LnBuZyc7XG5cbi8vIExlZnQgQ29udGFpbmVyIGNhY2hlXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29udGFpbmVyIC5jaXR5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29udGFpbmVyIC50ZW1wJyk7XG5jb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb250YWluZXIgLmNvbmRpdGlvbicpO1xuY29uc3QgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29udGFpbmVyIC5taW5tYXggLm1pbnRlbXAnKTtcbmNvbnN0IG1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbnRhaW5lciAubWlubWF4IC5tYXh0ZW1wJyk7XG5cbi8vIFJpZ2h0IENvbnRhaW5lciB0b3AgaW5mb1xuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtY29udGFpbmVyIC5pbmZvIC5mZWVscyAudGV4dCcpO1xuY29uc3QgZXBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWNvbnRhaW5lciAuaW5mbyAuZXBhIC50ZXh0Jyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250YWluZXIgLmluZm8gLmh1bWlkaXR5IC50ZXh0Jyk7XG5jb25zdCB1diA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250YWluZXIgLmluZm8gLnV2IC50ZXh0Jyk7XG5cbi8vIFJpZ2h0IENvbnRhaW5lciBob3Vyc1xuY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtY29udGFpbmVyIC5ob3VycycpO1xuXG4vLyBGb3JlY2FzdHMgY29udGFpbmVyXG5jb25zdCBmb3JlY2FzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3RzJyk7XG5cbmxldCBzdW5yaXNlVGltZTsgICAgICAgIC8vIEhvdXIgb2Ygc3VucmlzZVxubGV0IHN1bnNldFRpbWU7ICAgICAgICAgLy8gSG91ciBvZiBzdW5zZXRcblxuZnVuY3Rpb24gZ2V0U3Vuc2V0U3VucmlzZShkYXRhKSB7XG4gICAgc3VucmlzZVRpbWUgPSBwYXJzZUludChkYXRhLnRvZGF5LnN1bnJpc2Uuc3BsaXQoJzonKVswXSk7XG4gICAgc3Vuc2V0VGltZSA9IHBhcnNlSW50KGRhdGEudG9kYXkuc3Vuc2V0LnNwbGl0KCc6JylbMF0pICsgMTI7XG59XG5cbmZ1bmN0aW9uIHJlcm5kZXJMZWZ0Q29udGFpbmVyKGRhdGFUb2RheSkge1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSBkYXRhVG9kYXkubG9jYXRpb247XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGFUb2RheS50ZW1wICsgJ8KwJztcbiAgICByZW5kZXJJbWFnZShuZXcgRGF0ZSgpLmdldEhvdXJzKCksIGRhdGFUb2RheS5jb25kaXRpb24sIGNvbmRpdGlvbik7XG4gICAgbWluLnRleHRDb250ZW50ID0gYEw6ICR7ZGF0YVRvZGF5Lm1pbnRlbXB9wrBgO1xuICAgIG1heC50ZXh0Q29udGVudCA9IGBIOiAke2RhdGFUb2RheS5tYXh0ZW1wfcKwYDtcbn1cbmZ1bmN0aW9uIHJlbmRlckluZm8oZGF0YVRvZGF5KSB7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgJHtkYXRhVG9kYXkuZmVlbHNsaWtlfcKwYDtcbiAgICBlcGEudGV4dENvbnRlbnQgPSBkYXRhVG9kYXkuZXBhO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF0YVRvZGF5Lmh1bWlkaXR5O1xuICAgIHV2LnRleHRDb250ZW50ID0gZGF0YVRvZGF5LnV2O1xufVxuZnVuY3Rpb24gcmVuZGVySG91cnMoaG91cnMpIHtcbiAgICBjb25zdCB0aW1lID0gICAgWycxMkFNJywgJzFBTScsICcyQU0nLCAnM0FNJywgJzRBTScsICc1QU0nLFxuICAgICAgICAgICAgICAgICAgICAnNkFNJywgJzdBTScsICc4QU0nLCAnOUFNJywgJzEwQU0nLCAnMTFBTScsXG4gICAgICAgICAgICAgICAgICAgICcxMlBNJywgJzFQTScsICcyUE0nLCAnM1BNJywgJzRQTScsICc1UE0nLFxuICAgICAgICAgICAgICAgICAgICAnNlBNJywgJzdQTScsICc4UE0nLCAnOVBNJywgJzEwUE0nLCAnMTFQTScsICdOT1cnXTtcbiAgICBob3Vyc1swXS5ob3VyID0gMjQ7XG5cbiAgICBob3Vycy5mb3JFYWNoKGhvdXIgPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRUaW1lLmNsYXNzTGlzdC5hZGQoJ2hvdXItY2FyZC1yb3cnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGltZSk7XG5cbiAgICAgICAgY29uc3QgY2FyZENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkQ29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvdXItY2FyZC1yb3cnKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29uZGl0aW9uKTtcblxuICAgICAgICBjb25zdCBjYXJkVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkVGVtcC5jbGFzc0xpc3QuYWRkKCdob3VyLWNhcmQtcm93Jyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRlbXApO1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShob3VyKSkge1xuICAgICAgICAgICAgY2FyZFRpbWUudGV4dENvbnRlbnQgPSBgJHt0aW1lW2hvdXIuaG91cl19YDtcbiAgICAgICAgICAgIHJlbmRlckltYWdlKGhvdXIuaG91ciwgaG91ci5jb25kaXRpb24sIGNhcmRDb25kaXRpb24pO1xuICAgICAgICAgICAgY2FyZFRlbXAudGV4dENvbnRlbnQgPSBgJHtob3VyLnRlbXB9wrBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FyZFRpbWUudGV4dENvbnRlbnQgPSBob3VyWzBdO1xuICAgICAgICAgICAgY2FyZFRpbWUuY2xhc3NMaXN0LmFkZCgnc3Vuc2V0LXN1bnJpc2UtdGltZScpO1xuICAgICAgICAgICAgcmVuZGVySW1hZ2UoaG91ci5ob3VyLCBob3VyWzFdLCBjYXJkQ29uZGl0aW9uKTtcbiAgICAgICAgICAgIGNhcmRUZW1wLnRleHRDb250ZW50ID0gaG91clsxXTtcbiAgICAgICAgfVxuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhvdXJTY3JvbGwoKSB7XG4gICAgbGV0IHN0YXJ0WCwgc2Nyb2xsTGVmdDtcbiAgICBsZXQgaXNEb3duID0gZmFsc2U7XG4gICAgaG91cnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZS5wYWdlWDtcbiAgICAgICAgc2Nyb2xsTGVmdCA9IGhvdXJzQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gICAgfSk7XG5cbiAgICBob3Vyc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGhvdXJzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaG91cnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFpc0Rvd24pIHJldHVybjtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB4ID0gZS5wYWdlWDtcbiAgICAgICAgY29uc3Qgd2FsayA9ICh4IC0gc3RhcnRYKSAqIDM7IC8vc2Nyb2xsLWZhc3RcbiAgICAgICAgaG91cnNDb250YWluZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSB3YWxrO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVuZGVySW1hZ2UoaG91ciwgY29uZGl0aW9uLCBwYXJlbnQpIHtcbiAgICBjb25zdCBpY29uID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1N1bnJpc2UnKSBpY29uLnNyYyA9IHN1bnJpc2U7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1N1bnNldCcpIGljb24uc3JjID0gc3Vuc2V0O1xuICAgIGlmIChjb25kaXRpb24gPT09ICdTdW5ueScpIGljb24uc3JjID0gc3Vubnk7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ0NsZWFyJykgaWNvbi5zcmMgPSBjbGVhcjtcbiAgICBpZiAoY29uZGl0aW9uID09PSAnQ2xvdWR5JyB8fCBjb25kaXRpb24gPT09ICdPdmVyY2FzdCcpIGljb24uc3JjID0gb3ZlcmNhc3Q7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ01pc3QnIHx8IGNvbmRpdGlvbiA9PT0gJ0ZvZycgfHwgY29uZGl0aW9uID09PSAnRnJlZXppbmcgZm9nJykgaWNvbi5zcmMgPSBmb2c7XG4gICAgaWYgKGNvbmRpdGlvbiA9PT0gJ0JsaXp6YXJkJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCcgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGhlYXZ5IHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0hlYXZ5IHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0ljZSBwZWxsZXRzJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnMnIHx8IGNvbmRpdGlvbiA9PT0gJ01vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnKSBpY29uLnNyYyA9IGJsaXp6YXJkO1xuICAgIGlmIChob3VyID49IHN1bnNldFRpbWUgfHwgaG91ciA8PSBzdW5yaXNlVGltZSkge1xuICAgICAgICBpZiAoY29uZGl0aW9uID09PSAnUGFydGx5IGNsb3VkeScpIGljb24uc3JjID0gcGFydGx5TjtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSByYWluIHBvc3NpYmxlJyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgbGlnaHQgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IHJhaW4nIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHJhaW4nICB8fCBjb25kaXRpb24gPT09ICdMaWdodCBmcmVlemluZyByYWluJyB8fCBjb25kaXRpb24gPT09ICdMaWdodCByYWluIHNob3dlcicgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc2xlZXQgc2hvd2VycycpIGljb24uc3JjID0gZHJpenpsZU47XG4gICAgICAgIGlmIChjb25kaXRpb24gPT09ICdIZWF2eSBmcmVlemluZyBkcml6emxlJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSByYWluIGF0IHRpbWVzJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSByYWluJyB8fCBjb25kaXRpb24gPT09ICdIZWF2eSByYWluIGF0IHRpbWVzJyB8fCBjb25kaXRpb24gPT09ICdIZWF2eSByYWluJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcicgfHwgY29uZGl0aW9uID09PSAnVG9ycmVudGlhbCByYWluIHNob3dlcicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2VycycpIGljb24uc3JjID0gaGVhdnlOO1xuICAgICAgICBpZiAoY29uZGl0aW9uID09PSAnUGF0Y2h5IHNub3cgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBzbGVldCBwb3NzaWJsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ0Jsb3dpbmcgc25vdycgfHwgY29uZGl0aW9uID09PSAnRnJlZXppbmcgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc2xlZXQnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCBzbm93JyB8fCBjb25kaXRpb24gPT09ICdMaWdodCBzbm93JyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgbW9kZXJhdGUgc25vdycgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgc25vdycgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc25vdyBzaG93ZXJzJyB8fCBjb25kaXRpb24gPT09ICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJykgaWNvbi5zcmMgPSBzbm93TjtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlcicgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJyB8fCBjb25kaXRpb24gPT09ICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlcicpIGljb24uc3JjID0gdGh1bmRlck47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1BhcnRseSBjbG91ZHknKSBpY29uLnNyYyA9IHBhcnRseUQ7XG4gICAgICAgIGlmIChjb25kaXRpb24gPT09ICdQYXRjaHkgcmFpbiBwb3NzaWJsZScgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IGxpZ2h0IGRyaXp6bGUnIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IGRyaXp6bGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCByYWluJyB8fCBjb25kaXRpb24gPT09ICdMaWdodCByYWluJyAgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgZnJlZXppbmcgcmFpbicgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgcmFpbiBzaG93ZXInIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNsZWV0IHNob3dlcnMnKSBpY29uLnNyYyA9IGRyaXp6bGVEO1xuICAgICAgICBpZiAoY29uZGl0aW9uID09PSAnSGVhdnkgZnJlZXppbmcgZHJpenpsZScgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgcmFpbicgfHwgY29uZGl0aW9uID09PSAnSGVhdnkgcmFpbiBhdCB0aW1lcycgfHwgY29uZGl0aW9uID09PSAnSGVhdnkgcmFpbicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpbicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXInIHx8IGNvbmRpdGlvbiA9PT0gJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInIHx8IGNvbmRpdGlvbiA9PT0gJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnMnKSBpY29uLnNyYyA9IGhlYXZ5RDtcbiAgICAgICAgaWYgKGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgc2xlZXQgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlJyB8fCBjb25kaXRpb24gPT09ICdCbG93aW5nIHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0ZyZWV6aW5nIGRyaXp6bGUnIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNsZWV0JyB8fCBjb25kaXRpb24gPT09ICdQYXRjaHkgbGlnaHQgc25vdycgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc25vdycgfHwgY29uZGl0aW9uID09PSAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ01vZGVyYXRlIHNub3cnIHx8IGNvbmRpdGlvbiA9PT0gJ0xpZ2h0IHNub3cgc2hvd2VycycgfHwgY29uZGl0aW9uID09PSAnTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0cycpIGljb24uc3JjID0gc25vd0Q7XG4gICAgICAgIGlmIChjb25kaXRpb24gPT09ICdUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGUnIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCByYWluIHdpdGggdGh1bmRlcicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInIHx8IGNvbmRpdGlvbiA9PT0gJ1BhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlcicgfHwgY29uZGl0aW9uID09PSAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXInKSBpY29uLnNyYyA9IHRodW5kZXJEO1xuICAgIH1cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0cyhkYXRhKSB7XG4gICAgZGF0YS5mb3JFYWNoKGZvcmVjYXN0ID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdCcpXG4gICAgICAgIGZvcmVjYXN0cy5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpXG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmRheTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXkpO1xuXG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICAgICAgcmVuZGVySW1hZ2UoMTIsIGZvcmVjYXN0LmNvbmRpdGlvbiwgaWNvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsb3cudGV4dENvbnRlbnQgPSBgTDogJHtmb3JlY2FzdC5taW50ZW1wfcKwYDtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChsb3cpO1xuXG4gICAgICAgIGNvbnN0IGF2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYXZnLnRleHRDb250ZW50ID0gYEF2ZzogJHtmb3JlY2FzdC5hdmd0ZW1wfcKwYDtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChhdmcpO1xuXG4gICAgICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGhpZ2gudGV4dENvbnRlbnQgPSBgSDogJHtmb3JlY2FzdC5tYXh0ZW1wfcKwYDtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBjaXR5LnRleHRDb250ZW50ID0gJyc7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1pbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1heC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZlZWxzLnRleHRDb250ZW50ID0gJyc7XG4gICAgZXBhLnRleHRDb250ZW50ID0gJyc7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnJztcbiAgICB1di50ZXh0Q29udGVudCA9ICcnO1xuICAgIGhvdXJzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yZWNhc3RzLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVSShkYXRhKSB7XG4gICAgcmVzZXQoKTtcbiAgICBnZXRTdW5zZXRTdW5yaXNlKGRhdGEpO1xuICAgIHJlcm5kZXJMZWZ0Q29udGFpbmVyKGRhdGEudG9kYXkpO1xuICAgIHJlbmRlckluZm8oZGF0YS50b2RheSk7XG4gICAgcmVuZGVySG91cnMoZGF0YS5ob3Vycyk7XG4gICAgaG91clNjcm9sbCgpO1xuICAgIHJlbmRlckZvcmVjYXN0cyhkYXRhLmZvcmVjYXN0KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciB3ZWJwYWNrUXVldWVzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0Ym9keSgoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fSwgKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9