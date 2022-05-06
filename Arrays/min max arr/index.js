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
  if (sum > 1000) {
    return true;
  }
  return false;
}
