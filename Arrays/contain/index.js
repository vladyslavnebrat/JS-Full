function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  let uniqe = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      uniqe++;
    }
  }
  return uniqe;
}

console.log([5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0]);
console.log(uniqueCount([5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0]));
