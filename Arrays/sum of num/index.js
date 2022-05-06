'use strict';

const numbers = [11, 22, 33, 55, 66];

// const a = numbers[0];
// const b = numbers[1];

// const [a, b, ...arr] = numbers;

// console.log(a, b, [1, 2, 3, ...arr]);

function swap(arr) {
  const [start, ...rest] = arr;

  return [...rest, start];
}

console.log(swap(numbers));

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const newArr = [...numbers];
  return newArr.push(newArr.shift());
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
