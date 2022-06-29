function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(newArr[i] * newArr[i]);
  }

  return newArr;
}

console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
