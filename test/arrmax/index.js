'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getMax(arr) {
  const max = Math.max(...arr);
  return max;
}

console.log(getMax([22, 4, 18, -1, 111, 100, 48]));
