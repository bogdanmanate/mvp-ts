parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zKeE":[function(require,module,exports) {
var e=module.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e);
},{}],"Q17y":[function(require,module,exports) {
var r=require("../../modules/_core"),i=r.JSON||(r.JSON={stringify:JSON.stringify});module.exports=function(r){return i.stringify.apply(i,arguments)};
},{"../../modules/_core":"zKeE"}],"E09K":[function(require,module,exports) {
module.exports=require("core-js/library/fn/json/stringify");
},{"core-js/library/fn/json/stringify":"Q17y"}],"0ZXZ":[function(require,module,exports) {
"use strict";var e=r(require("@babel/runtime-corejs2/core-js/json/stringify"));function r(e){return e&&e.__esModule?e:{default:e}}var s=self;s.addEventListener("message",function(r){var a=JSON.parse(r.data);console.log("Worker thread received message from host:",a),s.postMessage((0,e.default)({bar:"foo"}))});
},{"@babel/runtime-corejs2/core-js/json/stringify":"E09K"}]},{},["0ZXZ"], null)
//# sourceMappingURL=worker.a7a407bc.js.map