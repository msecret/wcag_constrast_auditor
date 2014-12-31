
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
