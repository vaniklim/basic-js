const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr, depth = 1 ) {
    let res = depth;
      arr.forEach(el => {
        if (Array.isArray(el)) {
          let tempDepth = this.calculateDepth(el, depth + 1);
          if (tempDepth > res) {
            res = tempDepth;
          }
        }
      });
      return res;
    }
}

module.exports = {
  DepthCalculator
};
