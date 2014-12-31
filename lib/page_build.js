(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

dom = require('./dom');

},{"./dom":3}],2:[function(require,module,exports){

/*
 * rgbTextToHex will take a string representation of an a color with separate
 * rgb values and transform it into a hex with a Octothorpe at the beginning.
 * This is useful for transforming values returned from jQuery's css method.
 *
 * @param {String} rgb - A string of the rgb value like "rgb(255, 11, 240)".
 * @return {String} A string in hex format as "#22ff11".
 */
var rgbTextToHex = function(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

module.exports = {
  rgbTextToHex: rgbTextToHex
};

},{}],3:[function(require,module,exports){

var color = require('./color');

var getForeColor = function($el) {
  var hex = color.rgbTextToHex($el.css('color'))
  return hex;
};

var getBackgroundColor = function($el) {
  var hex = color.rgbTextToHex($el.css('backgroundColor'))
  return hex;
};

module.exports = {
  getForeColor: getForeColor,
  getBackgroundColor: getBackgroundColor
};

},{"./color":2}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvcGFnZS9idWlsZC5qcyIsImxpYi9wYWdlL2NvbG9yLmpzIiwibGliL3BhZ2UvZG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuZG9tID0gcmVxdWlyZSgnLi9kb20nKTtcbiIsIlxuLypcbiAqIHJnYlRleHRUb0hleCB3aWxsIHRha2UgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYW4gYSBjb2xvciB3aXRoIHNlcGFyYXRlXG4gKiByZ2IgdmFsdWVzIGFuZCB0cmFuc2Zvcm0gaXQgaW50byBhIGhleCB3aXRoIGEgT2N0b3Rob3JwZSBhdCB0aGUgYmVnaW5uaW5nLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIHRyYW5zZm9ybWluZyB2YWx1ZXMgcmV0dXJuZWQgZnJvbSBqUXVlcnkncyBjc3MgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSByZ2IgLSBBIHN0cmluZyBvZiB0aGUgcmdiIHZhbHVlIGxpa2UgXCJyZ2IoMjU1LCAxMSwgMjQwKVwiLlxuICogQHJldHVybiB7U3RyaW5nfSBBIHN0cmluZyBpbiBoZXggZm9ybWF0IGFzIFwiIzIyZmYxMVwiLlxuICovXG52YXIgcmdiVGV4dFRvSGV4ID0gZnVuY3Rpb24ocmdiKSB7XG4gIHJnYiA9IHJnYi5tYXRjaCgvXnJnYmE/W1xccytdP1xcKFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/LFtcXHMrXT8oXFxkKylbXFxzK10/L2kpO1xuICByZXR1cm4gKHJnYiAmJiByZ2IubGVuZ3RoID09PSA0KSA/IFwiI1wiICtcbiAgICAoXCIwXCIgKyBwYXJzZUludChyZ2JbMV0sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcbiAgICAoXCIwXCIgKyBwYXJzZUludChyZ2JbMl0sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpICtcbiAgICAoXCIwXCIgKyBwYXJzZUludChyZ2JbM10sMTApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpIDogJyc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmdiVGV4dFRvSGV4OiByZ2JUZXh0VG9IZXhcbn07XG4iLCJcbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKTtcblxudmFyIGdldEZvcmVDb2xvciA9IGZ1bmN0aW9uKCRlbCkge1xuICB2YXIgaGV4ID0gY29sb3IucmdiVGV4dFRvSGV4KCRlbC5jc3MoJ2NvbG9yJykpXG4gIHJldHVybiBoZXg7XG59O1xuXG52YXIgZ2V0QmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24oJGVsKSB7XG4gIHZhciBoZXggPSBjb2xvci5yZ2JUZXh0VG9IZXgoJGVsLmNzcygnYmFja2dyb3VuZENvbG9yJykpXG4gIHJldHVybiBoZXg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Rm9yZUNvbG9yOiBnZXRGb3JlQ29sb3IsXG4gIGdldEJhY2tncm91bmRDb2xvcjogZ2V0QmFja2dyb3VuZENvbG9yXG59O1xuIl19
