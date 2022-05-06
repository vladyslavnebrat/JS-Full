function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = [...arr];
  const [start, ...rest] = newArr;

  return newArr;
}

const numbers = [1, 2, 3];
console.log(cloneArr(numbers));
