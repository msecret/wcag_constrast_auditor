var $ = require('jquery');

var test = require('tapes');

var color = require('../../lib/page/color');

test('rgbTextToHex', function(t) {
  t.test('should turn an rgb color string to text', function(t) {
    var testRGB = 'rgb(255, 34, 255)',
        expected = '#ff22ff',
        actual;

    actual = color.rgbTextToHex(testRGB);

    t.equal(actual, expected, 'The color is transformed to hex');

    t.end();
  });
  t.test('should ignore alpha values', function(t) {
    var testRGB = 'rgb(255, 34, 255, 0.3)',
        expected = '#ff22ff',
        actual;

    actual = color.rgbTextToHex(testRGB);

    t.equal(actual, expected, 'The color returned does not have an alpha involved');

    t.end();
  });
  t.end();
});
