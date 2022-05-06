function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const arr = [...array];
  let count = 1;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[i] === arr[j]) {
        count += 0;
      }
      if (arr[i] !== arr[j]) {
        count += 1;
      }
    }
  }
  return count;
}

console.log([5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0]);
console.log(uniqueCount([5, 8, 1, -3, 0, 5, 2, 9, 6, 1, 0]));
