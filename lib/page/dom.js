var $ = require('jquery');

var color = require('./color');

var getForeColor = function($el) {
  var hex = color.rgbTextToHex($el.css('color'))
  return hex;
};

var getBackgroundColor = function($el) {
  var hex = color.rgbTextToHex($el.css('backgroundColor'))
  return hex;
};

var getAllTextElements = function($root) {
  var $all;

  $all = $root.contents().filter(function() {
    return (!$(this).is('script') &&
      $(this).text().length > 0);
  });
  return $all;
};

module.exports = {
  getForeColor: getForeColor,
  getBackgroundColor: getBackgroundColor,
  getAllTextElements: getAllTextElements
};
