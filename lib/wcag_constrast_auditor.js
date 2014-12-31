/* * wcag_constrast_auditor * https://github.com/msecret/wcag_constrast_auditor
 *
 * Copyright (c) 2014 Marco Secreto
 * Licensed under the Unlicense license.
 */

'use strict';

var shell = require('child_process').spawn;
var phantomjs = require('phantomjs');

var runnerScript = './lib/runner.js';
var url = 'http://localhost:8000/donate';

var phantom = shell(phantomjs.path, [runnerScript, url], function(err) {
  console.log(err);
});
phantom.stdout.setEncoding('utf8');
phantom.stdout.on('data', function(data) {
  var potentialData;

  try {
    potentialData = JSON.parse(data);
    console.log(potentialData);
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log(data);
    } else {
      console.log(':: PAGE ERROR ::');
      console.log(':: error then data ::');
      console.log(e);
      console.log(data);
    }
  }
});
phantom.stderr.on('data', function(data) {
  console.log(data);
});
phantom.on('exit', function(code) {
  console.log(code);
  process.exit(code);
});
