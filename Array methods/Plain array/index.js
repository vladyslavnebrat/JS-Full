const flatArray = arr =>
  arr
    .slice()
    .flat()
    .sort((a, b) => a - b);

const arr = [1, 2, 5, 6, 8];
console.log(flatArray(arr));
