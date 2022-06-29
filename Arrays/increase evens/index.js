const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arr[i] % 2 === 0 ? arr[i] + delta : arr[i];
  }

  return newArr;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24])
