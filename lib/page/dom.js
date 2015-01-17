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

var getElementAtCoords = function(x, y, $root) {
  var $elements = $root.find('*').map(function() {
    var $this = $(this),
        offset = $this.offset(),
        l = offset.left,
        t = offset.top,
        h = $this.height(),
        w = $this.width(),
        maxx,
        maxy;

    maxx = l + w;
    maxy = t + h;

    return (y <= maxy && y >= t) && (x <= maxx && x >= l) ? $this : null;
  });

  return $elements;
}

var getBackgroundElement = function($el, $root) {
  var pos = $el.position();
  getElementAtCoords(pos.left, pos.top, $root);
};

module.exports = {
  getForeColor: getForeColor,
  getBackgroundColor: getBackgroundColor,
  getAllTextElements: getAllTextElements
};
