var $ = require('jquery');

var test = require('tapes');

var dom = require('../../lib/page/dom');

test('getColor', function(t) {
  t.test('exists', function(t) {
    t.ok(dom.getColor);
    t.end();
  });
  t.end();
});
