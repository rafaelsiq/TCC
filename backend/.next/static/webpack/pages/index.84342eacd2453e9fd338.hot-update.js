webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=`${id} ${count}`;idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:undefined;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(key=>{style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?`@media ${obj.media} {${obj.css}}`:obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+=`\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=()=>{removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=(list,options)=>{options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************!*\
  !*** (webpack)/css-loader/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/css/styles.module.css":
/*!*************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./pages/css/styles.module.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles_main__1406V{\r\n    position: absolute;\r\n    width:  40%;\r\n    height: 70%;\r\n    left: 30%;\r\n    top: 119px;\r\n    background-color: rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n.styles_header__2yjlt {\r\n    margin-top: 35px;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.styles_header__2yjlt a{\r\n    text-decoration: none;\r\n\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 35px;\r\n    line-height: 41px;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    padding-left: 40px;\r\n}\r\n\r\n.styles_header__2yjlt a:nth-child(1){\r\n    padding-right: 50px;\r\n    border-right: 1px solid rgba(255, 255, 255, 0.9);\r\n    color: rgba(255, 255, 255, 0.9);\r\n    text-decoration: 2px underline;\r\n}\r\n\r\n.styles_header__2yjlt a:nth-child(2):hover{\r\n    color: rgba(255, 255, 255, 0.9);\r\n    text-decoration: 2px underline;\r\n}\r\n\r\n.styles_login-form__RZzyK {\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n}\r\n\r\n.styles_login-form__RZzyK p {\r\n    margin:0;\r\n    margin-top: 2 5px;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    margin-left: 5%;\r\n}\r\n\r\n.styles_login-form__RZzyK p {\r\n    margin-bottom: 5px;\r\n    text-decoration: none;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-size: 18px;\r\n    line-height: 29px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.styles_login-form__RZzyK input {\r\n    width: 75%;\r\n    margin-bottom: 20px;\r\n    padding: 5px;\r\n    padding-right: 2%;\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    margin-left: 10%;\r\n    border: none;\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\r\n    text-decoration-color: gray;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    line-height: 29px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n}\r\n/* ::placeholder { \r\n    color: rgba(255, 255, 255, 0.5);\r\n    opacity: 1; \r\n  } */\r\n\r\n  .styles_main__1406V .styles_login-remember__2qJmq input {\r\n    margin: 0;  \r\n    margin-top: 8px;  \r\n    margin-left: 10%;\r\n    padding: 0;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n.styles_main__1406V .styles_login-remember__2qJmq p {\r\n    margin: none;\r\n    margin-right: 1px;  \r\n    width: auto;\r\n    height: auto;\r\n  }\r\n.styles_main__1406V .styles_login-remember__2qJmq {\r\n    display: flex;\r\n}\r\n\r\n.styles_login-confirmation__3h8hr{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.styles_login-confirmation__3h8hr button{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 15px;\r\n    margin-top: 15%;\r\n    width: 80%;\r\n    height: 60px;\r\n    top: 752px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    border: 0;\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(21.92%, rgba(28, 106, 224, 0.77)), color-stop(129.03%, rgba(162, 33, 223, 0.69))), -webkit-gradient(linear, left bottom, left top, from(#3E43CD), to(#3E43CD)), #FFFFFF;\r\n    background: -webkit-linear-gradient(top, rgba(28, 106, 224, 0.77) 21.92%, rgba(162, 33, 223, 0.69) 129.03%), -webkit-linear-gradient(bottom, #3E43CD, #3E43CD), #FFFFFF;\r\n    background: linear-gradient(180deg, rgba(28, 106, 224, 0.77) 21.92%, rgba(162, 33, 223, 0.69) 129.03%), linear-gradient(0deg, #3E43CD, #3E43CD), #FFFFFF;\r\n    border-radius: 18px;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    line-height: 29px;\r\n}\r\n\r\n.styles_login-confirmation__3h8hr button:hover {\r\n    cursor: pointer;\r\n    text-decoration: 1px underline;\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(21.92%, rgba(28, 106, 224, 0.47)), color-stop(129.03%, rgba(162, 33, 223, 0.49))), -webkit-gradient(linear, left bottom, left top, from(#3E43CD), to(#3E43CD)), #FFFFFF;\r\n    background: -webkit-linear-gradient(top, rgba(28, 106, 224, 0.47) 21.92%, rgba(162, 33, 223, 0.49) 129.03%), -webkit-linear-gradient(bottom, #3E43CD, #3E43CD), #FFFFFF;\r\n    background: linear-gradient(180deg, rgba(28, 106, 224, 0.47) 21.92%, rgba(162, 33, 223, 0.49) 129.03%), linear-gradient(0deg, #3E43CD, #3E43CD), #FFFFFF;\r\n}\r\n\r\n.styles_login-form__RZzyK #styles_forgot_password__1Kl41{\r\n    display: flex;\r\n    justify-content: center;\r\n    font-family: Roboto;\r\n    color: rgba(255, 255, 255, 0.55);\r\n    padding-top: 2%;\r\n    \r\n}\r\n\r\n.styles_login-form__RZzyK #styles_forgot_password__1Kl41:hover{\r\n    color: rgba(255, 255, 255, 0.8);\r\n    \r\n}", "",{"version":3,"sources":["webpack://pages/css/styles.module.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,SAAS;IACT,UAAU;IACV,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;;IAErB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,gDAAgD;IAChD,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,QAAQ;IACR,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,6BAA6B;IAC7B,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;IACZ,2CAA2C;IAC3C,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,+BAA+B;AACnC;AACA;;;KAGK;;EAEH;IACE,SAAS;IACT,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,WAAW;IACX,YAAY;EACd;;AAEF;IACI,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,YAAY;EACd;AACF;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,UAAU;IACV,YAAY;IACZ,UAAU;IACV,+BAA+B;IAC/B,SAAS;IACT,8OAAwJ;IAAxJ,uKAAwJ;IAAxJ,wJAAwJ;IACxJ,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,8OAAwJ;IAAxJ,uKAAwJ;IAAxJ,wJAAwJ;AAC5J;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;IAChC,eAAe;;AAEnB;;AAEA;IACI,+BAA+B;;AAEnC","sourcesContent":[".main{\r\n    position: absolute;\r\n    width:  40%;\r\n    height: 70%;\r\n    left: 30%;\r\n    top: 119px;\r\n    background-color: rgba(255, 255, 255, 0.15);\r\n}\r\n\r\n.header {\r\n    margin-top: 35px;\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.header a{\r\n    text-decoration: none;\r\n\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 35px;\r\n    line-height: 41px;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    padding-left: 40px;\r\n}\r\n\r\n.header a:nth-child(1){\r\n    padding-right: 50px;\r\n    border-right: 1px solid rgba(255, 255, 255, 0.9);\r\n    color: rgba(255, 255, 255, 0.9);\r\n    text-decoration: 2px underline;\r\n}\r\n\r\n.header a:nth-child(2):hover{\r\n    color: rgba(255, 255, 255, 0.9);\r\n    text-decoration: 2px underline;\r\n}\r\n\r\n.login-form {\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n}\r\n\r\n.login-form p {\r\n    margin:0;\r\n    margin-top: 2 5px;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    margin-left: 5%;\r\n}\r\n\r\n.login-form p {\r\n    margin-bottom: 5px;\r\n    text-decoration: none;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-size: 18px;\r\n    line-height: 29px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\n.login-form input {\r\n    width: 75%;\r\n    margin-bottom: 20px;\r\n    padding: 5px;\r\n    padding-right: 2%;\r\n    background-color: transparent;\r\n    text-decoration: none;\r\n    margin-left: 10%;\r\n    border: none;\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.5);\r\n    text-decoration-color: gray;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    line-height: 29px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n}\r\n/* ::placeholder { \r\n    color: rgba(255, 255, 255, 0.5);\r\n    opacity: 1; \r\n  } */\r\n\r\n  .main .login-remember input {\r\n    margin: 0;  \r\n    margin-top: 8px;  \r\n    margin-left: 10%;\r\n    padding: 0;\r\n    width: auto;\r\n    height: auto;\r\n  }\r\n\r\n.main .login-remember p {\r\n    margin: none;\r\n    margin-right: 1px;  \r\n    width: auto;\r\n    height: auto;\r\n  }\r\n.main .login-remember {\r\n    display: flex;\r\n}\r\n\r\n.login-confirmation{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.login-confirmation button{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding-top: 15px;\r\n    margin-top: 15%;\r\n    width: 80%;\r\n    height: 60px;\r\n    top: 752px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    border: 0;\r\n    background: linear-gradient(180deg, rgba(28, 106, 224, 0.77) 21.92%, rgba(162, 33, 223, 0.69) 129.03%), linear-gradient(0deg, #3E43CD, #3E43CD), #FFFFFF;\r\n    border-radius: 18px;\r\n    font-family: Roboto;\r\n    font-style: normal;\r\n    font-size: 20px;\r\n    line-height: 29px;\r\n}\r\n\r\n.login-confirmation button:hover {\r\n    cursor: pointer;\r\n    text-decoration: 1px underline;\r\n    background: linear-gradient(180deg, rgba(28, 106, 224, 0.47) 21.92%, rgba(162, 33, 223, 0.49) 129.03%), linear-gradient(0deg, #3E43CD, #3E43CD), #FFFFFF;\r\n}\r\n\r\n.login-form #forgot_password{\r\n    display: flex;\r\n    justify-content: center;\r\n    font-family: Roboto;\r\n    color: rgba(255, 255, 255, 0.55);\r\n    padding-top: 2%;\r\n    \r\n}\r\n\r\n.login-form #forgot_password:hover{\r\n    color: rgba(255, 255, 255, 0.8);\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "styles_main__1406V",
	"header": "styles_header__2yjlt",
	"login-form": "styles_login-form__RZzyK",
	"login-remember": "styles_login-remember__2qJmq",
	"login-confirmation": "styles_login-confirmation__3h8hr",
	"forgot_password": "styles_forgot_password__1Kl41"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/css/styles.module.css":
/*!*************************************!*\
  !*** ./pages/css/styles.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/css/styles.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/css/styles.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/css/styles.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.module.css */ "./pages/css/styles.module.css");
/* harmony import */ var _css_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Merizito\\Documents\\GitHub\\TCC\\backend\\pages\\index.js";


function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Login, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Index;

function Login() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "class": _css_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "stylesheet",
      href: "_app.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/login",
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/signup",
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      "class": "login-form",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "login-username",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Username"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "username",
          placeholder: "Username Example",
          id: "username_input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "login-password",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          placeholder: "************",
          id: "password_input"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "login-remember",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          name: "Remember me",
          id: "remember_checkbox"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Remember me"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "login-confirmation",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "login_btn",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        id: "forgot_password",
        children: "Forgot my password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_c2 = Login;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8od2VicGFjaykvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Nzcy9zdHlsZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3NzL3N0eWxlcy5tb2R1bGUuY3NzP2FjMjgiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiTG9naW4iLCJzdHlsZXMiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWEsaUNBQWlDLFNBQVMsMkJBQTJCLDhCQUE4QjtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxlQUFlLEdBQUcscUNBQXFDLGNBQWMsaUNBQWlDLHNDQUFzQywrQ0FBK0M7QUFDdlAsOEVBQThFLElBQUk7QUFDbEY7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RCxtQkFBbUIsMEJBQTBCLHVCQUF1QixHQUFHLHFCQUFxQiwwQ0FBMEMsY0FBYyxZQUFZLHFCQUFxQixLQUFLLDJDQUEyQyxTQUFTLFFBQVEsZUFBZSxvQ0FBb0Msb0JBQW9CLHFCQUFxQixZQUFZLGNBQWMsS0FBSyxtQkFBbUIsbURBQW1ELDhCQUE4QixvQkFBb0IsR0FBRyxHQUFHLE1BQU0sRUFBRSx1QkFBdUIsNkNBQTZDLFdBQVcsNkNBQTZDLGVBQWUsZ0NBQWdDLGlDQUFpQyxLQUFLLGtCQUFrQixzREFBc0QsR0FBRyw4QkFBOEIsb0JBQW9CLHFDQUFxQyw0Q0FBNEMsd0NBQXdDLDBDQUEwQztBQUN4K0IsS0FBc0MsQ0FBQyxzQkFBaUIsQ0FBQyxTQUFJLENBQUMsVUFBVSx5QkFBeUIsc0NBQXNDLHlDQUF5QyxFQUFFLHVDQUF1Qyx1QkFB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QUMsR0FBUjtBQUFZLFVBQUUsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtDSDs7TUFuQ1FGLEs7QUFxQ01ELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg0MzQyZWFjZDI0NTNlOWZkMzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1gJHtpZH0gJHtjb3VudH1gO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChrZXk9PntzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/YEBtZWRpYSAke29iai5tZWRpYX0geyR7b2JqLmNzc319YDpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPWBcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCR7YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKX0gKi9gO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPSgpPT57cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9KGxpc3Qsb3B0aW9ucyk9PntvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlc19tYWluX18xNDA2VntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogIDQwJTtcXHJcXG4gICAgaGVpZ2h0OiA3MCU7XFxyXFxuICAgIGxlZnQ6IDMwJTtcXHJcXG4gICAgdG9wOiAxMTlweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19oZWFkZXJfXzJ5amx0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19oZWFkZXJfXzJ5amx0IGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQxcHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19oZWFkZXJfXzJ5amx0IGE6bnRoLWNoaWxkKDEpe1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19oZWFkZXJfXzJ5amx0IGE6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IDJweCB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfbG9naW4tZm9ybV9fUlp6eUsge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19sb2dpbi1mb3JtX19SWnp5SyBwIHtcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIgNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19sb2dpbi1mb3JtX19SWnp5SyBwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjlweDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19sb2dpbi1mb3JtX19SWnp5SyBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMiU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBncmF5O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxufVxcclxcbi8qIDo6cGxhY2Vob2xkZXIgeyBcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgb3BhY2l0eTogMTsgXFxyXFxuICB9ICovXFxyXFxuXFxyXFxuICAuc3R5bGVzX21haW5fXzE0MDZWIC5zdHlsZXNfbG9naW4tcmVtZW1iZXJfXzJxSm1xIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luOiAwOyAgXFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDsgIFxcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbi5zdHlsZXNfbWFpbl9fMTQwNlYgLnN0eWxlc19sb2dpbi1yZW1lbWJlcl9fMnFKbXEgcCB7XFxyXFxuICAgIG1hcmdpbjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7ICBcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG4uc3R5bGVzX21haW5fXzE0MDZWIC5zdHlsZXNfbG9naW4tcmVtZW1iZXJfXzJxSm1xIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19sb2dpbi1jb25maXJtYXRpb25fXzNoOGhye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19sb2dpbi1jb25maXJtYXRpb25fXzNoOGhyIGJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgdG9wOiA3NTJweDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIxLjkyJSwgcmdiYSgyOCwgMTA2LCAyMjQsIDAuNzcpKSwgY29sb3Itc3RvcCgxMjkuMDMlLCByZ2JhKDE2MiwgMzMsIDIyMywgMC42OSkpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSgjM0U0M0NEKSwgdG8oIzNFNDNDRCkpLCAjRkZGRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjgsIDEwNiwgMjI0LCAwLjc3KSAyMS45MiUsIHJnYmEoMTYyLCAzMywgMjIzLCAwLjY5KSAxMjkuMDMlKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjM0U0M0NELCAjM0U0M0NEKSwgI0ZGRkZGRjtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyOCwgMTA2LCAyMjQsIDAuNzcpIDIxLjkyJSwgcmdiYSgxNjIsIDMzLCAyMjMsIDAuNjkpIDEyOS4wMyUpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzNFNDNDRCwgIzNFNDNDRCksICNGRkZGRkY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0eWxlc19sb2dpbi1jb25maXJtYXRpb25fXzNoOGhyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAxcHggdW5kZXJsaW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIxLjkyJSwgcmdiYSgyOCwgMTA2LCAyMjQsIDAuNDcpKSwgY29sb3Itc3RvcCgxMjkuMDMlLCByZ2JhKDE2MiwgMzMsIDIyMywgMC40OSkpKSwgLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgZnJvbSgjM0U0M0NEKSwgdG8oIzNFNDNDRCkpLCAjRkZGRkZGO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjgsIDEwNiwgMjI0LCAwLjQ3KSAyMS45MiUsIHJnYmEoMTYyLCAzMywgMjIzLCAwLjQ5KSAxMjkuMDMlKSwgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCAjM0U0M0NELCAjM0U0M0NEKSwgI0ZGRkZGRjtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyOCwgMTA2LCAyMjQsIDAuNDcpIDIxLjkyJSwgcmdiYSgxNjIsIDMzLCAyMjMsIDAuNDkpIDEyOS4wMyUpLCBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzNFNDNDRCwgIzNFNDNDRCksICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfbG9naW4tZm9ybV9fUlp6eUsgI3N0eWxlc19mb3Jnb3RfcGFzc3dvcmRfXzFLbDQxe1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyJTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zdHlsZXNfbG9naW4tZm9ybV9fUlp6eUsgI3N0eWxlc19mb3Jnb3RfcGFzc3dvcmRfXzFLbDQxOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3BhZ2VzL2Nzcy9zdHlsZXMubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjs7SUFFckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DO0FBQ0E7OztLQUdLOztFQUVIO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsOE9BQXdKO0lBQXhKLHVLQUF3SjtJQUF4Six3SkFBd0o7SUFDeEosbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsOE9BQXdKO0lBQXhKLHVLQUF3SjtJQUF4Six3SkFBd0o7QUFDNUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSwrQkFBK0I7O0FBRW5DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWlue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAgNDAlO1xcclxcbiAgICBoZWlnaHQ6IDcwJTtcXHJcXG4gICAgbGVmdDogMzAlO1xcclxcbiAgICB0b3A6IDExOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciBhe1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDM1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgYTpudGgtY2hpbGQoMSl7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAycHggdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIGE6bnRoLWNoaWxkKDIpOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IDJweCB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1mb3JtIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1mb3JtIHAge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiA1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tZm9ybSBwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjlweDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWZvcm0gaW5wdXQge1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JheTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG4vKiA6OnBsYWNlaG9sZGVyIHsgXFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxuICAgIG9wYWNpdHk6IDE7IFxcclxcbiAgfSAqL1xcclxcblxcclxcbiAgLm1haW4gLmxvZ2luLXJlbWVtYmVyIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luOiAwOyAgXFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDsgIFxcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbi5tYWluIC5sb2dpbi1yZW1lbWJlciBwIHtcXHJcXG4gICAgbWFyZ2luOiBub25lO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFweDsgIFxcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbi5tYWluIC5sb2dpbi1yZW1lbWJlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5sb2dpbi1jb25maXJtYXRpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tY29uZmlybWF0aW9uIGJ1dHRvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgdG9wOiA3NTJweDtcXHJcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI4LCAxMDYsIDIyNCwgMC43NykgMjEuOTIlLCByZ2JhKDE2MiwgMzMsIDIyMywgMC42OSkgMTI5LjAzJSksIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjM0U0M0NELCAjM0U0M0NEKSwgI0ZGRkZGRjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tY29uZmlybWF0aW9uIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAxcHggdW5kZXJsaW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI4LCAxMDYsIDIyNCwgMC40NykgMjEuOTIlLCByZ2JhKDE2MiwgMzMsIDIyMywgMC40OSkgMTI5LjAzJSksIGxpbmVhci1ncmFkaWVudCgwZGVnLCAjM0U0M0NELCAjM0U0M0NEKSwgI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ2luLWZvcm0gI2ZvcmdvdF9wYXNzd29yZHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMiU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubG9naW4tZm9ybSAjZm9yZ290X3Bhc3N3b3JkOmhvdmVye1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX18xNDA2VlwiLFxuXHRcImhlYWRlclwiOiBcInN0eWxlc19oZWFkZXJfXzJ5amx0XCIsXG5cdFwibG9naW4tZm9ybVwiOiBcInN0eWxlc19sb2dpbi1mb3JtX19SWnp5S1wiLFxuXHRcImxvZ2luLXJlbWVtYmVyXCI6IFwic3R5bGVzX2xvZ2luLXJlbWVtYmVyX18ycUptcVwiLFxuXHRcImxvZ2luLWNvbmZpcm1hdGlvblwiOiBcInN0eWxlc19sb2dpbi1jb25maXJtYXRpb25fXzNoOGhyXCIsXG5cdFwiZm9yZ290X3Bhc3N3b3JkXCI6IFwic3R5bGVzX2ZvcmdvdF9wYXNzd29yZF9fMUtsNDFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL3N0eWxlcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9zdHlsZXMubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL3N0eWxlcy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9jc3Mvc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPExvZ2luIC8+XHJcbiAgICApXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy5tYWlufT5cclxuXHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJfYXBwLmpzXCI+PC9saW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiPkxvZ2luPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9zaWdudXBcIj5TaWduIFVwPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5Vc2VybmFtZTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lIEV4YW1wbGVcIiBpZD1cInVzZXJuYW1lX2lucHV0XCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDxwPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKioqXCIgaWQ9XCJwYXNzd29yZF9pbnB1dFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ2luLXJlbWVtYmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlJlbWVtYmVyIG1lXCIgaWQ9XCJyZW1lbWJlcl9jaGVja2JveFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8cD5SZW1lbWJlciBtZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSBcImxvZ2luLWNvbmZpcm1hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImxvZ2luX2J0blwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBpZD1cImZvcmdvdF9wYXNzd29yZFwiPkZvcmdvdCBteSBwYXNzd29yZDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==