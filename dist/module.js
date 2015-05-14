(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var func1 = function func1(a) {
    return a + 1;
};

var func2 = function func2(b) {
    "use strict";
    return b * b;
};

var var1 = 3;

exports.func1 = func1;
exports.func2 = func2;
exports.var1 = var1;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

console.log(_import.var1);

},{"./import":1}]},{},[2]);
