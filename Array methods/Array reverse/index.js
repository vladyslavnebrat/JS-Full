function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reversedArr = [...arr];
  return reversedArr.reverse();
}

console.log(reverseArray([2, 3, 4, 5, 6]));
