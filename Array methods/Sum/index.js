function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  // return null if arr is not array

  const result = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  // sum of arr elements
  return result;
  // return as expected in function in accordance with eslint
}

console.log(sum([2, 5, 6, 3, 0, 3, -1]));
