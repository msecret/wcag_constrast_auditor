var page = require('webpage').create();
var system = require('system');

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

pageSetup();

function gerUrl(args) {
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

function pageSetup() {
  var url;
  console.log('url');

  url = getUrl(system.args);

  page.onError = function(msg, trace) {
    console.log('Error :', msg);

    trace.forEach(function(item) {
      console.log('Trace:  ', item.file, ':', item.line);
    });
  }

  page.open(url, function(status) {
    if (status === 'success') {
      console.log('success');

      phantom.exit();
    }
  });
}
