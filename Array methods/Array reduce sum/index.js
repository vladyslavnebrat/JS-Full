function sum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7]));
