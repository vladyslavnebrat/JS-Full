function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  const sum = min + max;
  console.log(sum);
  if (sum > 1000) {
    return true;
  }
  return false;
}

console.log(checker([1, 2, 3, 5, 6, 7, 8, 98, 4444]));
