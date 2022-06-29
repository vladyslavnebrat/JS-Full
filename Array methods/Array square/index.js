function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squaredArr = [...arr];
  return squaredArr.map((elem) => elem * elem);
}

console.log(squareArray([2, 3, 4, 5, 6]));
