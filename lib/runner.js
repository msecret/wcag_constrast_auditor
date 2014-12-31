var system = require('system');

var page = require('webpage').create();

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

// Args parsing
function getUrl(args) {
  var url,
      error;

  if (args.length < 1 && !(/(?:www\.)?[a-z1-9]+\./i.test(args[1]))) {
    error = new Error('sorry a valid URL could not be recognised');
    error.additional = 'valid URL example: google.com';

    throw error;

    phantom.exit();
  } else {
    url = args[1];
    if (/^(?!https?:\/\/)[\w\d]/i.test(url)) {
      return 'http://' + url + '/';
    }
  }
}
var url = system.args[1];

// Run
page.open(url, function(status) {
  var $s;

  page.injectJs('../node_modules/jquery/dist/jquery.js');
  page.evaluate(function() {
    var title = {title: document.title};
    console.log(JSON.stringify(title));
  });
  $s = page.evaluate(function() {
    return $('h1').first();
  });

  phantom.exit();
});
