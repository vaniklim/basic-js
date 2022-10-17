const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let n = 1;
    while (str[i] === str[i+1]) {
      n++;
      i++;
    }
    result += n + str[i];
    n = 1;
  }
  return result.split('').filter(s => s != 1).join('');
}

module.exports = {
  encodeLine
};
