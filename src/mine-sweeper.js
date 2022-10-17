const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  let res = [];
  let eggs = 0;
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let mainIndex = i;
      let subIndex = j;
      let mainTopIndex = mainIndex - 1 < 0 ? false : (mainIndex - 1).toString();
      let mainBottomIndex = mainIndex + 1 > matrix.length - 1 ? false : mainIndex + 1;
      let subLeftIndex = subIndex - 1 < 0 ? false : (subIndex - 1).toString();
      let subRightIndex = subIndex + 1 > matrix[i].length - 1 ? false : subIndex + 1;
      if (subLeftIndex && mainTopIndex) {
        if (matrix[mainTopIndex][subLeftIndex] === true) {
          eggs++;
        }
      }
      if (mainTopIndex) {
        if (matrix[mainTopIndex][subIndex] === true) {
          eggs++;
        }
      }
      if (mainTopIndex && subRightIndex) {
        if (matrix[mainTopIndex][subRightIndex] === true) {
          eggs++;
        }
      }
      if (subLeftIndex) {
        if (matrix[mainIndex][subLeftIndex] === true) {
          eggs++;
        }
      }
      if (subRightIndex) {
        if (matrix[mainIndex][subRightIndex] === true) {
          eggs++;
        }
      }
      if (subLeftIndex && mainBottomIndex) {
        if (matrix[mainBottomIndex][subLeftIndex] === true) {
          eggs++;
        }
      }
      if (mainBottomIndex) {
        if (matrix[mainBottomIndex][subIndex] === true) {
          eggs++;
        }
      }
      if (mainBottomIndex && subRightIndex) {
        if (matrix[mainBottomIndex][subRightIndex] === true) {
          eggs++;
        }
      }
      res[i].push(eggs);
      eggs = 0;
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
