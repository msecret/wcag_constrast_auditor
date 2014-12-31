
'use strict';

var args = require('../lib/args');

exports.extractUrl = {
  testExists: function(t) {
    t.ok(args.extractUrl);
    t.done();
  }
};
