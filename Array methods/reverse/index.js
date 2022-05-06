function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [...arr];
  newArr.reverse();
  return newArr;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(arr));
