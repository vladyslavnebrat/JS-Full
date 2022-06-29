function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
  }

  console.log(sum);
  if (sum > 100) {
    return true;
  }
  return false;
}

console.log(checkSum([2, 5, 10]));
