var $ = require('jquery');

var test = require('tapes');

var dom = require('../../lib/page/dom');

test('getForeColor', function(t) {
  t.test('exists', function(t) {
    t.ok(dom.getForeColor);
    t.end();
  });
  t.test('returns css color as hex', function(t) {
    var expected = '#ff22ff',
        actual,
        $testEl;

    $testEl = $('<p>')
      .css('color', expected)
      .text('testText');

    actual = dom.getForeColor($testEl);

    t.equal(actual, expected, 'The color is the css color value as a hex');

    t.end();
  });
  t.end();
});
test('getBackgroundColor', function(t) {
  t.test('returns css color as hex', function(t) {
    var expected = '#1188ff',
        actual,
        $testEl;

    $testEl = $('<p>')
      .css('backgroundColor', expected)
      .text('testText');

    actual = dom.getBackgroundColor($testEl);

    t.equal(actual, expected, 'The color is the css color value as a hex');

    t.end();
  });
  t.end();
});
