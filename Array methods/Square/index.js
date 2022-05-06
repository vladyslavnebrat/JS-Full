function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [];

  function square(el) {
    newArr.push(el * el);
  }

  arr.forEach(square);
  return newArr;
}

console.log(squareArray([1, 2, 3]));
