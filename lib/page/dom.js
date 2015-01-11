var $ = require('jquery');

var color = require('./color');

var clickHandlersSet = false;

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

var clickHandler = function(ev, done) {
  ev.preventDefault();
  done($(this));
};

var setClickHandlers = function($root, done) {
  if (clickHandlersSet) {
    return;
  }
  $root.each(function() {
    $(this).on('click', function(ev) {
      clickHandler(ev, done);
    });
  });
  clickHandlersSet = true;
};

var getBackgroundElement = function($el, $root, done) {
  setClickHandlers($root, done);
  $el.css('pointerEvents', 'none');
  $el.click();
  $el.css('pointerEvents', 'inherit');
};

module.exports = {
  getForeColor: getForeColor,
  getBackgroundColor: getBackgroundColor,
  getAllTextElements: getAllTextElements
};
