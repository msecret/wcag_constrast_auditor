var $ = require('jquery');

var test = require('tapes');

var dom = require('../../lib/page/dom');

test('getColor', function(t) {
  t.test('exists', function(t) {
    t.ok(dom.getColor);
    t.end();
  });
  t.test('returns css color as hex', function(t) {
    var expected = '#ff22ff',
        actual,
        $testEl;

    $testEl = $('<p>')
      .css('color', expected)
      .text('testText');

    actual = dom.getColor($testEl);

    t.equal(actual, expected, 'The color is the css color value as a hex');

    t.end();
  });
  t.end();
});
