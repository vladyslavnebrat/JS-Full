'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
// const getMaxAbsoluteNumber = (arr) => {
//   let max = -Infinity;
//   arr.forEach((num) => {
//     if (Math.abs(num) > max) {
//       max = Math.abs(num);
//     }
//   });
//   return max;
// };

const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  if (arr.length === 0) {
    return null;
  }

  const absoluteValues = arr.map((num) => Math.abs(num));
  return Math.max(...absoluteValues);
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
