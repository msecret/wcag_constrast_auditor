/*
 * wcag_constrast_auditor
 * https://github.com/msecret/wcag_constrast_auditor
 *
 * Copyright (c) 2014 Marco Secreto
 * Licensed under the Unlicense license.
 */

'use strict';

var shell            = require('child_process').execFile;
var phantomjs        = require('phantomjs').path;
var wcv = require('wcag-contrast-verifier');

var runnerScript = './lib/runner.js';

  /*
     page = open(url);
     results = [];
     for textItem in page
       color = getColor(textItem);
       fontSize = getFontSize(textItem);
       bg = getBg(color);
       bgColor = getColor(bg);

       results.push(wcv.verify(color, bgColor, fontSize);

     return results;
  */

  console.log('before');
  shell(phantomjs, [runnerScript, process.argv[1]], function(err, stdout, stderr) {
    console.log('heello');
    if (err) throw err;
    console.log(stdout);
    process.exit(0);
  });
