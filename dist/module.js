(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var sum = function sum(a) {
    var b = arguments[1] === undefined ? 6 : arguments[1];
    return a + b;
};

var square = function square(b) {
    "use strict";
    return b * b;
};

var variable = 8;

exports.sum = sum;
exports.square = square;
exports.variable = variable;

},{}],2:[function(require,module,exports){
'use strict';

var _import = require('./import');

console.log((0, _import.square)(5)); //25

},{"./import":1}]},{},[2]);
