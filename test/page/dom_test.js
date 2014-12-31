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
test('getAllTextElements', function(t) {
  t.test('gets all elements that have text in them', function(t) {
    var $testRoot,
        actual;

    $testRoot = $('<div>')
      .append('<p>Something</p>')
      .append('<p></p>')
      .append('<p>Something</p>');

    actual = dom.getAllTextElements($testRoot);

    t.equal(actual.length, 2, 'Returns the two elements with text');

    t.end();
  });
  t.test('returns none if none have text', function(t) {
    var $testRoot,
        actual;

    $testRoot = $('<div>')
      .append('<p></p>')
      .append('<p></p>')

    actual = dom.getAllTextElements($testRoot);

    t.equal(actual.length, 0, 'Returns the no text elements');

    t.end();
  });
  t.test('returns any type of non meta element with text', function(t) {
    var $testRoot,
        actual;

    $testRoot = $('<div>')
      .append('<div>Something</div>')
      .append('<h1>Something</h1>')
      .append('<article>Something</article>')
      .append('<nav>Something</nav>')
      .append('<ul>Something</ul>')
      .append('<u>Something</u>')
      .append('<table>Something</table>')
      .append('<label>Something</label>')
      .append('<td>Something</td>')
      .append('<a>Something</a>');

    actual = dom.getAllTextElements($testRoot);

    t.equal(actual.length, $testRoot.children().length,
      'Returns the two elements with text');

    t.end();

  });
  t.test('does not return script elements', function(t) {
    var $testRoot,
        script,
        actual;

    var script = document.createElement( 'script' );
    script.type = 'text/javascript';
    script.innerHTML = 'var s;';
    $testRoot = $('<div>').append(script);

    actual = dom.getAllTextElements($testRoot);

    t.equal(actual.length, 0, 'Returns no text elements');

    t.end();
  });
  t.end();
});
