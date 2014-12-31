
/*
 * rgbTextToHex will take a string representation of an a color with separate
 * rgb values and transform it into a hex with a Octothorpe at the beginning.
 * This is useful for transforming values returned from jQuery's css method.
 *
 * @param {String} rgb - A string of the rgb value like "rgb(255, 11, 240)".
 * @return {String} A string in hex format as "#22ff11".
 */
var rgbTextToHex = function(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
    ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

module.exports = {
  rgbTextToHex: rgbTextToHex
};
