function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }

  arr.map((x) => {
    if (x % 2 === 0) {
      return x + delta;
    }
    return x;
  });
}

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(increaseEvenEl(arr2, 20));
