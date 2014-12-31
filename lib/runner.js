var system = require('system');

var page = require('webpage').create();

var args = require('./args');

// util
function formatError(msg, trace, type) {
  var msgStack = [(type || 'PHANTOM') + ' ERROR :: ' + msg];
  if (trace && trace.length) {
    msgStack.push(' TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' +
        (t.file || t.sourceURL) +
        ': ' + t.line +
        (t.function ? ' (in function ' + t.function + ')' : ''));
    });
  }
  return msgStack;
}

// phantomSetup
phantom.onError = function(msg, trace) {
  console.error(formatError(msg, trace));
  phantom.exit(1);
};

// pageSetup
page.onError = function(msg, trace) {
  console.error(formatError(msg, trace, 'PAGE'));
  phantom.exit(1);
};
page.onConsoleMessage = function(msg) {
  console.log(msg);
};

var url = args.extractUrl(system.args);

// Run
page.open(url, function(status) {
  var $s;

  if (status !== 'success') { phantom.exit(); }

  page.injectJs('../node_modules/jquery/dist/jquery.js');
  page.injectJs('./page_build.js');
  page.evaluate(function() {
    var title = {title: document.title};
    console.log(JSON.stringify(title));
  });
  $s = page.evaluate(function() {
    var $h1 = $('h1').first();
    console.log(dom.getColor($h1));
  });

  phantom.exit();
});
