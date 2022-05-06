const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr[i] = arr[i] + delta;
  }

  return newArr;
};
