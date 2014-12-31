
function extractUrl(args) {
  var url,
      error;

  if (args.length < 1 && !(/(?:www\.)?[a-z1-9]+\./i.test(args[1]))) {
    error = new Error('sorry a valid URL could not be recognised');
    error.additional = 'valid URL example: google.com';

    throw error;
  } else {
    url = args[1];
    if (/^(?!https?:\/\/)[\w\d]/i.test(url)) {
      return 'http://' + url + '/';
    }
    return url;
  }
}

module.exports = {
  extractUrl: extractUrl
};
