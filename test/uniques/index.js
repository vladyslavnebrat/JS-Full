'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getUniques(arr) {
  return [...new Set(arr)];
}

console.log(getUniques([1, 2, 1, 5, 18, 5, 2, 1, 9]));
