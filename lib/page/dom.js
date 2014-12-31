
var color = require('./color');

var getColor = function($el) {
  var hex = color.rgbTextToHex($el.css('color'))
  return hex;
};

module.exports = {
  getColor: getColor
};
